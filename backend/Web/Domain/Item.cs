namespace Domain
{
    public class Item
    {
        public Item(int id, string name, string qty, float weight)
        {
            Id = id;
            Name = name;
            Qty = qty;
            Weight = weight;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Qty { get; set; }
        public float Weight { get; set; }
    }
}