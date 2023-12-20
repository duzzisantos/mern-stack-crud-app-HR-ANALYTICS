function getFormCategory(category) {
  switch (category) {
    case "qualityOfWork":
      return "Quality of Work";
    case "quantityOfWork":
      return "Quantity of Work";

    default:
      return category;
  }
}

function getFormLevel(level) {
  const low = "low";
  const high = "high";
  const average = "average";
  if (typeof level === "string" && level !== "") {
    if (level.includes(high)) {
      const remainingPart = level.slice(high.length, level.length);
      return `High ${remainingPart}`;
    } else if (level.includes(average)) {
      const remainingPart = level.slice(average.length, level.length);
      return `Average ${remainingPart}`;
    } else if (level.includes(low)) {
      const remainingPart = level.slice(low.length, level.length);
      return `Low ${remainingPart}`;
    }
  }
}

export { getFormCategory, getFormLevel };
