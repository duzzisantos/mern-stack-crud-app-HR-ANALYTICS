import { useQuery } from "react-query";
import http from "../components/http-config";

const getEmployeeAppraisal = async (accessToken) => {
  const { appraisalURL, get, appraiseURLServer, headers } = http;
  const isLocal = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";
  try {
    const response = await get(
      isLocal ? appraisalURL : isProduction && appraiseURLServer,
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

const useGetEmployeeAppraisal = (accessToken) => {
  return useQuery(
    ["EmployeeAppraisal"],
    () => getEmployeeAppraisal(accessToken),
    {
      keepPreviousData: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      staleTime: 30000,
    }
  );
};

export default useGetEmployeeAppraisal;
