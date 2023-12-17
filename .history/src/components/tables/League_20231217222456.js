import { Table } from "react-bootstrap";

const League = ({ filteredData, employeeData }) => {
  return (
    <section className="col-9 col-md-12 my-5 p-5 text-secondary">
      <h2 className="fs-4 fw-bold">League Standings</h2>
      <Table bordered responsive hover>
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
              ID,
            } = element;
            return (
              <tr key={index}>
                <td>
                  {firstName} {lastName}
                </td>
                <td>
                  {employeeData
                    .filter((each) => each.ID === ID)
                    .map((el) => el.role)}
                </td>
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
    </section>
  );
};

export default League;
