using System;

namespace Bandar.Domain.Entities
{
    public class Event : TimeLineEntity
    {
        public DateTime Date { get; set; }
        public Band Band { get; set; }
        public Place Place { get; set; }
        public Rating PlaceRating { get; set; }
        public Rating BandRating { get; set; }
        public override string EventTitle => $"The Band '{Band.Name}' is going to play at '{Place.Name}' on {Date}";
        public override DateTime EventDate => Date;
    }

    public class Rating : IEntity
    {
        public Guid Id { get; set; }
        public int Points { get; set; }
        public string Feedback { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}