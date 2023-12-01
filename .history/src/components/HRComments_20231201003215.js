const HRComments = ({ hrComments, superVisorComments }) => {
  return (
    <div className="d-flex flex-column p-4 gap-3">
      <div className="d-flex flex-column gap-3">
        <small>HR Recommendations</small>
        <div className="p-2">
          <article>{hrComments}</article>
        </div>
      </div>
      <hr />

      <div className="d-flex flex-column gap-3">
        <small>Supervisor Recommendations</small>
        <div className="p-2">
          <article>{superVisorComments}</article>
        </div>
      </div>
    </div>
  );
};

export default HRComments;
