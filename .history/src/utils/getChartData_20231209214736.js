export const getMeanAnnualPerformance = (data) => {
  const result = data.reduce((prev, next) => prev + next, 0);
  return result / data.length;
};
