using System;
using System.Collections.Generic;
using Domain;
using Melonn.Web.Models;

namespace Melonn.Web.Domain
{
    public class SellOrder
    {
        public SellOrder(string number, string sellerStore, int shippingMethod, string externalOrderNumber,
            string buyerFullName, string buyerPhone, string buyerEmail, string shippingAddress, string shippingCity,
            string shippingRegion, string shippingCountry)
        {
            Number = number;
            SellerStore = sellerStore;
            ShippingMethod = shippingMethod;
            ExternalOrderNumber = externalOrderNumber;
            BuyerFullName = buyerFullName;
            BuyerPhone = buyerPhone;
            BuyerEmail = buyerEmail;
            ShippingAddress = shippingAddress;
            ShippingCity = shippingCity;
            ShippingRegion = shippingRegion;
            ShippingCountry = shippingCountry;
            CreatedOn = DateTimeOffset.Now;
        }
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
        public DateTimeOffset CreatedOn { get; set; }
        public List<Item> Items { get; set; }
        
    }
}