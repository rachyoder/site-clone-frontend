import React from 'react';
import './App.css';


import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';
import Feed from './components/Feed';

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

	componentDidMount() {
		if (localStorage.length > 0) {
			const token = localStorage.getItem('token');
			this.setState({token: token});
		}
	}

	render() {
		return (this.state.token === '') ? (
			<Login token={this.setTokenState} />
		) : (
			<Feed token={this.state.token} setToken={this.setTokenState} />
		);
	}
}

export default App;
