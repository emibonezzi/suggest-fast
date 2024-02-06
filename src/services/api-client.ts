import getAccessToken from "./get-access-token";
import axios from "axios";

export default axios.create({
  baseURL: "https://oauth.reddit.com/api/v1",
  headers: { Authorization: `bearer ${getAccessToken}` },
});
