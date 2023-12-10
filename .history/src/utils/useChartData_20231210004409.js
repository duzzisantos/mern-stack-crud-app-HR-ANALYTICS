export function useChartData(
  labels,
  quantityOfWork,
  qualityOfWork,
  responsibility,
  punctuality,
  delivery
) {
  const data = {
    labels,
    datasets: [
      {
        label: "Quality of Work",
        data: qualityOfWork,
        borderColor: "#2ac501",
        backgroundColor: "#2ac501",
      },
      {
        label: "Quantity of work",
        data: quantityOfWork,
        borderColor: "#2ff354",
        backgroundColor: "#2ff345",
      },
      {
        label: "Punctuality",
        data: punctuality,
        borderColor: "#000aaa",
        backgroundColor: "#000aaa",
      },
      {
        label: "Responsibility",
        data: responsibility,
        borderColor: "#2f2445",
        backgroundColor: "#2f2445",
      },
      {
        label: "Delivery",
        data: delivery,
        borderColor: "#006fff",
        backgroundColor: "#006fff",
      },
    ],
  };

  return data;
}
