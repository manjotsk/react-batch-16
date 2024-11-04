import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((users) => {
      setLoading(false);
      setUserData(users.data);
    });
  }, []);

  return [userData, loading];
};

export default useUsers;
