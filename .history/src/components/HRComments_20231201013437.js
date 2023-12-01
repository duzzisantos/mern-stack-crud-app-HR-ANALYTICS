import PropTypes from "prop-types";

const HRComments = ({ hrComments, superVisorComments }) => {
  return (
    <div
      className="d-flex flex-column p-4 gap-3 shadow-sm rounded-3 col-4"
      style={{ height: "600px" }}
    >
      <div className="d-flex flex-column gap-3">
        <small className="fw-bold">HR Recommendations</small>
        <div className="p-2">
          <article>{hrComments}</article>
        </div>
      </div>
      <hr />

      <div className="d-flex flex-column gap-3">
        <small className="fw-bold">Supervisor Recommendations</small>
        <div className="p-2">
          <article>{superVisorComments}</article>
        </div>
      </div>
    </div>
  );
};

HRComments.propTypes = {
  hrComments: PropTypes.string,
  superVisorComments: PropTypes.string,
};

export default HRComments;
