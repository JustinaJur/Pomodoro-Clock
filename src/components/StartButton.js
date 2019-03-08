import React from 'react';

class StartButton extends React.Component {
    render() {
        return (
            <div className="component">
                <button onClick={this.props.startClock}>

                    {this.props.buttonTitle}</button>
            </div>
        )
    }
}


export default StartButton

