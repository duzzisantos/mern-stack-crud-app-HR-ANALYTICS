import { Card } from "react-bootstrap";

const TopThree = ({ filteredData }) => {
  return (
    <div className="col-9 col-md-12 d-flex hstack gap-3 mt-3">
      {filteredData.map((person, index) => (
        <Card key={index} className="col-lg-3 col-md-4 col-sm-12 p-2">
          <p>{person.firstName}</p>
        </Card>
      ))}
    </div>
  );
};

export default TopThree;
