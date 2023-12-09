const getAvailableYears = (data) => {
  return [...new Set(data.map((el) => new Date(el.updatedAt).getFullYear()))];
};

const getUniqueAppraisals = (data) => {
  const initialObject = {
    delivery: [],
    punctuality: [],
    qualityofWork: [],
    quantityOfWork: [],
    responsibility: [],
  };

  Object.fromEntries(
    Object.entries(initialObject).map(([key, value]) => {
      data.forEach((element) => {
        if (key === element.delivery) {
          return [key, value.push(...element.delivery)];
        } else if (key === element.punctuality) {
          return [key, value.push(...element.punctuality)];
        } else if (key === element.qualityofWork) {
          return [key, value.push(...element.qualityofWork)];
        } else if (key === element.quantityOfWork) {
          return [key, value.push(...element.quantityOfWork)];
        } else if (key === element.responsibility) {
          return [key, value.push(...element.responsibility)];
        }
      });
      return value;
    })
  );
};

export { getAvailableYears, getUniqueAppraisals };
