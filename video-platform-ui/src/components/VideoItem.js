import React from 'react';
import './VideoItem.css';

const VideoItem = ({video}) => {
	 //  <div class="item">
  //   <i class="large github middle aligned icon"></i>
  //   <div class="content">
  //     <a class="header">Semantic-Org/Semantic-UI-Docs</a>
  //     <div class="description">Updated 22 mins ago</div>
  //   </div>
  // </div>
	return(
		<div className="video-item item"> 
			<img className="ui image" src={video.snippet.thumbnails.medium.url} />
			<div className="content">
				<div className="header">
					{video.snippet.title}	
				</div>
			</div>
 
		</div>


	) 
}
export default VideoItem;