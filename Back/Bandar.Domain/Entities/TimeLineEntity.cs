using System;

namespace Bandar.Domain.Entities
{
    public abstract class TimeLineEntity: IEntity
    {
        public Guid Id { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public abstract string EventTitle { get; }
        public abstract DateTime EventDate { get; }
    }
}