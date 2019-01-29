import React from 'react'


class StopButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.stop}>Stop</button>
        )
    }
}


export default StopButton