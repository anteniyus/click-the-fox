import Axios from "axios";

class RestAPI {
  SendRequest = (method, url, params, data, headers) =>
    Axios.request({
      method,
      url,
      params,
      data,
      headers,
    });
}

export default RestAPI;
