import alt from '../alt';

import {decorate, bind, datasource} from 'alt/utils/decorators'

@decorate(alt)
class CattleSTore{
  constructor(){
    this.state = {cattle: [
      {
        id: 1,
        name: 'Molly',
        dob: '2013-2-2',
        sex: 'f'        
      }
    ]};
  }
}

export default alt.createStore(CattleStore);
