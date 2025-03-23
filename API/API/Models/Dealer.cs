using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("дилеры")] // Указываем имя таблицы в БД
    public class Dealer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Image { get; set; }
        public string Address { get; set; }
    }
}
