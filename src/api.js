import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        key: process.env.REACT_APP_API_KEY || 'AIzaSyAvudCPRsAqikw6eTPHaPAi7fm29-aig-8'
    }
});

export default apiRequest;