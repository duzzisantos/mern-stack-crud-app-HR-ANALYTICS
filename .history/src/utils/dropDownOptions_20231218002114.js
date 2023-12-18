const departments = [
  "IT",
  "Admin",
  "Procurement",
  "Finance",
  "Operations",
  "Customer service",
];

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function generateYears() {
  const startYear = 2023;
  const nextFifteenYears = 2038;
  const years = [];

  for (let year = startYear; year <= nextFifteenYears; year++) {
    years.push(year);
  }

  return years;
}

export { departments, monthsArray, generateYears };
