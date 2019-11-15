import React from 'react';
import Axios from 'axios';
import {

	Link
} from 'react-router-dom';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        Axios.post('http://127.0.0.1:8000/api/register', this.state)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.setToken(res.data.token);
            })
        event.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nameRegister">
                            Name:
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="nameRegister"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                        <label htmlFor="emailRegister">
                            Email:
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="emailRegister"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                        <label htmlFor="passwordRegister">
                            Password:
                        </label>
                        <input
                            name="password"
                            type="password"
                            id="passwordRegister"
                            value={this.state.password}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                       <button
                            className="btn btn-primary mt-3"
                            type="submit"
                            name="submit"
                        >
                            <Link to="/">
                                Register
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}