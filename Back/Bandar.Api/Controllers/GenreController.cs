using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web.Http;
using Bandar.Api.Models;
using Bandar.Domain;
using Bandar.Domain.Entities;

namespace Bandar.Api.Controllers
{
    public class GenreController : ApiController
    {
        private readonly EntityFrameworkRepository<BandarContext> _repository = new EntityFrameworkRepository<BandarContext>(new BandarContext("BandarDB"));

        // GET api/values
        public IEnumerable<Genre> Get()
        {
            return _repository.GetAll<Genre>();
        }

        // GET api/values/5
        public Genre Get(Guid id)
        {
            return _repository.GetById<Genre>(id);
        }

        // POST api/values
        public void Post([FromBody]Genre band)
        {
            _repository.Create(band, "elcapo");
            _repository.Save();
        }

        // PUT api/values/5
        public void Put(Guid id, [FromBody]Genre band)
        {
            _repository.Update(band, "elcapo");
            _repository.Save();

        }

        // DELETE api/values/5
        public void Delete(int id)
        {

        }
    }


   
}
