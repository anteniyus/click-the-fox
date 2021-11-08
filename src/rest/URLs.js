const dogURL = process.env.REACT_APP_DOG;
const catURL = process.env.REACT_APP_CAT;
const foxURL = process.env.REACT_APP_FOX;

export const getDogURL = () => `${dogURL}`;
export const getCatURL = () => `${catURL}`;
export const getFoxURL = () => `${foxURL}`;

export const internalPaths = {
  WELCOME: "/",
  PLAY: "/play",
  SCOREBOARD: "/scoreboard",
};
