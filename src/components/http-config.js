import axios from "axios";

const http = {
  post: axios.post,
  get: axios.get,
  delete: axios.delete,
  update: axios.put,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  registerURL: "http://localhost:8080/api/register",
  appraisalURL: "http://localhost:8080/api/appraisal",
};

export default http;
