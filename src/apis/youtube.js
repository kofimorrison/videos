import axios from "axios";

const KEY = "AIzaSyABUFGaEMnz6rbb5zQdZ7xdyzvQsXjFFac";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
