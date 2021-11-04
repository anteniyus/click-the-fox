const orderBy = (propName) => (a, b) => {
  const aProb = a[propName];
  const bProb = b[propName];
  if (aProb > bProb) return 1;
  if (aProb < bProb) return -1;
  return 0;
};

export default orderBy;
