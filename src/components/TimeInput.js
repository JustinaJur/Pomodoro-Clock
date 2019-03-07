import React from 'react'

class TimeInput extends React.Component {
    render() {
        return (
            <div className="time-input component">
                <h2>{this.props.notice}</h2>
                <input
                    type="number"
                    onChange={this.props.handleChange}
                    required
                    value={this.props.value}
                />
            </div>
        )
    }
}


export default TimeInput