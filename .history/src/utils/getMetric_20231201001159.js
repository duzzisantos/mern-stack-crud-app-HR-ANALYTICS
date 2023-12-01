export const getKeys = (data, id) => {
  const output = [];
  for (const [key, value] of data) {
    if (data.ID === id) {
      output.push({
        key: key,
        value: value,
      });
    }
  }
};
