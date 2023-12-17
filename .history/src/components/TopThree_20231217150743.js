import { Card } from "react-bootstrap";

const TopThree = ({ appraisalData, department }) => {
  const filteredDataPerDepartment = () => {
    return appraisalData
      .filter((item) => item.department === department)
      .map((el) => el);
  };
  return (
    <div className="col-9 col-md-12">
      {filteredDataPerDepartment().map((people) => (
        <Card></Card>
      ))}
    </div>
  );
};

export default TopThree;
