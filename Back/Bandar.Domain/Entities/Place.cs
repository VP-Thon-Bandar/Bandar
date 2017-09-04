﻿using System;
using System.Collections.Generic;

namespace Bandar.Domain.Entities
{
    public class Place : TimeLineEntity
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public IList<Genre> Genres { get; set; }

        public override string Content => $"Place {this.Name} Created At {this.CreatedDate}";
        public override DateTime EventDate => ModifiedDate;
    }
}