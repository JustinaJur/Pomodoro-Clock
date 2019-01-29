import React from 'react';
// import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import List from './List'
import youtube from './Youtube'
import Example from './Example'
import Headline from './Headline'

import Body from './Body'


class App extends React.Component {
    // state = { images: [] };
    // onSearchSubmit = async (pvz) => {
    //     const response = await unsplash
    //         .get('/search/photos', {
    //             params: { query: pvz },
    //         });
    //     this.setState({ images: response.data.results });
    // }


    // state = { videos: [] };
    // onSearchSubmit = async term => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     });
    //     this.setState({ videos: response.data.items });
    // };



    render() {
        return <div className="container" style={{
            border: "7px solid black"
        }}>

            {/* <SearchBar onSubmit={this.onSearchSubmit} />
            We found {this.state.videos.length} videos. */}
            {/* <List videos={this.state.videos} />*/}
            {/* <Mygtukas /> */}
            {/* <Example author="juste" /> */}

            <Headline additional="" />
            <Body />


        </div >
    }
}




export default App


