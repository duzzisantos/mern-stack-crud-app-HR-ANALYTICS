export const getKeys = (data, id) => {
  const keys = [];
  const values = [];
  const found = data.filter((el) => id === el.ID);
  return Object.keys(found[0]).map(([key, value]) => {
    keys.push(keys);
    values.push(keys);
  });
};
