import axios from "axios";
// api restriction added
const KEY = "AIzaSyAn-mXeSkavjZQvtBVHJY74WlMWpvSCGD0";

export default axios.create({
  // base url and default parameters
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
