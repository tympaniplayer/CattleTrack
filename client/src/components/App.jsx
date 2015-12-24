import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import Theme from './theme/theme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: "Hello, World!"
    }
  };

  render(){
    return(
      <div>
        <AppBar title="Cattle Track" style={{
          marginBottom: "10px"
        }}/>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default App;
