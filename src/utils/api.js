import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/dakshkhetan/meetingstats-assignment"
});

export default api;
