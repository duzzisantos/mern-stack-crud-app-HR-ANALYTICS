const handleModifyContent = (
  updateObject,
  objectId,
  accessToken,
  method,
  endPoint
) => {
  method(`${endPoint}/${objectId}`, updateObject, {
    headers: {
      "Content-Type": "application/json",
      Accpet: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      console.warn(err.message);
    });
};

export default handleModifyContent;
