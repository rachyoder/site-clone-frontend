import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';


import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';
import Feed from './components/Feed';
import Register from './components/Register';

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
			this.setState({ token: token });
		}
	}

	render() {
		let loginCheck = (this.state.token === '') ?
			(
				<Login token={this.setTokenState} />
			) : (
				<Feed token={this.state.token} setToken={this.setTokenState} />
			);
		return (
			<Router>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="/">
						<button 
						className="navbar-toggler" 
						type="button" 
						data-toggle="collapse" 
						data-target="#navbarApp" 
						aria-controls="navbarApp" 
						aria-expanded="false" 
						aria-label="Toggle navigation" 
						>
							<span className="navbar-toggler-icon"></span>
						</button>
					</a>
					<div className="collapse navbar-collapse" id="navbarApp">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to='/' >Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to='/register'>Register</Link>
							</li>
						</ul>
					</div>
				</nav>

				<Switch>
					<Route path='/register'>
						<Register setToken={this.setTokenState}/>
					</Route>
					<Route path='/'>
						{loginCheck}
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
