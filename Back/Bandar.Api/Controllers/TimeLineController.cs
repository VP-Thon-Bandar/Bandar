using System;
using System.Collections.Generic;
using System.Linq;
using Bandar.Api.Controllers;
using Bandar.Domain.Entities;

namespace Placear.Api.Controllers
{
    public class TimeLineController : BaseApiController
    {
        public IEnumerable<TimeLineEntity> Get()
        {
            return Repository.GetAll<Band>().Union(Repository.GetAll<Place>().Cast<TimeLineEntity>()).OrderByDescending(x => x.CreatedDate);
        }

        public void Post()
        {
            var genres = new List<string>
            {
                "Rock",
                "Pop",
                "Cumbia Villera",
                "Electronica",
                "ElectroPop",
                "Reggae",
                "Etc"
            };

            var places = new List<string>
            {
                "The Cavern of Rock",
                "Drugs And Music",
                "El Rejunte de Jose C. Paz"
            };

            var bands = new List<string>
            {
                "La Banda del Golden Rocket",
                "Baila Guacha",
                "The BlahBlah Band"
            };


            foreach (var genre in genres)
                Repository.Create(new Genre {Id = Guid.NewGuid(), Name = genre});

            foreach (var place in places)
                Repository.Create(new Place {Id = Guid.NewGuid(), Name = place});

            foreach (var band in bands)
                Repository.Create(new Band { Id = Guid.NewGuid(), Name = band });

            Repository.Save();

        }
    }
}