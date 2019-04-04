import axios from 'axios';

const KEY = 'AIzaSyB-lQGvpO7hEnSmfpNSFRRlNN1Rv5gUvPc';

export default axios.create({

baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
	part: 'snippet',
	maxResults: 5,
	key: KEY
}

});