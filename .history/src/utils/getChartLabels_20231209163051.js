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
        if (element.delivery) {
          return [key, value.push(...element.delivery)];
        } else if (element.punctuality) {
          return [key, value.push(...element.punctuality)];
        } else if (element.qualityofWork) {
          return [key, value.push(...element.qualityofWork)];
        } else if (element.quantityOfWork) {
          return [key, value.push(...element.quantityOfWork)];
        } else if (element.responsibility) {
          return [key, value.push(...element.responsibility)];
        }
      });
      return value;
    })
  );
};

export { getAvailableYears, getUniqueAppraisals };
