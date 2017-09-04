using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Bandar.Domain.Entities;

namespace Bandar.Api.Controllers
{
    public class PlaceController : BaseApiController
    {

        // GET api/values
        public IEnumerable<Place> Get()
        {
            return Repository.GetAll<Place>();
        }

        // GET api/values/5
        public Place Get(Guid id)
        {
            return Repository.GetById<Place>(id);
        }

        // POST api/values
        public void Post([FromBody]Place place)
        {
            Repository.Create(place, "elcapo");
            Repository.Save();
        }

        // PUT api/values/5
        public void Put(Guid id, [FromBody]Place place)
        {
            Repository.Update(place, "elcapo");
            Repository.Save();

        }

        // DELETE api/values/5
        public void Delete(int id)
        {

        }
    }


    public class RatingController : BaseApiController
    {

        // GET api/values
        [Route("place")]
        public IEnumerable<Rating> GetByPlace(Guid placeId)
        {
            return Repository.GetAll<Event>(null, "Place,PlaceRating").Where(x => x.Place.Id == placeId).Select(x => x.PlaceRating); ;
        }

        [Route("band")]
        public IEnumerable<Rating> GetByBand(Guid bandId)
        {
            return Repository.GetAll<Event>(null, "Band,BandRating").Where(x => x.Band.Id == bandId).Select(x => x.BandRating);
        }

        // GET api/values/5
        public Rating Get(Guid id)
        {
            return Repository.GetById<Rating>(id);
        }

        // POST api/values
        public void Post([FromBody]Rating place)
        {
            Repository.Create(place, "elcapo");
            Repository.Save();
        }

        // PUT api/values/5
        public void Put(Guid id, [FromBody]Rating place)
        {
            Repository.Update(place, "elcapo");
            Repository.Save();

        }

        // DELETE api/values/5
        public void Delete(int id)
        {

        }
    }
}
