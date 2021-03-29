import { Component } from 'react';
import './index.css'

class DarkMode extends Component {
	
	toggler = () => {
		let body = document.body;
	  body.classList.toggle("darkmode");
	}

	render() {
		return (
			<button onClick={this.toggler} id="darkmode-button"></button>
		)
	}	
}

export default DarkMode
