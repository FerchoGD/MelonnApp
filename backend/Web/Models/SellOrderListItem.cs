using System;

namespace Melonn.Models
{
    public class SellOrderListItem
    {
        public string Id { get; set; }
        public string SellerStore { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public int ShippingMethod { get; set; }
    }
}