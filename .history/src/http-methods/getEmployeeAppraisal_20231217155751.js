import { useQuery } from "react-query";
import http from "../components/http-config";

const getEmployeeAppraisal = async () => {
  const { appraisalURL, get, headers } = http;
  try {
    const response = await get(appraisalURL, headers);
    if (response.status !== 200) {
      throw new Error(`${response.status} cause: ${response.statusText}`);
    } else {
      return response.data;
    }
  } catch (err) {
    console.warn(err.message);
  }
};

const useGetEmployeeAppraisal = () => {
  return useQuery(["EmployeeAppraisal"], () => getEmployeeAppraisal(), {
    keepPreviousData: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    staleTime: 30000,
  });
};

export default useGetEmployeeAppraisal;
