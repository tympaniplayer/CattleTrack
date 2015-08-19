using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CattleTrack.Data
{
    public class Record
    {
        public int Id { get; private set; }
        public string Content { get; private set; }
        public DateTime Date { get; private set; }        
    }
}
