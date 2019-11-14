import React from 'react';
import Axios from 'axios';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.verifyLogout = this.verifyLogout.bind(this);
    }
    
    verifyLogout() {
        Axios({
            url: '/logout',
            method: 'get',
            baseURL: 'http://127.0.0.1:8000/api/',
            headers: {'Authorization': 'Bearer ' + this.props.token}
        })
            .then(res => {
                this.props.setToken('');
                localStorage.removeItem('token');
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.verifyLogout}>Log Out</button>
            </div>
        );
    }
}