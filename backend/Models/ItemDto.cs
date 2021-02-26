using Melonn.Web.Domain;

namespace Melonn.Web.Models
{
    public class ItemDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Qty { get; set; }
        public string Weight { get; set; }
    }
}