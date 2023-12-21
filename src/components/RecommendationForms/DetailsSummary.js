const DetailsSummary = ({ title, property, generatedRecommendation }) => {
  return (
    <details className="mx-4 my-2">
      <summary className="fs-6 fw-bold">{title}</summary>
      <div className="m-2 p-2 vstack gap-2 shadow-sm border-end border-5 border-success">
        <small>Score: {property}</small>
        <small>
          Recommendation:
          {generatedRecommendation?.map((el) => (
            <ol key={el} className="gap-2">
              <li>Training {el.training}</li>
              <li>Behavioural {el.behavioural}</li>
            </ol>
          ))}
        </small>
      </div>
    </details>
  );
};

export default DetailsSummary;
