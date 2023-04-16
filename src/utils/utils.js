const splitBySymbol = (data, symbol) => {
  const newData = data.split(symbol);
  return newData.map((value) => value.trim());
};
export default splitBySymbol;
