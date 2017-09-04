﻿using System;
using System.Collections.Generic;
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
}
