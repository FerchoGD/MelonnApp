using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Melonn.Domain;

namespace Melonn.Models
{
    public class SellOrderDto
    {
        public string Id { get; set; }
        public string SellerStore { get; set; }
        public int ShippingMethod { get; set; }
        public int ExternalOrderNumber { get; set; }
        public string BuyerFullName { get; set; }
        public int BuyerPhone { get; set; }
        public string BuyerEmail { get; set; }
        public string ShippingAddress { get; set; }
        public string ShippingCity { get; set; }
        public string ShippingRegion { get; set; }
        public string ShippingCountry { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public List<ItemDto> Items { get; set; }
        
    }
}