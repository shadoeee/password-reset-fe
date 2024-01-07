import axios from "axios";

// const url = "https://password-reset-5zo8.onrender.com/";
// const url = "http://localhost:4000/";
const url = "https://password-reset-92xb.onrender.com/";

let baseUrl = axios.create({
  baseURL: url,
});

export default baseUrl;
