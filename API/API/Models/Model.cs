using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    [Table("модели")]
    public class Model
    {
        [Column("Название")]
        public string Name { get; set; }

        [Column("Бренды_ID")]
        public int BrandId { get; set; }

        public Brand Brand { get; set; }

        [Column("Двигатель")]
        public string Engine { get; set; }

        [Column("Рабочий объем")]
        public int EngineVolume { get; set; }

        [Column("Длина")]
        public int Length { get; set; }

        [Column("Емкость бака")]
        public int TankCapacity { get; set; }

        [Column("Высота по сиденью")]
        public int SeatHeight { get; set; }

        [Column("Сухая масса")]
        public int DryWeight { get; set; }

        [Column("Передняя шина")]
        public string FrontTire { get; set; }

        [Column("Задняя шина")]
        public string RearTire { get; set; }
    }
}
