import React from 'react';
import Navbar from './Navbar.js';
export default class Feed extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar token={this.props.token} setToken={this.props.setToken} />
            </div>

        );
    }
}