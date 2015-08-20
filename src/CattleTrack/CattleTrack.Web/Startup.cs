using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using Microsoft.Practices.Unity;

[assembly: OwinStartup(typeof(CattleTrack.Web.Startup))]

namespace CattleTrack.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
