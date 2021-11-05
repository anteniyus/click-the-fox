// Formula taken from a stackoverflow post
const randomize = (arr) => {
  const deepClone = JSON.parse(JSON.stringify(arr));
  const { length } = deepClone;

  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [deepClone[i], deepClone[j]] = [deepClone[j], deepClone[i]];
  }

  return deepClone;
};

export default randomize;
