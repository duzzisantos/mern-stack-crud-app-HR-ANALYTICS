//Monthly Appraisals per ID and month
const getUniqueMonthlyAppraisals = (data, employeeId, selectedYear) => {
  const getExactMonths = data
    .filter(
      (element) =>
        selectedYear.match(new RegExp(`${element.year}`)) &&
        employeeId.match(new RegExp(`${element.ID}`))
    )
    .map((item) => item.month)
    .sort((a, b) => a - b);

  const initialObject = {
    employeeId,
    months: getExactMonths,
    delivery: [],
    punctuality: [],
    qualityOfWork: [],
    quantityOfWork: [],
    responsibility: [],
  };

  const filteredData = data.filter(
    (element) =>
      selectedYear.match(new RegExp(`${element.year}`)) &&
      employeeId.match(new RegExp(`${element.ID}`))
  );

  // Process the filtered data and push to the corresponding arrays

  initialObject.punctuality.push(
    filteredData.map((element) => element.punctuality)
  );

  initialObject.delivery.push(filteredData.map((element) => element.delivery));
  initialObject.qualityOfWork.push(
    filteredData.map((element) => element.qualityOfWork)
  );

  initialObject.quantityOfWork.push(
    filteredData.map((element) => element.quantityOfWork)
  );

  initialObject.responsibility.push(
    filteredData.map((element) => element.responsibility)
  );

  return initialObject;
};

export { getUniqueMonthlyAppraisals };
