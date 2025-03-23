using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public class MyDbContext : DbContext
    {
        public DbSet<Dealer> Dealers { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Model> Models { get; set; }
        public DbSet<Motorcycle> Motorcycles { get; set; }
        public DbSet<MotorcycleCard> Card { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) {}

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseMySql("server=localhost;database=mydb;user=root;password=Qwerasdft34",
        //        ServerVersion.AutoDetect("server=localhost;database=mydb;user=root;password=Qwerasdft34"));
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Настройка связей между таблицами
            modelBuilder.Entity<Model>()
                //.HasOne(m => m.Brand)
                //.WithMany()
                //.HasForeignKey(m => m.BrandId).
                .HasKey(m => new { m.Name, m.BrandId }); // Составной первичный ключ

            modelBuilder.Entity<Motorcycle>()
                .HasOne(m => m.Dealer)
                .WithMany()
                .HasForeignKey(m => m.DealerId);

            modelBuilder.Entity<Motorcycle>()
                .HasOne(m => m.Model)
                .WithMany()
                .HasForeignKey(m => new { m.ModelName, m.BrandId });
        }
    }
}
