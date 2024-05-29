import { useState, useEffect, useCallback } from "react";
import http from "../components/http-config";

const useRecommendations = (accessToken) => {
  const [recommendations, setRecommenendations] = useState([]);

  const getRecommendations = useCallback(async () => {
    const { get, recommendationURL, recommendationURLServer, headers } = http;

    const isLocal = process.env.NODE_ENV === "development";
    const isProduction = process.env.NODE_ENV === "production";
    try {
      const response = await get(
        isLocal ? recommendationURL : isProduction && recommendationURLServer,
        headers(accessToken)
      );

      if (response.status !== 200) {
        throw new Error(
          `Error: ${response.status}, Cause: ${response.statusText}`
        );
      } else {
        setRecommenendations(response.data);
      }
    } catch (err) {
      console.warn(err.message);
    }
  }, [accessToken]);

  useEffect(() => {
    getRecommendations();
  }, [getRecommendations]);

  return { recommendations, refetch: getRecommendations };
};

export default useRecommendations;
