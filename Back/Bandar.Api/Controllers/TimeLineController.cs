using System;
using System.Collections.Generic;
using System.Linq;
using Bandar.Domain.Entities;

namespace Bandar.Api.Controllers
{
    public class TimeLineController : BaseApiController
    {
        public IEnumerable<TimeLineEntity> Get()
        {
            return Repository.GetAll<Band>().Union(Repository.GetAll<Place>().Cast<TimeLineEntity>()).Union(Repository.GetAll<Event>()).OrderByDescending(x => x.EventDate);
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

            var thegenres = Repository.GetAll<Genre>().ToList();

            Repository.Save();

            var rockGenre = thegenres.FirstOrDefault(x => x.Name == "Rock");
            var popGenre = thegenres.FirstOrDefault(x => x.Name == "Pop");
            var cumbiaGenre = thegenres.FirstOrDefault(x => x.Name == "Cumbia Villera");

            foreach (var place in places)
            {
                Repository.Create(new Place
                {
                    Id = Guid.NewGuid(),
                    Name = place,
                    Genres = place == "The Cavern of Rock"
                        ? new List<Genre> {rockGenre}
                        : place == "Drugs And Music"
                            ? new List<Genre> {popGenre, rockGenre }
                            : new List<Genre> {cumbiaGenre}
                });
            }

            foreach (var band in bands)
                Repository.Create(new Band
                {
                    Id = Guid.NewGuid(),
                    Name = band,
                    Genre = band == "Baila Guacha"
                        ? cumbiaGenre
                        : band == "La Banda del Golden Rocket"
                            ? popGenre
                            : rockGenre
                });

            Repository.Save();


            Repository.Create(new Event
            {
                Id = Guid.NewGuid(),
                Place = Repository.GetAll<Place>().FirstOrDefault(x => x.Name == "Drugs And Music"),
                Band = Repository.GetAll<Band>().FirstOrDefault(x => x.Name == "La Banda del Golden Rocket"),
                Date = DateTime.Now.AddDays(34)
            });


            Repository.Create(new Event
            {
                Id = Guid.NewGuid(),
                Place = Repository.GetAll<Place>().FirstOrDefault(x => x.Name == "El Rejunte de Jose C. Paz"),
                Band = Repository.GetAll<Band>().FirstOrDefault(x => x.Name == "Baila Guacha"),
                Date = DateTime.Now.AddDays(65)
            });

            Repository.Create(new Event
            {
                Id = Guid.NewGuid(),
                Place = Repository.GetAll<Place>().FirstOrDefault(x => x.Name == "The Cavern of Rock"),
                Band = Repository.GetAll<Band>().FirstOrDefault(x => x.Name == "The BlahBlah Band"),
                Date = DateTime.Now.AddDays(12)
            });


            Repository.Create(new Event
            {
                Id = Guid.NewGuid(),
                Place = Repository.GetAll<Place>().FirstOrDefault(x => x.Name == "The Cavern of Rock"),
                Band = Repository.GetAll<Band>().FirstOrDefault(x => x.Name == "Baila Guacha"),
                Date = DateTime.Now.AddDays(43)
            });

            Repository.Save();
        }
    }
}