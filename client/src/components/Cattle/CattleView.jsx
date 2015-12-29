import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class CattleView extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <List>
        <ListItem primaryText={this.props.cattle.name} secondaryText="Name" />
      </List>
    );
  }
}

export default CattleView;
