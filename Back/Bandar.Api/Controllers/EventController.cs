using System;
using System.Collections.Generic;
using System.Web.Http;
using Bandar.Domain.Entities;

namespace Bandar.Api.Controllers
{
    public class EventController : BaseApiController
    {

        // GET api/values
        public IEnumerable<Event> Get()
        {
            return Repository.GetAll<Event>();
        }

        // GET api/values/5
        public Event Get(Guid id)
        {
            return Repository.GetById<Event>(id);
        }

        // POST api/values
        public void Post([FromBody]Event evento)
        {
            Repository.Create(evento, "elcapo");
            Repository.Save();
        }

        // PUT api/values/5
        public void Put(Guid id, [FromBody]Event evento)
        {
            Repository.Update(evento, "elcapo");
            Repository.Save();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {

        }
    }
}
