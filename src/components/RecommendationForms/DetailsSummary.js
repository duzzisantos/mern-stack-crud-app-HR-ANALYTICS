const DetailsSummary = ({ title, property }) => {
  return (
    <details className="mx-4 my-2">
      <summary className="fs-6 fw-bold">{title}</summary>
      <div className="m-2 p-2 shadow-sm border-end border-5 border-success">
        <p>Score: {property}</p>
        <p>Recommendation:</p>
      </div>
    </details>
  );
};

export default DetailsSummary;
