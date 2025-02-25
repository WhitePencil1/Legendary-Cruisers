using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Model
    {
        [Key]
        public string Name { get; set; } = string.Empty;

        [ForeignKey("Brand")]
        public int BrandId { get; set; }

        public Brand? Brand { get; set; }

        public string? Engine { get; set; }
        public int? Displacement { get; set; }
        public int? Length { get; set; }
        public int? TankCapacity { get; set; }
        public int? SeatHeight { get; set; }
        public int? DryWeight { get; set; }
        public string? FrontTire { get; set; }
        public string? RearTire { get; set; }
    }
}
