namespace API.Models
{
    public class Motorcycle
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int DealerId { get; set; }
        public int Price { get; set; }
        public int? Mileage { get; set; }
        public string Color { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ModelName { get; set; } = string.Empty;
        public int ModelBrandId { get; set; }
        //public Model? Model { get; set; }
        public bool InStock { get; set; }


        //public Motorcycle(int id, string name, int dealerId, int price, int? mileage, string color, string image, string description,
        //             string modelName, int modelBrandId, Model? model, bool inStock)
        //{
        //    Id = id;
        //    Name = name;
        //    DealerId = dealerId;
        //    Price = price;
        //    Mileage = mileage;
        //    Color = color;
        //    Image = image;
        //    Description = description;
        //    ModelName = modelName;
        //    ModelBrandId = modelBrandId;
        //    Model = model;
        //    InStock = inStock;
        //}
    }
}
