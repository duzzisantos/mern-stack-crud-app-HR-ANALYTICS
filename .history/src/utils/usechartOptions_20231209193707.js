export function useChartOptions(year) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Annual performance score`,
      },
    },
  };
  return options;
}
