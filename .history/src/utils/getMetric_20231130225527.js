const getMetric = (metric, currentvalue) => {
  return metric === "qualityOfWork"
    ? currentvalue
    : metric === "delivery"
    ? currentvalue
    : metric === "responsibility"
    ? currentvalue
    : metric === "quantityOfWork"
    ? currentvalue
    : metric === "punctuality"
    ? currentvalue
    : !currentvalue;
};
