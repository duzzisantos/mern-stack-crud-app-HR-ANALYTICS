export const getKeys = (data, id) => {
  const found = data.filter((el) => el.ID === id);
  return Object.keys(found[0]).map(([key, value]) => {
    return {
      key,
      value,
    };
  });
};
