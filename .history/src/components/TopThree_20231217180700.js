import { Card } from "react-bootstrap";

const TopThree = ({ filteredData }) => {
  return (
    <div className="col-9 col-md-12 d-flex hstack gap-3 my-4">
      {filteredData.map((person, index) => (
        <Card key={index} className="col-lg-3 col-md-4 col-sm-12 p-2">
          <Card.Header className="text-center bg-transparent border-0">
            <h5 className="fs-6 fw-semibold">
              {person.firstName} {person.lastName}
            </h5>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-center bg-warning">
              <Card.Img src="" alt={person.ID} />
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TopThree;
