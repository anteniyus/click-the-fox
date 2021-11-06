import RestAPI from "../../../../../rest/ResiAPI";
import { getCatURL, getDogURL, getFoxURL } from "../../../../../rest/URLs";

const api = new RestAPI();

const getDog = () =>
  api
    .SendRequest("get", getDogURL())
    .then((response) => ({ data: response.data.message, type: "dog" }));

const getCat = () =>
  api
    .SendRequest("get", getCatURL())
    .then((response) => ({ data: response.data.file, type: "cat" }));

const getFox = () =>
  api
    .SendRequest("get", getFoxURL())
    .then((response) => ({ data: response.data.image, type: "fox" }));

export { getDog, getCat, getFox };
