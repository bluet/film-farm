import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3/";

const request = axios.create({
  baseURL: BASE_URL,
  params: {
    key: process.env.YT_API_KEY,
  },
});

export default request;
