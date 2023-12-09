export function useChartOptions() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Annual mean performance score`,
      },
    },
  };
  return options;
}
