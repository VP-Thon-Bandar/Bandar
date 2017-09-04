using System;
using System.Collections.Generic;
using System.Web.Http;
using Bandar.Api.Controllers;
using Bandar.Domain;
using Bandar.Domain.Entities;

namespace Placear.Api.Controllers
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
        public void Post([FromBody]Place Place)
        {
            Repository.Create(Place, "elcapo");
            Repository.Save();
        }

        // PUT api/values/5
        public void Put(Guid id, [FromBody]Place Place)
        {
            Repository.Update(Place, "elcapo");
            Repository.Save();

        }

        // DELETE api/values/5
        public void Delete(int id)
        {

        }
    }
}
