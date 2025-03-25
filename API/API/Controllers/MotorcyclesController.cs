using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class MotorcyclesController : ControllerBase
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
        public async Task<ActionResult<IEnumerable<MotorcycleCard>>> GetMotorcycleCards(
            [FromQuery] string? search,
            [FromQuery] List<string>? models,
            [FromQuery] List<int>? engineVolumes,
            [FromQuery] int? priceFrom,
            [FromQuery] int? priceTo,
            [FromQuery] int? mileageFrom,
            [FromQuery] int? mileageTo,
            [FromQuery] int skip = 0,
            [FromQuery] int take = 10)  
        {

            var query = _context.Motorcycles.AsQueryable();

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

            var cards = await query
                .Select(m => new MotorcycleCard
                {
                    Id = m.Id,
                    Name = m.Name,
                    Price = m.Price,
                    Image = m.Image
                })
                .Skip(skip) // Пропустить `skip` элементов
                .Take(take) // Взять `take` элементов
                .ToListAsync();
            return cards;
        }


        // GET: api/motorcycles/catalog/product/{id}
        [HttpGet("catalog/product/{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var motorcycle = await _context.Motorcycles
                
                .Include(m => m.Model)
                .FirstOrDefaultAsync(m => m.Id == id);
            //.FirstOrDefaultAsync(m => m.Id == id);
            if (motorcycle == null)
            {
                return NotFound();
            }
            return Ok(motorcycle);
        }
    }
}
