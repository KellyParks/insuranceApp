using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
