using System;
using System.Collections.Generic;
using System.Web.Http;
using Bandar.Domain;

namespace Bandar.Api.Controllers
{
    public abstract class BaseApiController: ApiController
    {
        protected readonly EntityFrameworkRepository<BandarContext> Repository = new EntityFrameworkRepository<BandarContext>(new BandarContext("BandarDB"));

    }
}