using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CattleTrack.Web
{
    public class HelloModule : NancyModule
    {
        public HelloModule()
        {
            Get["/"] = parameters => "Hello World";
        }
    }
}