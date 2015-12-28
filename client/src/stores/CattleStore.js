import alt from '../alt';
import {decorate} from 'alt-utils/lib/decorators'

class CattleStore{
    constructor(){
      this.state = {testMessage: "Hello World!"}
  }
}

export default alt.createStore(CattleStore);
