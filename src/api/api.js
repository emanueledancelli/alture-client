import axios from "axios";

axios.defaults.baseURL = "https://api.alture.org/wp-json/wp/v2";

export const getEvents = () => axios.get("/eventi");

export const getPrivacy = () => axios.get(`/pages/60`);
