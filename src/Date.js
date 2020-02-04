import React from 'react';

export class Date extends React.Component {
    render() {
        return(
            <div className="c-log">{this.props.date}</div>
        )
    }
}