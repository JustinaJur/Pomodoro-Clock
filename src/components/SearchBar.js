import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            pvz: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.pvz)

    }

    render() {
        return (
            // <div className="ui segment" >
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
                        <label> VIDEO Search </label>
                        <input
                            type="text"
                            onChange={(event) => this.setState({ pvz: event.target.value })}
                            value={this.state.pvz}
                        />
                    </div>
                </form>

                {/* <h1>{this.state.pvz}</h1> */}
            </div >
        )

    }
}


export default SearchBar