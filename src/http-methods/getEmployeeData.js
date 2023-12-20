import { useQuery } from "react-query";
import http from "../components/http-config";

const getEmployeeData = async (accessToken) => {
  const { get, registerURL } = http;
  try {
    const response = await get(registerURL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status !== 200) {
      throw new Error(`${response.status} cause: ${response.statusText}`);
    } else {
      return response.data;
    }
  } catch (err) {
    console.warn(err.message);
  }
};

const useGetEmployeeData = (accessToken) => {
  return useQuery(["EmployeeData"], () => getEmployeeData(accessToken), {
    keepPreviousData: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    staleTime: 30000,
  });
};

export default useGetEmployeeData;
