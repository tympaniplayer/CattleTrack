import alt from '../alt';

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
