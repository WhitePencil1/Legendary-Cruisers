using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Brand
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(45)]
        public string Name { get; set; } = string.Empty;

        public ICollection<Model> Models { get; set; } = new List<Model>();
    }
}
