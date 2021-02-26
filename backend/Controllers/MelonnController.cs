using System;
using System.Collections.Generic;
using System.Linq;
using Domain;
using Melonn.Web.Domain;
using Melonn.Web.Models;
using Melonn.Web.Persistence;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Melonn.Web.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class MelonnController : ControllerBase
    {

        private MelonnContext context;

        public MelonnController(MelonnContext context)
        {
            this.context = context;
        }
        
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<SellOrderListItem> GetAll()
        {
            return context.SellOrders
                .Select(x => new SellOrderListItem
                {
                    Id = x.Id,
                    Number = x.Number,
                    SellerStore = x.SellerStore,
                    CreatedOn = x.CreatedOn,
                    ShippingMethod = x.ShippingMethod
                })
                .ToList();
        }
        
        [AllowAnonymous]
        [HttpGet("{id}")]
        public SellOrderDto GetById(int id)
        {
            Console.WriteLine($"Id es: {id}");
            return context.SellOrders
                .Where(x => x.Id == id)
                .Select(x => new SellOrderDto
                {
                    Id = x.Id,
                    Number = x.Number,
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
                    Items = context.Items
                        .Where(item => item.OrderId == id)
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

        [AllowAnonymous]
        [HttpPost]
        public void Create(SellOrderDto data)
        {
            var random = new Random(100);
            var id = $"{DateTimeOffset.Now.ToString()}{random}";
            var newSellOrder = new SellOrder(id, data.SellerStore, data.ShippingMethod, data.ExternalOrderNumber,
                data.BuyerFullName, data.BuyerPhone, data.BuyerEmail, data.ShippingAddress, data.ShippingCity,
                data.ShippingRegion, data.ShippingCountry);
            
            context.Add(newSellOrder);
            context.SaveChanges();
            
            foreach (var item in data.Items)
            {
                var rand = new Random();
                var newItem = new Item(item.Name, item.Qty, item.Weight, newSellOrder.Id);
                context.Add(newItem);
            }

            context.SaveChanges();
        }
    }
}