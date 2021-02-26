using System;

namespace Melonn.Web.Models
{
    public class SellOrderListItem
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string SellerStore { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public int ShippingMethod { get; set; }
    }
}