import axios from "axios";

export const UserAPI = axios.create({
  baseURL: "/server/user",
});
