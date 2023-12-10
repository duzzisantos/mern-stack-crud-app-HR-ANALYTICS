const getAvailableYears = (data) => {
  return [...new Set(data.map((el) => el.year))];
};

const getUniqueMonths = (data) => {
  return [...new Set(data.map((el) => el.month))];
};

// Helper function to calculate the average of an array of numbers
const getAverage = (array) => {
  const sum = array.reduce((total, value) => total + value, 0);
  return array.length > 0 ? sum / array.length : 0;
};

export { getAvailableYears, getUniqueMonths, getAverage };
