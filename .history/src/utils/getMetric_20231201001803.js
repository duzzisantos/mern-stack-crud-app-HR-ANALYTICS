export const getKeys = (data, id) => {
  const keys = [];
  const values = [];
  const found = data.filter((el) => el.ID === id);
  Object.keys(found[0]).map(([key, value]) => {
    keys.push(keys);
    values.push(keys);
  });

  return keys;
};
