import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import CattleStore from '../stores/CattleStore.js';
import CattleView from './Cattle/CattleView.jsx';
@connectToStores
class About extends React.Component {
  constructor(){
    super();
  }

  static getStores(){
    return [CattleStore];
  }

  static getPropsFromStores(){
    return CattleStore.getState();
  }

  render(){
   let {cattle} = this.props;
    return (
        <CattleView cattle={cattle[0]} />
    )
  }
}

export default About
