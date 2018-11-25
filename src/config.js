import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.alture.org/wp-json/wp/v2'
  });
  
export default instance;  