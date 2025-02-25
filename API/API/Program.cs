using API.Models;
using MySql.Data.MySqlClient;
using System.Data;
using System.Text.Json;
using System.Xml.Linq;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
string connectionString = "Server=localhost;Database=mydb;User ID=root;Password=Qwerasdft34;";

app.MapGet("/test", () => "Ты подключен");

app.MapGet("/catalog", () => GetMotorcycles(1, 5));

app.Run();



string GetMotorcycles(int from, int to)
{
    string query = $"select * from `мотоциклы` LIMIT {from}, {to};";
    List<Motorcycle> motorcycles = new List<Motorcycle>();

    using (var connection = new MySqlConnection(connectionString))
    {
        connection.Open();
        Console.WriteLine("Соединение установлено");

        using (var cmd = new MySqlCommand(query, connection))
        {
            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    motorcycles.Add(new Motorcycle {
                        Id = reader.GetInt32("ID"),
                        Name = reader.GetString("Название"),
                        DealerId = reader.GetInt32("Дилеры_ID"),
                        Price = reader.GetInt32("Цена"),
                        Mileage = reader.GetInt32("Пробег"),
                        Color = reader.GetString("Цвет"),
                        Image = reader.GetString("Изображение"),
                        Description = reader.GetString("Описание"),
                        ModelName = reader.GetString("Модели_Название"),
                        ModelBrandId = reader.GetInt32("Модели_Бренды_ID"),
                        InStock = reader.GetBoolean("В наличии")
                    });
                }
                
            }
        }
        string json = JsonSerializer.Serialize(motorcycles);
        return json;
    }

}
