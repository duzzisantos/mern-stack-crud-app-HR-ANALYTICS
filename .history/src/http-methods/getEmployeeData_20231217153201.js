import { useQuery } from "react-query";
import axios from "axios";

const getEmployeeData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/register");
    if (response.status !== 200) {
      throw new Error(`${response.status} cause: ${response.statusText}`);
    }
  } catch (err) {}
};
