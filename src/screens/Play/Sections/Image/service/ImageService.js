import RestAPI from "../../../../../rest/ResiAPI";
import { getCatURL, getDogURL, getFoxURL } from "../../../../../rest/URLs";
import { animalTypes } from "../../../../../constants/AnimalTypes";

const api = new RestAPI();

const getDog = () =>
  api.SendRequest("get", getDogURL()).then((response) => ({
    data: response.data.message,
    type: animalTypes.DOG,
  }));

const getCat = () =>
  api
    .SendRequest("get", getCatURL())
    .then((response) => ({ data: response.data.file, type: animalTypes.CAT }));

const getFox = () =>
  api
    .SendRequest("get", getFoxURL())
    .then((response) => ({ data: response.data.image, type: animalTypes.FOX }));

export { getDog, getCat, getFox };
