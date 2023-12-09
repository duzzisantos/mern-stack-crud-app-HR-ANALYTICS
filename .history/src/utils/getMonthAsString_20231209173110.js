export function getMonthAsString(date) {
  const currentDate = new Date(date);
  return currentDate.toLocaleString("default", { month: "long" });
}
