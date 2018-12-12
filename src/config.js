import axios from "axios";

export default axios.create({
  baseURL: "https://api.alture.org/wp-json/wp/v2"
});
