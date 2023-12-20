import { useQuery } from "react-query";
import http from "../components/http-config";

const getEmployeeAppraisal = async (accessToken) => {
  const { appraisalURL, get } = http;

  try {
    const response = await get(appraisalURL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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
