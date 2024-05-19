import { useQuery } from "react-query";
import http from "../components/http-config";

const getEmployeeData = async (accessToken) => {
  const { get, registerURL, registerURLServer, headers } = http;
  const isLocal = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";
  try {
    const response = await get(
      isLocal ? registerURL : isProduction && registerURLServer,
      headers(accessToken)
    );
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
  });
};

export default useGetEmployeeData;
