import axios from "axios";

// GET https://www.googleapis.com/youtube/v3/search

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
