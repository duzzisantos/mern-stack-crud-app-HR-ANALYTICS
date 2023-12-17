import { useQuery } from "react-query";
import axios from "axios";

const getEmployeeAppraisal = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/appraisal");
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
