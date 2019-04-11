import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';

export default class App extends Component {

  state = {
            videos: [],
            selectedVideo: null
          };

  onTermSubmit = async term => {
  	console.log('App.js, search term' + term);
  	const response = await youtube.get('/search', 
  	{
  		params: {
  			q: term
  		}
  	})
  	this.setState({videos: response.data.items});

  }
  onVideoSelect = (video) => {
    console.log('From the App!');
    console.log(video);
  }
  render() {
    return (
      <div className="ui container">
      	<SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}
