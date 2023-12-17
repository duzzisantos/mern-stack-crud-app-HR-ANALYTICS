import { Card } from "react-bootstrap";

const TopThree = ({ filteredData }) => {
  return (
    <div className="col-9 col-md-12">
      {filteredData?.map((person) => (
        <Card key={person.ID}>
          <p>{person.firstName}</p>
        </Card>
      ))}
    </div>
  );
};

export default TopThree;
