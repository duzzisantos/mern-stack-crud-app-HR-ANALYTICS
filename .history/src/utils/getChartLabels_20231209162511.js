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
      return [key, value.push(555)];
    })
  );
};
