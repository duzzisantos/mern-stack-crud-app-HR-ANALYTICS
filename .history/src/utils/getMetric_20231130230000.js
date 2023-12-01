export const getMetric = (metric) => {
  return metric === "qualityOfWork"
    ? metric
    : metric === "delivery"
    ? metric
    : metric === "responsibility"
    ? metric
    : metric === "quantityOfWork"
    ? metric
    : metric === "punctuality"
    ? metric
    : !metric;
};
