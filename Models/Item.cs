
/**
 * Represents a single Item record that lives in the Items table.
 */
namespace insuranceApp.Models
{
    public class Item
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public float Value { get; set; }
        public string Category { get; set; }
    }
}
