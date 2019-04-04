import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

export default class App extends Component {

  state = {};
  render() {
    return (
      <div className="ui container">
      	<SearchBar />
      </div>
    );
  }
}
