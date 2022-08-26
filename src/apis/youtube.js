import axios from 'axios';

const KEY = 'AIzaSyAHnG4UUMdJ7Cwzmnc3EPlerFr04VjiWW4';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

