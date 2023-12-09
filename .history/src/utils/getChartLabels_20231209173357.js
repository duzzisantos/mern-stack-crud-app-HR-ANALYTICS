import { getMonthAsString } from "./getMonthAsString";

const getAvailableYears = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getFullYear()))];
};

const getUniqueMonths = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getMonth()))];
};

//Yearly appraisals filtered per ID and year
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
          getMonthAsString(element.updatedAt) === parseInt(year)
        ) {
          value.push(element[key]);
        }
      });
      return [key, value];
    })
  );
  return newObject;
};

//Monthly Appraisals per ID and month
const getUniqueMonthlyAppraisals = (data, employeeId, month) => {
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
          getMonthAsString(element.updatedAt) === parseInt(month)
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
