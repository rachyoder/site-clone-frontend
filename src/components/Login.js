import React from 'react';
import Input from './Input';
import Axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        event.preventDefault();
        Axios.post('http://127.0.0.1:8000/api/login', this.state)
            .then(res => {
                this.props.token(res.data.token);
                localStorage.setItem('token', res.data.token);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="text-center">Login:</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="emailLogin">
                                    Email:
                                </label>
                                <Input
                                    name="email"
                                    type="email"
                                    id="emailLogin"
                                    field={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="passwordLogin">
                                    Password:
                                </label>
                                <Input
                                    name="password"
                                    type="password"
                                    id="passwordLogin"
                                    field={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <button
                                    className="btn btn-secondary"
                                    type="submit"
                                    name="submit"
                                    onSubmit={this.handleSubmit}
                                >Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}