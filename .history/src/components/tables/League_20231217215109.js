import { Table } from "react-bootstrap";

const League = ({ filteredData }) => {
  return (
    <div className="col-9 col-md-12">
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Quality of work</th>
            <th>Quantity of work</th>
            <th>Responsibility</th>
            <th>Punctuality</th>
            <th>Delivery</th>
            <th>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((element, index) => {
            const {
              delivery,
              punctuality,
              qualityOfWork,
              quantityOfWork,
              responsibility,
              firstName,
              lastName,
            } = element;
            return (
              <tr key={index}>
                <td>
                  {firstName} {lastName}
                </td>
                <td>{}</td>
                <td>{qualityOfWork}</td>
                <td>{quantityOfWork}</td>
                <td>{responsibility}</td>
                <td>{punctuality}</td>
                <td>{delivery}</td>
                <td>
                  {(quantityOfWork +
                    qualityOfWork +
                    responsibility +
                    delivery +
                    punctuality) /
                    5}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
