import { User } from "../interfaces";
import { api } from "../providers";

const getUser = () => api.get<User[]>("/user");

const createUser = (user: User) => api.post("/user", user);

export const RegisterService = {
  getUser,
  createUser,
};
