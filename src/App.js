import React from 'react';
import './App.css';


import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			token: ''
		}
		this.setTokenState = this.setTokenState.bind(this);
	}
	
	setTokenState(token) {
		this.setState({ token: token });
	}

	render() {
		return (this.state.token === '') ? (
			<Login token={this.setTokenState} />
		) : (
			<h1>Logged In!!</h1>
		);
	}
}

export default App;
