import { Card } from "react-bootstrap";

const TopThree = ({ appraisalData, department, year, month }) => {
  //   const filteredDataPerDepartment = () => {
  //     return employeeData
  //       .filter((item) => item.department === department)
  //       .map((el) => el);
  //   };

  //   const uniqueEmployees = [...new Set(employeeData.map((person) => person.ID))];

  //   const eachAppraisalList = () => {
  //     return uniqueEmployees.map((staff) => {
  //       const rankedData = appraisalData
  //         .filter((element) => element.ID === staff)
  //         .map((list) => list);
  //       // .map((item) => ({
  //       //   punctuality: item.punctuality.reduce((x, y) => x + y, 0),
  //       //   qualityOfWork: item.qualityOfWork.reduce((a, b) => a + b, 0),
  //       //   quantityOfWork: item.quantityOfWork.reduce((c, d) => c + d, 0),
  //       //   responsibility: item.responsibility.reduce((e, f) => e + f, 0),
  //       //   delivery: item.delivery.reduce((g, h) => g + h, 0),
  //       // }));

  //       return rankedData;
  //     });
  //   };

  const getLeagueTableData = () => {
    appraisalData
      .filter(
        (element) =>
          element.department === department &&
          element.year === year &&
          element.month === month
      )
      .map((item) => item);
  };

  console.log(getLeagueTableData());

  return (
    <div className="col-9 col-md-12">
      {getLeagueTableData().map((person) => (
        <Card key={person.ID}>
          <p>{person.firstName}</p>
        </Card>
      ))}
    </div>
  );
};

export default TopThree;
