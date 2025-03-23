using API;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using System.Text.Json;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
builder.Services.AddControllers();

builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
    ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));


var app = builder.Build();

// глобальная настройка CORS для всех ресурсов
app.UseCors(builder => builder.AllowAnyOrigin());
app.MapControllers();

// для БД
//string connectionString = "Server=localhost;Database=mydb;User ID=root;Password=Qwerasdft34;";

//app.MapGet("/test", () => "Ты подключен");

//app.MapGet("/catalog", () => GetMotorcycles(0, 6));

//app.MapGet("/catalog/product", (int id) => GetMotorcycle(id));

app.Run();



//string GetMotorcycles(int from, int to)
//{
//    string query = $"select * from `мотоциклы` where `В наличии` = 1 LIMIT {from}, {to}";
//    List<Motorcycle> motorcycles = new List<Motorcycle>();

//    using (var connection = new MySqlConnection(connectionString))
//    {
//        connection.Open();
//        Console.WriteLine("Соединение установлено");

//        using (var cmd = new MySqlCommand(query, connection))
//        {
//            using (var reader = cmd.ExecuteReader())
//            {
//                while (reader.Read())
//                {
//                    motorcycles.Add(new Motorcycle {
//                        Id = reader.GetInt32("ID"),
//                        Name = reader.GetString("Название"),
//                        DealerId = reader.GetInt32("Дилеры_ID"),
//                        Price = reader.GetInt32("Цена"),
//                        Mileage = reader.GetInt32("Пробег"),
//                        Color = reader.GetString("Цвет"),
//                        Image = reader.GetString("Изображение"),
//                        Description = reader.GetString("Описание"),
//                        ModelName = reader.GetString("Модели_Название"),
//                        ModelBrandId = reader.GetInt32("Модели_Бренды_ID"),
//                        InStock = reader.GetBoolean("В наличии")
//                    });
//                }
//            }
//        }
//        string json = JsonSerializer.Serialize(motorcycles);
//        return json;
//    }

//}


//string GetMotorcycle(int id) {
//    string query = $"" +
//        $"select `мотоциклы`.`Название`, `мотоциклы`.`Цена`, `мотоциклы`.`Пробег`, `мотоциклы`.`Цвет`, `мотоциклы`.`Изображение`, `мотоциклы`.`Описание`, `модели`.`Двигатель`, `модели`.`Рабочий объем`, `модели`.`Длина`, `модели`.`Емкость бака`, `модели`.`Высота по сиденью`, `модели`.`Сухая масса`, `модели`.`Передняя шина`, `модели`.`Задняя шина`" +
//        $"\r\nfrom `модели`" +
//        $"\r\njoin `мотоциклы`on `мотоциклы`.`Модели_Название` = `модели`.`Название`" +
//        $"\r\nwhere `мотоциклы`.`ID` = {id} and `В наличии` = 1;";

//    using (var connection = new MySqlConnection(connectionString))
//    {
//        connection.Open();
//        Console.WriteLine("Соединение установлено");

//        Dictionary<string, object> motorcycle;

//        using (var cmd = new MySqlCommand(query, connection))
//        {
//            using (var reader = cmd.ExecuteReader())
//            {
//                if(!reader.Read())
//                {
//                    Console.WriteLine("Тютю");
//                }

//                motorcycle = new Dictionary<string, object>
//                {
//                    { "Name", "Yamaha R1" },
//                    { "Price", 2000000 },
//                    { "InStock", true }
//                };


//                //while (reader.Read())
//                //{
//                //    motorcycles.Add(new Motorcycle
//                //    {
//                //        Id = reader.GetInt32("ID"),
//                //        Name = reader.GetString("Название"),
//                //        DealerId = reader.GetInt32("Дилеры_ID"),
//                //        Price = reader.GetInt32("Цена"),
//                //        Mileage = reader.GetInt32("Пробег"),
//                //        Color = reader.GetString("Цвет"),
//                //        Image = reader.GetString("Изображение"),
//                //        Description = reader.GetString("Описание"),
//                //        ModelName = reader.GetString("Модели_Название"),
//                //        ModelBrandId = reader.GetInt32("Модели_Бренды_ID"),
//                //        InStock = reader.GetBoolean("В наличии")
//                //    });
//                //}
//            }
//        }
//        string json = JsonSerializer.Serialize(motorcycle, new JsonSerializerOptions { WriteIndented = true });
//        Console.WriteLine(json);
//        return json;
//    }
//}