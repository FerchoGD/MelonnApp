using Melonn.Web.Domain;

namespace Domain
{
    public class Item
    {
        public Item(string name, string qty, string weight, int orderId)
        {
            OrderId = orderId;
            Name = name;
            Qty = qty;
            Weight = weight;
        }
        public int Id { get; set; }
        public SellOrder Order { get; set; }
        public int OrderId { get; set; }
        public string Name { get; set; }
        public string Qty { get; set; }
        public string Weight { get; set; }
    }
}