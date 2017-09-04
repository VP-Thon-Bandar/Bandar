using System;
using System.Collections.Generic;
using System.Web.Http;
using Bandar.Domain.Entities;

namespace Bandar.Api.Controllers
{
    public class BandController : BaseApiController
    {
        public virtual IEnumerable<Band> Get()
        {
            return Repository.GetAll<Band>();
        }

        // GET api/values/5
        public virtual Band Get(Guid id)
        {
            return Repository.GetById<Band>(id);
        }

        // POST api/values
        public virtual void Post([FromBody]Band band)
        {
            Repository.Create(band, "elcapo");
            Repository.Save();
        }

        // PUT api/values/5
        public virtual void Put(Guid id, [FromBody]Band band)
        {
            Repository.Update(band, "elcapo");
            Repository.Save();

        }

        // DELETE api/values/5
        public virtual void Delete(int id)
        {

        }



    }



}
