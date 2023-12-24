import axios from "axios";

const serverHost = process.env.REACT_APP_SERVER_HOST;

const getApiHeaders = (accessToken) => {
  return {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Allow-Origin": "*",
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

  registerURL: `http://localhost:8080/api/register`,
  appraisalURL: `http://localhost:8080/api/appraisal`,
  recommendationURL: `http://localhost:8080/api/recommendations`,
  registerURLServer: `${serverHost}/api/register`,
  appraiseURLServer: `${serverHost}/api/appraisal`,
  recommendationURLServer: `${serverHost}/api/recommendations`,
};

export default http;
