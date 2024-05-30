import axios from "axios";

const serverHost = process.env.REACT_APP_SERVER;
const localhost = process.env.REACT_APP_LOCAL;

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

  registerURL: `${localhost}/api/register`,
  appraisalURL: `${localhost}/api/appraisal`,
  recommendationURL: `${localhost}/api/recommendations`,
  registerURLServer: `${serverHost}/api/register`,
  appraiseURLServer: `${serverHost}/api/appraisal`,
  recommendationURLServer: `${serverHost}/api/recommendations`,
};

export default http;
