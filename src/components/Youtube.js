import axios from 'axios';

const KEY = "AIzaSyA0bp0xAId3HHrvUkU7Z-XK3KJMu6dAHBo";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
});