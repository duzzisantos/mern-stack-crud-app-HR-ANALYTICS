import { Card } from "react-bootstrap";

const TopThree = ({ filteredData }) => {
  return (
    <div className="col-9 col-md-12">
      {filteredData?.map((person, index) => (
        <Card key={index}>
          <p>{person.firstName}</p>
        </Card>
      ))}
    </div>
  );
};

export default TopThree;
