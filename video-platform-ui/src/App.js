import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtube from './apis/youtube';

export default class App extends Component {

  state = {
            videos: [],
            selectedVideo: null
          };

  componentDidMount(){
    this.onTermSubmit('buildings');
  }
  componentDidUpdate(){
    console.log('State of the state', this.state);
  }        
  onTermSubmit = async term => {
  	console.log('App.js, search term' + term);
  	const response = await youtube.get('/search', 
  	{
  		params: {
  			q: term
  		}
  	})
  	this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});

  }
  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  }
 
  render() {

    return (
      <div className="ui container">
      	<SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
