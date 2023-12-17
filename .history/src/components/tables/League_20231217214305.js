import { Table } from "react-bootstrap";

const League = ({ appraisalData }) => {
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
        <tbody></tbody>
      </Table>
    </div>
  );
};
