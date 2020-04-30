using Microsoft.EntityFrameworkCore;

/**
 * Maps the Item model to the database.
 */
namespace insuranceApp.Models
{
    public class ItemContext : DbContext
    {
        public ItemContext(DbContextOptions<ItemContext> options) : base(options) { }

        public DbSet<Item> Items { get; set; }
    }
}
