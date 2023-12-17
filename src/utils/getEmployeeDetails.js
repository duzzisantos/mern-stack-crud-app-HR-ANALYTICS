export const getEmployeeDetails = (id, filteredData, employeeData) => {
  const result = [];
  for (const item of filteredData) {
    for (const file of employeeData) {
      if (file.ID === id && item.ID === id) {
        result.push(file);
      }
    }
  }
  return result;
};
