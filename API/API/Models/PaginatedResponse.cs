namespace API.Models
{
    public class PaginatedResponse<T>
    {
        public List<T> Data { get; set; }     // Данные страницы
        public int TotalCount { get; set; }   // Общее количество элементов
        public int Page { get; set; }         // Текущая страница
        public int PageSize { get; set; }     // Размер страницы
        public int TotalPages { get; set; }   // Общее количество страниц
    }
}
