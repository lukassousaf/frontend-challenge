import axios from "axios";

export const api = axios.create({
  baseURL: "https://62a9fee43b314385543ffe35.mockapi.io/api/user/challenge",
});
