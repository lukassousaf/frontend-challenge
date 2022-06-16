import { useCallback, useState } from "react";
import { User } from "../interfaces";
import { RegisterService } from "../services";

export const useRegister = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getUser = useCallback(async () => {
    const { status, data } = await RegisterService.getUser();
    if (status != 200) throw new Error();
    setUsers(data);
  }, []);

  const createUser = useCallback(async (user: User) => {
    const { status, data } = await RegisterService.createUser(user);
    if (status != 201) throw new Error();
  }, []);

  return {
    users,
    getUser,
    createUser,
  };
};
