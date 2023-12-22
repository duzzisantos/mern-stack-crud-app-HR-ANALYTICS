import React from "react";
import { PersonFill } from "react-bootstrap-icons";

const HeadCount = ({ appraisalData, selectedDepartment }) => {
  const filteredData = appraisalData.filter((file) =>
    selectedDepartment.includes(file.department)
  );
  return (
    <React.Fragment>
      {filteredData.length ? (
        <div className="col-12">
          <h2 className="fs-5 fw-bold">Head Count</h2>
          <div className="d-flex flex-wrap hstack gap-2 ">
            {filteredData.map((item) => (
              <PersonFill
                key={item._id}
                title={`${item.firstName} ${item.lastName}`}
                className="fs-2 text-secondary"
              />
            ))}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default HeadCount;
