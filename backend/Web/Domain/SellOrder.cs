using System;
using System.Collections.Generic;
using Domain;
using Melonn.Models;

namespace Melonn.Domain
{
    public class SellOrder
    {
        public SellOrder(string id, string sellerStore, int shippingMethod, int externalOrderNumber,
            string buyerFullName, int buyerPhone, string buyerEmail, string shippingAddress, string shippingCity,
            string shippingRegion, string shippingCountry, List<ItemDto> items)
        {
            Id = id;
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

            foreach (var item in items)
            {
                var rand = new Random();
                var newItem = new Item(rand.Next(), item.Name, item.Qty, item.Weight);
                Items.Add(newItem);
            }
        }
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
        public List<Item> Items { get; set; }
        
    }
}