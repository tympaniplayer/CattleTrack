using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CattleTrack.Data;
namespace CattleTrack.Web.Controllers
{
    public class CattleController : ApiController
    {
        ICattleRepository _repository;
        public CattleController(ICattleRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public void Test()
        {

        }
    }
}
