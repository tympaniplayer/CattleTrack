using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace CattleTrack.Data.EntityFramework
{
    public class CattleRepository : ICattleRepository
    {
        DbContext _db;
        public CattleRepository(DbContext context)
        {
            _db = context;
        }

        public Cattle AddCattle(string name, string tag, DateTime dateOfBirth)
        {
            throw new NotImplementedException();
        }

        public void DeleteCattle(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Cattle> GetCattle()
        {
            throw new NotImplementedException();
        }

        public Cattle GetCattleById(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Cattle> Query()
        {
            throw new NotImplementedException();
        }

        public void Save(Cattle cattle)
        {
            throw new NotImplementedException();
        }
    }
}
