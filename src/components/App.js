import React from 'react';
import Headline from './Headline'
import Body from './Body'


class App extends React.Component {
    render() {
        return <div className="container" style={{
            border: "7px solid black"
        }}>
            <Headline />
            <Body />
        </div >
    }
}




export default App


