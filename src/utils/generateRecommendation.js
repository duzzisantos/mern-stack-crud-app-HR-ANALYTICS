function getDelivery(recommendations, category, appraisalScore) {
  const suggestions = [];
  for (const group of recommendations) {
    const deliveryGroup = group.delivery;
    if (deliveryGroup && category.includes("delivery")) {
      if (appraisalScore < 4) {
        suggestions.push(deliveryGroup.averageDelivery);
      } else if (appraisalScore < 3) {
        suggestions.push(deliveryGroup.lowDeliveryGroup);
      } else {
        suggestions.push(deliveryGroup.highDelivery);
      }
    }
  }
  return suggestions;
}

function getResponsibility(recommendations, category, appraisalScore) {
  const suggestions = [];
  for (const group of recommendations) {
    const responsibilityGroup = group.responsibility;
    if (responsibilityGroup && category.includes("responsibility")) {
      if (appraisalScore < 4) {
        suggestions.push(responsibilityGroup.averageResponsibility);
      } else if (appraisalScore < 3) {
        suggestions.push(responsibilityGroup.lowResponsibilty);
      } else {
        suggestions.push(responsibilityGroup.highResponsibility);
      }
    }
  }
  return suggestions;
}

function getPunctuality(recommendations, category, appraisalScore) {
  const suggestions = [];
  for (const group of recommendations) {
    const punctualityGroup = group.punctuality;
    if (punctualityGroup && category.includes("punctuality")) {
      if (appraisalScore < 4) {
        suggestions.push(punctualityGroup.averagePunctuality);
      } else if (appraisalScore < 3) {
        suggestions.push(punctualityGroup.lowPunctuality);
      } else {
        suggestions.push(punctualityGroup.highPunctuality);
      }
    }
  }
  return suggestions;
}

function getQualityOfWork(recommendations, category, appraisalScore) {
  const suggestions = [];
  for (const group of recommendations) {
    const qualityGroup = group.qualityOfWork;
    if (qualityGroup && category.includes("qualityOfWork")) {
      if (appraisalScore < 4) {
        suggestions.push(qualityGroup.averageQuality);
      } else if (appraisalScore < 3) {
        suggestions.push(qualityGroup.lowQuality);
      } else {
        suggestions.push(qualityGroup.highQuality);
      }
    }
  }
  return suggestions;
}

function getQuantityOfWork(recommendations, category, appraisalScore) {
  const suggestions = [];
  for (const group of recommendations) {
    const quantityGroup = group.quantityOfWork;
    if (quantityGroup && category.includes("quantityOfWork")) {
      if (appraisalScore < 4) {
        suggestions.push(quantityGroup.averageQuantity);
      } else if (appraisalScore < 3) {
        suggestions.push(quantityGroup.lowQuantity);
      } else {
        suggestions.push(quantityGroup.highQuantity);
      }
    }
  }
  return suggestions;
}

export {
  getDelivery,
  getResponsibility,
  getPunctuality,
  getQualityOfWork,
  getQuantityOfWork,
};
