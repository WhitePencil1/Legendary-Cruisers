using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("мотоциклы")]
    public class Motorcycle
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("Название")]
        public string Name { get; set; }

        [Column("Дилеры_ID")]
        public int DealerId { get; set; }

        public Dealer Dealer { get; set; }

        [Column("Цена")]
        public int Price { get; set; }

        [Column("Пробег")]
        public int Mileage { get; set; }

        [Column("Цвет")]
        public string Color { get; set; }

        [Column("Изображение")]
        public string Image { get; set; }

        [Column("Описание")]
        public string Description { get; set; }

        [Column("Модели_Название")]
        public string ModelName { get; set; }

        [Column("Модели_Бренды_ID")]
        public int BrandId { get; set; }

        public Model Model { get; set; }

        [Column("В наличии")]
        public bool InStock { get; set; }
    }
}
