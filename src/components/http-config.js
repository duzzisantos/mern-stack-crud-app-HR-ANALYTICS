import axios from "axios";

const serverHost = process.env.REACT_APP_SERVER_HOST;

const getApiHeaders = (accessToken) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
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
