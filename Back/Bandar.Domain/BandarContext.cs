using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bandar.Domain.Entities;

namespace Bandar.Domain
{

    


    public class BandarContext : DbContext
    {
        public BandarContext(string nameOrConnectionString) : base(nameOrConnectionString)
        {
        }

        public BandarContext()
        {
            
        }

        public IDbSet<Band> Bands { get; set; }

        public IDbSet<Genre> Genres { get; set; }

        public IDbSet<Place> Places { get; set; }

        public IDbSet<Event> Events { get; set; }
    }
}
