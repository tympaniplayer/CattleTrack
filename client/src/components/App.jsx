require('../sass/main.scss');

import React from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import About from './About.jsx';

import Theme from './theme/theme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

import {Router, Route, Link} from 'react-router';
import CattleStore from '../stores/CattleStore';
import {connect} from 'alt-react'

@connectToStores
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
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}


  connect(App, {
    listenTo(){
      return [CattleStore]
    },

    getProps(){
      return {
        state: CattleStore.getState()
      }
    }
  })

// Router
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('container'))
