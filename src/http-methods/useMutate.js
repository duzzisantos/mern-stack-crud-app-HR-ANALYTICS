const useMutate = (
  postObject,
  objectId,
  accessToken,
  mutationFunction,
  method,
  endPoint,
  getHandleSettled
) => {
  return mutationFunction(
    async (updateObject = postObject) => {
      try {
        const response = await method(`${endPoint}/${objectId}`, updateObject, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.status !== 200) {
          throw new Error(
            `Error Code: ${response.status}, Cause: ${response.statusText}`
          );
        } else {
          return response.data;
        }
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },
    {
      onSettled: (data, err) => {
        if (data) {
          return { success: true, data: getHandleSettled() };
        } else {
          return { success: false, error: err.message };
        }
      },
    }
  );
};

export default useMutate;
