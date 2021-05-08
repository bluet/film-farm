import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3/";

const videoAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    key: process.env.YT_API_KEY,
  },
});

export const getVideosRequest = () =>
  videoAPI
    .get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "US",
        maxResults: 40,
        pageToken: "",
      },
    })
    .then((response) => response.data);

export default videoAPI;
