using System;
using System.Collections.Generic;

namespace Bandar.Domain.Entities
{
    public class Band: TimeLineEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Genre Genre { get; set; }
        public override string EventTitle => $"Band {this.Name} Created At {this.CreatedDate}";
        public override DateTime EventDate => ModifiedDate;
        public string Image { get; set; }

        public IList<Event> Events { get; set; }
    }
}