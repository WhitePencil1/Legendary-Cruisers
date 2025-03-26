using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class MotorcyclesController : Controller
    {
        private readonly MyDbContext _context;

        public MotorcyclesController(MyDbContext context)
        {
            _context = context;
        }

        // GET: api/motorcycles/test
        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok("Ты подключен");
        }

       

        // GET: api/motorcycles/catalog
        [HttpGet("catalog")]
        public async Task<ActionResult<PaginatedResponse<MotorcycleCard>>> GetMotorcycleCards(
            [FromQuery] string? search,
            [FromQuery] List<string>? models,
            [FromQuery] List<int>? engineVolumes,
            [FromQuery] int? priceFrom,
            [FromQuery] int? priceTo,
            [FromQuery] int? mileageFrom,
            [FromQuery] int? mileageTo,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 9)  
        {
            var query = _context.Motorcycles.AsQueryable();

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(m => m.Name.ToLower().Contains(search.ToLower()));
            }

            if(models != null && models.Any())
            {
                query = query.Where(m => models.Contains(m.Model.Name.Trim()));
            }

            // Фильтр по цене
            if (priceFrom.HasValue)
            {
                query = query.Where(m => m.Price >= priceFrom.Value);
            }
            if (priceTo.HasValue)
            {
                query = query.Where(m => m.Price <= priceTo.Value);
            }

            // Фильтр по объему двигателя
            if (engineVolumes != null && engineVolumes.Any())
            {
                query = query.Where(m => engineVolumes.Contains(m.Model.EngineVolume));
            }

            // Фильтр по пробегу
            if (mileageFrom.HasValue)
            {
                query = query.Where(m => m.Mileage >= mileageFrom.Value);
            }
            if (mileageTo.HasValue)
            {
                query = query.Where(m => m.Mileage <= mileageTo.Value);
            }

            int totalCount = await query.CountAsync();

            var cards = await query
                .Select(m => new MotorcycleCard
                {
                    Id = m.Id,
                    Name = m.Name,
                    Price = m.Price,
                    Image = $"/motorcycles/{m.Image}" //Ссылка на изображение на сервере
                })
                .Skip((page-1) * pageSize) // Пропустить `skip` элементов
                .Take(pageSize) // Взять `take` элементов
                .ToListAsync();


            return new PaginatedResponse<MotorcycleCard>
            {
                Data = cards,
                TotalCount = totalCount,
                Page = page,
                PageSize = pageSize,
                TotalPages = (int)Math.Ceiling(totalCount / (double)pageSize)
            };
        }

        [HttpGet("catalog/simNames")]
        public async Task<IActionResult> GetSimilarNames([FromQuery]string? name) 
        {
            var motorcycles = await _context.Motorcycles
                .Select(m => m.Name)
                .Where(m => EF.Functions.Like(m!, $"%{name}%"))
                .ToListAsync();

            if (motorcycles == null || motorcycles.Count == 0)
            {
                return NotFound();
            }
            return Ok(motorcycles);
        }



        [HttpPost("create")]
        public async Task<IStatusCodeActionResult> CreateProduct(
            [FromForm] string name,
            [FromForm] int dealerId,
            [FromForm] int price,
            [FromForm] int mileage,
            [FromForm] string color,
            [FromForm] string description,
            [FromForm] int brandId,
            [FromForm] string modelName,
            [FromForm] IFormFile imageFile)
        {
            if (imageFile == null || imageFile.Length == 0)
            {
                return BadRequest("Файл изображения обязателен.");
            }

            // Генерируем уникальное имя файла
            string fileName = $"{Guid.NewGuid()}_{imageFile.FileName}";
            string filePath = Path.Combine("wwwroot/motorcycles", fileName);

            Console.WriteLine(filePath);

            // Сохраняем изображение на сервер
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

            var motorcycle = new Motorcycle
            {
                Name = name,
                DealerId = dealerId,
                Price = price,
                Mileage = mileage,
                Color = color,
                Image = fileName, // Только имя файла, путь клиент сам сформирует
                Description = description,
                ModelName = modelName,
                BrandId = brandId,
                InStock = true
            };

            Console.WriteLine(motorcycle);

            _context.Add(motorcycle);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Мотоцикл создан", id = motorcycle.Id });
        }



        // GET: api/motorcycles/catalog/product/{id}
        [HttpGet("catalog/product/{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var motorcycle = await _context.Motorcycles   
                .Include(m => m.Model)
                .Select(m => new Motorcycle
                {
                    Id = m.Id,
                    Name = m.Name,
                    DealerId = m.DealerId,
                    Price = m.Price,
                    Mileage = m.Mileage,
                    Color = m.Color,
                    Image = $"/motorcycles/{m.Image}",
                    Description = m.Description,
                    Model = m.Model,
                    ModelName = m.ModelName,
                    BrandId = m.BrandId,
                    InStock = m.InStock
                })
                .FirstOrDefaultAsync(m => m.Id == id);

            if (motorcycle == null)
            {
                return NotFound();
            }
            return Ok(motorcycle);
        }
    }
}
