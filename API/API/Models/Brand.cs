using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("бренды")] // Указываем имя таблицы в БД
    public class Brand
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("Название")]
        public string Name { get; set; }
    }
}
