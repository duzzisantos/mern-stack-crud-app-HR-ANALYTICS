const getKeys = (data) => {
  const output = [];
  for (const [key, value] of data) {
    output.push({
      key: key,
      value: value,
    });
  }
};
