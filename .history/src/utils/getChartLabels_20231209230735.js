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

    console.log(filteredData);

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
const getUniqueMonthlyAppraisals = (data, employeeId, year) => {
  const initialObject = {
    employeeId,
    delivery: [],
    punctuality: [],
    qualityOfWork: [],
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
