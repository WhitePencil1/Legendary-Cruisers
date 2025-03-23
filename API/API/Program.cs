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

// ���������� ��������� CORS ��� ���� ��������
app.UseCors(builder => builder.AllowAnyOrigin());
app.MapControllers();

// ��� ��
//string connectionString = "Server=localhost;Database=mydb;User ID=root;Password=Qwerasdft34;";

//app.MapGet("/test", () => "�� ���������");

//app.MapGet("/catalog", () => GetMotorcycles(0, 6));

//app.MapGet("/catalog/product", (int id) => GetMotorcycle(id));

app.Run();



//string GetMotorcycles(int from, int to)
//{
//    string query = $"select * from `���������` where `� �������` = 1 LIMIT {from}, {to}";
//    List<Motorcycle> motorcycles = new List<Motorcycle>();

//    using (var connection = new MySqlConnection(connectionString))
//    {
//        connection.Open();
//        Console.WriteLine("���������� �����������");

//        using (var cmd = new MySqlCommand(query, connection))
//        {
//            using (var reader = cmd.ExecuteReader())
//            {
//                while (reader.Read())
//                {
//                    motorcycles.Add(new Motorcycle {
//                        Id = reader.GetInt32("ID"),
//                        Name = reader.GetString("��������"),
//                        DealerId = reader.GetInt32("������_ID"),
//                        Price = reader.GetInt32("����"),
//                        Mileage = reader.GetInt32("������"),
//                        Color = reader.GetString("����"),
//                        Image = reader.GetString("�����������"),
//                        Description = reader.GetString("��������"),
//                        ModelName = reader.GetString("������_��������"),
//                        ModelBrandId = reader.GetInt32("������_������_ID"),
//                        InStock = reader.GetBoolean("� �������")
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
//        $"select `���������`.`��������`, `���������`.`����`, `���������`.`������`, `���������`.`����`, `���������`.`�����������`, `���������`.`��������`, `������`.`���������`, `������`.`������� �����`, `������`.`�����`, `������`.`������� ����`, `������`.`������ �� �������`, `������`.`����� �����`, `������`.`�������� ����`, `������`.`������ ����`" +
//        $"\r\nfrom `������`" +
//        $"\r\njoin `���������`on `���������`.`������_��������` = `������`.`��������`" +
//        $"\r\nwhere `���������`.`ID` = {id} and `� �������` = 1;";

//    using (var connection = new MySqlConnection(connectionString))
//    {
//        connection.Open();
//        Console.WriteLine("���������� �����������");

//        Dictionary<string, object> motorcycle;

//        using (var cmd = new MySqlCommand(query, connection))
//        {
//            using (var reader = cmd.ExecuteReader())
//            {
//                if(!reader.Read())
//                {
//                    Console.WriteLine("����");
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
//                //        Name = reader.GetString("��������"),
//                //        DealerId = reader.GetInt32("������_ID"),
//                //        Price = reader.GetInt32("����"),
//                //        Mileage = reader.GetInt32("������"),
//                //        Color = reader.GetString("����"),
//                //        Image = reader.GetString("�����������"),
//                //        Description = reader.GetString("��������"),
//                //        ModelName = reader.GetString("������_��������"),
//                //        ModelBrandId = reader.GetInt32("������_������_ID"),
//                //        InStock = reader.GetBoolean("� �������")
//                //    });
//                //}
//            }
//        }
//        string json = JsonSerializer.Serialize(motorcycle, new JsonSerializerOptions { WriteIndented = true });
//        Console.WriteLine(json);
//        return json;
//    }
//}