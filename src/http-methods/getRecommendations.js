import { useQuery } from "react-query";
import http from "../components/http-config";

const getRecommendations = async (accessToken) => {
  const { get, recommendationURL } = http;
  try {
    const response = await get(recommendationURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status !== 200) {
      throw new Error(
        `Error: ${response.status}, Cause: ${response.statusText}`
      );
    } else {
      return response.data;
    }
  } catch (err) {
    console.warn(err.message);
  }
};

const useRecommendations = (accessToken) => {
  return useQuery(
    ["GetRecommendations"],
    () => getRecommendations(accessToken),
    {
      keepPreviousData: false,
      retry: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
    }
  );
};

export default useRecommendations;
