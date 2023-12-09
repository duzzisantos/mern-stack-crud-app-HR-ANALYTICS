const getAvailableYears = (data) => {
  return [...new Set(data.map((el) => el.year))];
};

const getUniqueMonths = (data) => {
  return [...new Set(data.map((el) => el.month))];
};

//Yearly appraisals filtered per ID and year
const getUniqueAppraisals = (data, employeeId) => {
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
        if (element[key] && employeeId.match(new RegExp(`${element.ID}`))) {
          value.push(element[key]);
        }
      });
      return [key, value];
    })
  );
  return newObject;
};

//Monthly Appraisals per ID and month
const getUniqueMonthlyAppraisals = (data, employeeId, year) => {
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
          year.match(new RegExp(`${element.year}`))
        ) {
          value.push(element[key]);
        }
      });
      return [key, value];
    })
  );
  return newObject;
};

export {
  getAvailableYears,
  getUniqueAppraisals,
  getUniqueMonths,
  getUniqueMonthlyAppraisals,
};
