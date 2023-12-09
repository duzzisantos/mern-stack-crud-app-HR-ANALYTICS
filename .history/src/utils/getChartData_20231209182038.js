const getMeanAnnualPerformance = (data) => {
  const result = data
    .map((element) => element)
    .reduce((prev, next) => prev + next, 0);
  return result / data.length;
};
