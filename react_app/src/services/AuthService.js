import axios from "axios";
const API_URL_PARENT = "http://localhost:5001/api/parent/login";
const API_URL_TUTOR = "http://localhost:5001/api/tutor/login";

const register = (email, password) => {
  return axios.post(API_URL_PARENT + "register", {
    email,
    password,
  });
};

const loginParent = (email, password) => {
  return axios
    .post(API_URL_PARENT, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("userRole", "Parent");
      }
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL_TUTOR, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("userRole", "Tutor");
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  loginParent,
  login,
  logout,
  getCurrentUser,
};
export default authService;
