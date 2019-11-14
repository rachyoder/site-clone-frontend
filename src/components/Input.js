import React from 'react';

export default class Input extends React.Component {
    render() {
        return(
            <input type={this.props.name} name={this.props.name} value={this.props.field} onChange={this.props.onChange} default />
        );
    }
}