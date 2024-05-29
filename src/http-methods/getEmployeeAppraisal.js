import { useState, useEffect, useCallback } from "react";
import http from "../components/http-config";

const useGetEmployeeAppraisal = (accessToken) => {
  const [appraisal, getAppraisal] = useState([]);
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
        return response.data;
      }
    } catch (err) {
      console.warn(err.message);
    }
  }, [accessToken]);

  useEffect(() => {
    getEmployeeAppraisal();
  }, [getEmployeeAppraisal]);

  return { appraisal, refetchAppraisal: getAppraisal };
};

export default useGetEmployeeAppraisal;
