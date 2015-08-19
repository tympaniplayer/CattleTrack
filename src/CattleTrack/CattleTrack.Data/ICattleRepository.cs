using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CattleTrack.Data
{
    public interface ICattleRepository
    {
        /// <summary>
        /// Adds a new cattle
        /// </summary>
        /// <param name="name">The name of the animal</param>
        /// <param name="tag">The ear tag of the animal</param>
        /// <param name="dateOfBirth">The date of birth of the animal</param>
        /// <returns>The animal that was added</returns>
        Cattle AddCattle(string name, string tag, DateTime dateOfBirth);

        /// <summary>
        /// Returns all Cattle for a user
        /// </summary>
        /// <returns></returns>
        IEnumerable<Cattle> GetCattle();

        IQueryable<Cattle> Query();

        Cattle GetCattleById(int id);

        void DeleteCattle(int id);

        void Save(Cattle cattle);


    }
}
