import axios from "axios";

const apiPort = process.env.REACT_APP_API_PORT;
const serverHost = process.env.REACT_APP_SERVER_HOST;

const getApiHeaders = (accessToken) => {
  return {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Allow-Origin":
        serverHost ?? `https://localhost:${apiPort}`,
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    },
  };
};
const http = {
  post: axios.post,
  get: axios.get,
  delete: axios.delete,
  update: axios.put,
  headers: (accessToken) => getApiHeaders(accessToken),

  registerURL: `https://localhost:${apiPort}/api/register`,
  appraisalURL: `https://localhost:${apiPort}/api/appraisal`,
  recommendationURL: `https://localhost:${apiPort}/api/recommendations`,
  registerURLServer: `${serverHost}/api/register`,
  appraiseURLServer: `${serverHost}/api/appraisal`,
  recommendationURLServer: `${serverHost}/api/recommendations`,
};

export default http;
