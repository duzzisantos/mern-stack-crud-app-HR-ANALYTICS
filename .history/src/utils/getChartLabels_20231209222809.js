const getAvailableYears = (data) => {
  return [...new Set(data.map((el) => el.year))];
};

const getUniqueMonths = (data) => {
  return [...new Set(data.map((el) => el.month))];
};

//Yearly appraisals filtered per ID and year
const getUniqueAppraisals = (data, employeeId, year) => {
  const initialObject = {
    employeeId,
    delivery: [],
    punctuality: [],
    qualityOfWork: [],
    quantityOfWork: [],
    responsibility: [],
  };

  const meanScores = {};
  year.forEach((element) => {
    const filteredData = data.filter((element) => {
      const elementYear = element.year;
      return elementYear === year;
    });

    const yearObject = Object.fromEntries(
      Object.entries(initialObject).map(([key, value]) => {
        const propValues = filteredData.map((item) =>
          item[key].filter(Boolean)
        );
        const meanScore =
          propValues.length > 0
            ? propValues.reduce((sum, value) => sum + value, 0) /
              propValues.length
            : 0;

        return [key, meanScore];
      })
    );
    meanScores[element] = yearObject;
  });
  return meanScores;
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
