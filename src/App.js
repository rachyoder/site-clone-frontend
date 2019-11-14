import React from 'react';
import './App.css';
import Axios from 'axios';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'token': ''
		}
	}

	render() {
		return (
			<div>
				<Login token='{this.state.token}'/>
			</div>
		);
	}
}

export default App;
