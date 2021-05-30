import axios from "axios";

//OLD API URL
//axios.defaults.baseURL = "https://api.alture.org/wp-json/wp/v2";

axios.defaults.baseURL = "https://60b257c862ab150017ae1fdc.mockapi.io/api/v1/";

export const getEvents = () => axios.get("/eventi");

export const getPrivacy = () => axios.get(`/privacy`);
