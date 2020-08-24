import axios from "axios";

export default axios.create({
  baseURL: "http://51.210.149.38:3000/api",
  headers: {
    "Content-type": "application/json",
  },
});
