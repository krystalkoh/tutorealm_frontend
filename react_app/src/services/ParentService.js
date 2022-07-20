import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:5001/api/";

const getPublicContent = () => {
  return axios.get(API_URL);
};
const getParentAccess = () => {
  return axios.get(API_URL + "parent", { headers: authHeader() });
};

const parentService = {
  getPublicContent,
  getParentAccess,
};
export default parentService;
