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

//Yearly appraisals filtered per ID and year
const getUniqueAppraisals = (data, employeeId, years) => {
  const initialObject = {
    employeeId,
    years,
    delivery: [],
    punctuality: [],
    qualityOfWork: [],
    quantityOfWork: [],
    responsibility: [],
  };

  years.forEach((year) => {
    const filteredData = data.filter((element) => {
      const elementYear = element.year;
      return (
        elementYear === year && employeeId.match(new RegExp(`${element.ID}`))
      );
    });

    // Process the filtered data and push to the corresponding arrays
    // Calculate the average for each property and push to the corresponding arrays
    initialObject.delivery.push(
      getAverage(filteredData.map((element) => element.delivery))
    );
    initialObject.punctuality.push(
      getAverage(filteredData.map((element) => element.punctuality))
    );
    initialObject.qualityOfWork.push(
      getAverage(filteredData.map((element) => element.qualityOfWork))
    );
    initialObject.quantityOfWork.push(
      getAverage(filteredData.map((element) => element.quantityOfWork))
    );
    initialObject.responsibility.push(
      getAverage(filteredData.map((element) => element.responsibility))
    );
  });
  return initialObject;
};

//Monthly Appraisals per ID and month
const getUniqueMonthlyAppraisals = (data, employeeId, selectedYear) => {
  const getExactMonths = data
    .filter(
      (element) =>
        selectedYear.match(new RegExp(`${element.year}`)) &&
        employeeId.match(new RegExp(`${element.ID}`))
    )
    .map((item) => item.month);

  const initialObject = {
    employeeId,
    months: getExactMonths,
    delivery: [].flat(),
    punctuality: [].flat(),
    qualityOfWork: [].flat(),
    quantityOfWork: [].flat(),
    responsibility: [].flat(),
  };

  const filteredData = data.filter(
    (element) =>
      selectedYear.match(new RegExp(`${element.year}`)) &&
      employeeId.match(new RegExp(`${element.ID}`))
  );

  // Process the filtered data and push to the corresponding arrays
  // Calculate the average for each property and push to the corresponding arrays

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

export {
  getAvailableYears,
  getUniqueAppraisals,
  getUniqueMonths,
  getUniqueMonthlyAppraisals,
};
