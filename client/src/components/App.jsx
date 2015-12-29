require('../sass/main.scss');

import React from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import About from './About.jsx';

import Theme from './theme/theme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import connectToStores from 'alt-utils/lib/connectToStores';
import {Router, Route, Link} from 'react-router';
@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
class App extends React.Component {
  constructor(){
    super();
  };

  handleToggle = () => this.setState({open: !this.state.open});

  render(){
    return(
      <div>
        <AppBar title="Cattle Track"
          style={{
            marginBottom: "10px"
          }}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <LeftNav
        {this.props.children}
      </div>
    );
  }
}

// Router
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('container'))
