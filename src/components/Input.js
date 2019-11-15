import React from 'react';

export default class Input extends React.Component {
    render() {
        return(
            <input 
            type={this.props.type} 
            name={this.props.name}
            id={this.props.id}
            value={this.props.field} 
            onChange={this.props.onChange} 
            className="form-control" />
        );
    }
}