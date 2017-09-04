using System;

namespace Bandar.Domain.Entities
{
    public class Band: TimeLineEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Genre Genre { get; set; }
        public override string Content => $"Band {this.Name} Created At {this.CreatedDate}";
        public override DateTime EventDate => ModifiedDate;
    }
}