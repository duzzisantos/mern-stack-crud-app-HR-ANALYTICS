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
  const [low, high, average] = ["low", "high", "average"];

  if (typeof level === "string" && level !== "") {
    if (level.includes(high)) {
      return `High ${level.slice(high.length, level.length)}`;
    } else if (level.includes(average)) {
      return `Average ${level.slice(average.length, level.length)}`;
    } else if (level.includes(low)) {
      return `Low ${level.slice(low.length, level.length)}`;
    }
  }
}

export { getFormCategory, getFormLevel };
