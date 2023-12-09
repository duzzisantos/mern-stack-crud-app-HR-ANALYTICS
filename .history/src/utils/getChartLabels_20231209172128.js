const getAvailableYears = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getFullYear()))];
};

const getUniqueMonths = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getMonth()))];
};

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
        if (
          element[key] &&
          employeeId.match(new RegExp(`${element[key] === "ID"}`))
        ) {
          value.push(element[key]);
        }
      });
      return [key, value];
    })
  );
  return newObject;
};

export { getAvailableYears, getUniqueAppraisals, getUniqueMonths };
