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
        public async Task<ActionResult<IEnumerable<MotorcycleCard>>> GetMotorcycleCards()
        {
            var cards = await _context.Motorcycles
                .Select(m => new MotorcycleCard
                {
                    Id = m.Id,
                    Name = m.Name,
                    Price = m.Price,
                    Image = m.Image
                })
                .ToListAsync();

            return cards;
        }


        // GET: api/motorcycles/catalog/product/{id}
        [HttpGet("catalog/product/{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var motorcycle = await _context.Motorcycles
                .FirstOrDefaultAsync(m => m.Id == id);
            if (motorcycle == null)
            {
                return NotFound();
            }
            return Ok(motorcycle);
        }
    }
}
