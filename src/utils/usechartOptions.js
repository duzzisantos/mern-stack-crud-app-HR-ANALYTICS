export function useChartOptions(type) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Mean performance score - ${type}`,
      },
    },
  };
  return options;
}
