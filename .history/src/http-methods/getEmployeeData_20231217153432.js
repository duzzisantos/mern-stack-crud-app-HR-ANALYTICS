import { useQuery } from "react-query";
import axios from "axios";

const getEmployeeData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/register");
    if (response.status !== 200) {
      throw new Error(`${response.status} cause: ${response.statusText}`);
    } else {
      return response.data;
    }
  } catch (err) {
    console.warn(err.message);
  }
};

const useGetEmployeeData = () => {
  return useQuery(["EmployeeData"], () => getEmployeeData(), {
    keepPreviousData: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
  });
};
