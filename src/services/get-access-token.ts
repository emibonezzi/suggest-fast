import axios from "axios";
import qs from "qs";

export default axios
  .request({
    baseURL: "https://www.reddit.com/api/v1/access_token",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    method: "post",
    auth: {
      username: import.meta.env.REDDIT_CLIENT_ID,
      password: import.meta.env.REDDIT_CLIENT_SECRET,
    },
    data: qs.stringify({
      grant_type: "client_credentials",
    }),
  })
  .then((res) => res.data.access_token);
