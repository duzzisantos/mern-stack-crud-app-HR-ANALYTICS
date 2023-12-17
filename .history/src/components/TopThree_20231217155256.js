import { Card } from "react-bootstrap";

const TopThree = ({ employeeData, appraisalData, department }) => {
  const filteredDataPerDepartment = () => {
    return employeeData
      .filter((item) => item.department === department)
      .map((el) => el);
  };

  const rankEmployeesPerDepartment = () => {
    const uniqueEmployees = [
      ...new Set(employeeData.map((person) => person.ID)),
    ];

    uniqueEmployees.map((staff) => {
      return appraisalData
        .filter((element) => element.ID === staff)
        .map((item) => ({
          punctuality: item.punctuality.reduce((x, y) => x + y, 0),
          qualityOfWork: item.qualityOfWork.reduce((a, b) => a + b, 0),
          quantityOfWork: item.quantityOfWork.reduce((c, d) => c + d, 0),
          responsibility: item.responsibility.reduce((e, f) => e + f, 0),
          delivery: item.delivery.reduce((g, h) => g + h, 0),
        }));
    });
  };

  //   console.log(rankEmployeesPerDepartment());

  console.log(appraisalData);

  return (
    <div className="col-9 col-md-12">
      {filteredDataPerDepartment().map((people) => (
        <Card key={people.ID}></Card>
      ))}
    </div>
  );
};

export default TopThree;
