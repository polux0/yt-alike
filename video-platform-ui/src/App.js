import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {process.env.WHATEVER}
      </div>
    );
  }
}

export default App;
