export const getMetric = (metric) => {
  return metric === "qualityOfWork" ||
    metric === "delivery" ||
    metric === "delivery" ||
    metric === "responsibility" ||
    metric === "quantityOfWork" ||
    metric === "punctuality"
    ? metric
    : !metric;
};
