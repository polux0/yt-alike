import React, {Component} from 'react'

export default class SearchBar extends Component {

	//const API_KEY = 'AIzaSyC_XPEDhxm7nxRXL7by_TD_TWOuKqDBgM8';

	state = {
		term: ''
	};

	onInputChange = event => this.setState({term: event.target.value});
	onFormSubmit = event => {
		event.preventDefault();

		//to do - make sure we call callback from parent component;
	}
	render(){
		return(
			
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label> Video Search </label>
						<input 
							type="text"
							value={this.state.term} 
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>	

		) 
	}
}