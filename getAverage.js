const getAverage = list => {
  return list.reduce((res, value) => (res += value), 0) / list.length;
};

module.exports = getAverage;
