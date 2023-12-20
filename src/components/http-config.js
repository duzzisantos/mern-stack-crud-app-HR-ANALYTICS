import axios from "axios";

const apiPort = process.env.REACT_APP_API_PORT;
const http = {
  post: axios.post,
  get: axios.get,
  delete: axios.delete,
  update: axios.put,

  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: ``,
  },
  registerURL: `http://localhost:${apiPort}/api/register`,
  appraisalURL: `http://localhost:${apiPort}/api/appraisal`,
};

export default http;
