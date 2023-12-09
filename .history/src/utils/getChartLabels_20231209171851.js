const getAvailableYears = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getFullYear()))];
};

const getUniqueMonths = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getMonth()))];
};

const getUniqueAppraisals = (data, employeeId) => {
  const initialObject = {
    // ID: [],
    delivery: [],
    punctuality: [],
    qualityofWork: [],
    quantityOfWork: [],
    responsibility: [],
  };

  const newObject = Object.fromEntries(
    Object.entries(initialObject).map(([key, value]) => {
      data.forEach((element) => {
        if (element[key]) {
          value.push(element.ID, element[key]);
        }
      });
      return [key, value];
    })
  );
  return newObject;
};

export { getAvailableYears, getUniqueAppraisals, getUniqueMonths };
