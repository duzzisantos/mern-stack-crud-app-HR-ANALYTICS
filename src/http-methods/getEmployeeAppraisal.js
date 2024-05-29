import { useState, useEffect, useCallback } from "react";
import http from "../components/http-config";

const useGetEmployeeAppraisal = (accessToken) => {
  const [appraisal, setEmployeeAppraisal] = useState([]);
  const getEmployeeAppraisal = useCallback(async () => {
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
        setEmployeeAppraisal(response.data);
      }
    } catch (err) {
      console.warn(err.message);
    }
  }, [accessToken]);

  useEffect(() => {
    getEmployeeAppraisal();
  }, [getEmployeeAppraisal]);

  return { appraisal, refetchAppraisal: getEmployeeAppraisal };
};

export default useGetEmployeeAppraisal;
