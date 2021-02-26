using Domain;
using Melonn.Web.Domain;
using Microsoft.EntityFrameworkCore;

namespace Melonn.Web.Persistence
{
    public class MelonnContext : DbContext
    {
        public MelonnContext(DbContextOptions<MelonnContext> options) : base(options)
        {

        }
        
        public DbSet<SellOrder> SellOrders { get; set; }
        public DbSet<Item> Items { get; set; }
    }
}