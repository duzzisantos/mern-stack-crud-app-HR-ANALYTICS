import { getAverage } from "./getChartLabels";

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
    const filteredData = data
      .filter((element) => {
        const elementYear = element.year;
        return (
          elementYear === year && employeeId.match(new RegExp(`${element.ID}`))
        );
      })
      .sort((a, b) => a - b);

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

export { getUniqueAppraisals };
