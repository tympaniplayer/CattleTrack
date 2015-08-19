using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CattleTrack.Data
{
    public class Cattle
    {
        public int Id { get; private set; }        
        public string Name { get; private set; }
        public string Tag { get; private set; }
        public string Notes { get; set; }
        public DateTime DateOfBirth { get; private set; }
        public IList<Record> Records { get; private set; }

        public string UserName { get; private set; }


    }
}
