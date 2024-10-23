import axios from "axios";
const apiRequest = axios.create({
  // baseURL: "http://localhost:4001", //for dev

  baseURL: "https://bookstore-backend-5ail.onrender.com", //for deployment
  // withCredentials: true,
});
export default apiRequest;
