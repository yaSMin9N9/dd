import axios from "axios";

const baseURL="http://localhost:8000/"
const axiosPrivateInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosPrivateInstance;
