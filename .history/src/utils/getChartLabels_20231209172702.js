const getAvailableYears = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getFullYear()))];
};

const getUniqueMonths = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getMonth()))];
};

const getUniqueAppraisals = (data, employeeId, year) => {
  const initialObject = {
    delivery: [],
    punctuality: [],
    qualityofWork: [],
    quantityOfWork: [],
    responsibility: [],
  };

  const newObject = Object.fromEntries(
    Object.entries(initialObject).map(([key, value]) => {
      data.forEach((element) => {
        if (
          element[key] &&
          employeeId.match(new RegExp(`${element.ID}`)) &&
          new Date(element.updatedAt).getFullYear() === parseInt(year)
        ) {
          value.push(element[key]);
        }
      });
      return [key, value];
    })
  );
  return newObject;
};

const getUniqueMonthlyAppraisals = (data, employeeId, month) => {};

export {
  getAvailableYears,
  getUniqueAppraisals,
  getUniqueMonths,
  getUniqueMonthlyAppraisals,
};
