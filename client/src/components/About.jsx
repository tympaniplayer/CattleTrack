import React from 'react';
import AltContainer from 'alt-container';
import CattleStore from '../stores/CattleStore.js';

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
    return (
      <div>
        {this.props.testMessage}
      </div>
    )
  }
}

export default About
