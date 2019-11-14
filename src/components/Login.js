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
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="text-center">Login:</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Email:
                                <Input
                                    name="email"
                                    field={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label>
                                Password:
                                <Input
                                    name="password"
                                    field={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <input
                                type="submit"
                                name="submit"
                                onSubmit={this.handleSubmit}
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}