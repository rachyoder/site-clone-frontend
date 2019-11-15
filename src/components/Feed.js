import React from 'react';
import Navbar from './Navbar.js';
import Axios from 'axios';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Axios({
            url: '/posts',
            method: 'get',
            baseURL: 'http://127.0.0.1:8000/api/',
            headers: {'Authorization': 'Bearer ' + this.props.token}
        })
            .then(res => {
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="container">
                <Navbar token={this.props.token} setToken={this.props.setToken} />
            </div>

        );
    }
}