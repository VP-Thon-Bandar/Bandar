using Bandar.Api;
using Bandar.Domain;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace Bandar.Api
{
    public partial class Startup
    {
        private readonly EntityFrameworkRepository<BandarContext> _repository = new EntityFrameworkRepository<BandarContext>(new BandarContext("BandarDB"));

        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);


        }
    }
}
