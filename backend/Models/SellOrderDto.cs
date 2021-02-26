using System;
using System.Collections.Generic;

namespace Melonn.Web.Models
{
    public class SellOrderDto
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string SellerStore { get; set; }
        public int ShippingMethod { get; set; }
        public string ExternalOrderNumber { get; set; }
        public string BuyerFullName { get; set; }
        public string BuyerPhone { get; set; }
        public string BuyerEmail { get; set; }
        public string ShippingAddress { get; set; }
        public string ShippingCity { get; set; }
        public string ShippingRegion { get; set; }
        public string ShippingCountry { get; set; }
        public DateTimeOffset? CreatedOn { get; set; }
        public List<ItemDto> Items { get; set; }
        
    }
}