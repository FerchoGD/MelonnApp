using System;
using System.Collections.Generic;
using System.Linq;
using Melonn.Domain;
using Melonn.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Melonn.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/orders")]
    public class MelonnController : ControllerBase
    {
        public List<SellOrder> Orders = new List<SellOrder>();
        
        [HttpGet]
        [AllowAnonymous]
        public List<SellOrderListItem> GetAll()
        {
            return Orders
                .Select(x => new SellOrderListItem
                {
                    Id = x.Id,
                    SellerStore = x.SellerStore,
                    CreatedOn = x.CreatedOn,
                    ShippingMethod = x.ShippingMethod
                })
                .ToList();
        }

        [HttpGet("id")]
        [AllowAnonymous]
        public SellOrderDto GetById(string id)
        {
            return Orders
                .Where(x => x.Id == id)
                .Select(x => new SellOrderDto
                {
                    Id = x.Id,
                    SellerStore = x.SellerStore,
                    ShippingMethod = x.ShippingMethod,
                    ExternalOrderNumber = x.ExternalOrderNumber,
                    BuyerFullName = x.BuyerFullName,
                    BuyerPhone = x.BuyerPhone,
                    BuyerEmail = x.BuyerEmail,
                    ShippingAddress = x.ShippingAddress,
                    ShippingCity = x.ShippingCity,
                    ShippingRegion = x.ShippingRegion,
                    ShippingCountry = x.ShippingCountry,
                    CreatedOn = x.CreatedOn,
                    Items = x.Items
                        .Select(item => new ItemDto
                        {
                            Id = item.Id,
                            Name = item.Name,
                            Qty = item.Qty,
                            Weight = item.Weight
                        })
                        .ToList()
                })
                .Single();
        }

        [HttpPost]
        [AllowAnonymous]
        public void Create(SellOrderDto data)
        {
            var random = new Random(100);
            var id = $"{DateTimeOffset.Now.ToString()}{random}";
            var newSellOrder = new SellOrder(id, data.SellerStore, data.ShippingMethod, data.ExternalOrderNumber,
                data.BuyerFullName, data.BuyerPhone, data.BuyerEmail, data.ShippingAddress, data.ShippingCity,
                data.ShippingRegion, data.ShippingCountry, data.Items);
            
            Orders.Add(newSellOrder);
        }
    }
}