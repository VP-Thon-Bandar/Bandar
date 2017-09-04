using System;

namespace Bandar.Domain.Entities
{
    public class Place : TimeLineEntity
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public override string Content => $"Place {this.Name} Created At {this.CreatedDate}";
    }
}