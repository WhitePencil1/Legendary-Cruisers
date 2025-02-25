using API.Models;
using MySql.Data.MySqlClient;
using System.Data;
using System.Text.Json;
using System.Xml.Linq;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
string connectionString = "Server=localhost;Database=mydb;User ID=root;Password=Qwerasdft34;";

app.MapGet("/test", () => "�� ���������");

app.MapGet("/catalog", () => GetMotorcycles(1, 5));

app.Run();



string GetMotorcycles(int from, int to)
{
    string query = $"select * from `���������` LIMIT {from}, {to};";
    List<Motorcycle> motorcycles = new List<Motorcycle>();

    using (var connection = new MySqlConnection(connectionString))
    {
        connection.Open();
        Console.WriteLine("���������� �����������");

        using (var cmd = new MySqlCommand(query, connection))
        {
            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    motorcycles.Add(new Motorcycle {
                        Id = reader.GetInt32("ID"),
                        Name = reader.GetString("��������"),
                        DealerId = reader.GetInt32("������_ID"),
                        Price = reader.GetInt32("����"),
                        Mileage = reader.GetInt32("������"),
                        Color = reader.GetString("����"),
                        Image = reader.GetString("�����������"),
                        Description = reader.GetString("��������"),
                        ModelName = reader.GetString("������_��������"),
                        ModelBrandId = reader.GetInt32("������_������_ID"),
                        InStock = reader.GetBoolean("� �������")
                    });
                }
                
            }
        }
        string json = JsonSerializer.Serialize(motorcycles);
        return json;
    }

}
