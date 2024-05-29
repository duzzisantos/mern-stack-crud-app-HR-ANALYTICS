import { useState, useEffect, useCallback } from "react";
import http from "../components/http-config";

const useGetEmployeeData = (accessToken) => {
  const [employees, setEmployees] = useState([]);
  const getEmployeeData = useCallback(async () => {
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
        setEmployees(response.data);
      }
    } catch (err) {
      console.warn(err.message);
    }
  }, [accessToken]);

  useEffect(() => {
    getEmployeeData();
  }, [getEmployeeData]);

  return { employees, refetchEmployees: getEmployeeData };
};

export default useGetEmployeeData;
