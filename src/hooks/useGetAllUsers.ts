import { useEffect, useState } from "react";
import axios from "axios";
import { usersURL } from "../constants";
import User from "../types/user";

const useGetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(usersURL);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return { users, getAllUsers };
};

export default useGetAllUsers;
