import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: "Hello, World!"
    }
  };

  render(){
    return(
      <div>{this.state.message}</div>
    )
  }
}

export default App;
