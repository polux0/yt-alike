import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {process.env.WHATEVER}
        enviornment variables doesn't work
      </div>
    );
  }
}

export default App;
