import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
  }
});

export default Axios;