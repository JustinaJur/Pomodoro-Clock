import React from 'react';

class RunningTime extends React.Component {
    render() {
        return (
            <div className="running-time component">
                <h3>TIME LEFT:</h3>
                <h1 className="red"> {this.props.min}:{this.props.sec}</h1>
            </div>
        )
    }
}


export default RunningTime
