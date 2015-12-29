import alt from '../alt';
import {decorate} from 'alt-utils/lib/decorators'

@decorate(alt)
class CattleStore{
    constructor(){
      this.cattle = [
        {
          name: "Molly"
        }
      ]
  }
}

export default alt.createStore(CattleStore);
