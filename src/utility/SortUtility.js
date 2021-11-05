const orderByAscending = (propName) => (a, b) => {
  const aProb = a[propName];
  const bProb = b[propName];
  if (aProb > bProb) return 1;
  if (aProb < bProb) return -1;
  return 0;
};

const orderByDescending = (propName) => (a, b) => {
  const aProb = a[propName];
  const bProb = b[propName];
  if (aProb > bProb) return -1;
  if (aProb < bProb) return 1;
  return 0;
};

export { orderByAscending, orderByDescending };
