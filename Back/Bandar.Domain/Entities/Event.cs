using System;

namespace Bandar.Domain.Entities
{
    public class Event : TimeLineEntity
    {
        public DateTime Date { get; set; }
        public Band Band { get; set; }
        public Place Place { get; set; }
        public override string EventTitle => $"The Band '{Band.Name}' is going to play at '{Place.Name}' on {Date}";
        public override DateTime EventDate => Date;
    }
}