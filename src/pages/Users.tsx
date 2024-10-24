import React, { useEffect, useState } from "react";
import UserDetailCard from "../components/UserDetailCard";
import axios from "axios";

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((users) => {
      setUserData(users.data);
    });
  }, []);

  console.log({
    userData,
  });

  return (
    <div>
      {userData?.map((user) => {
        return <UserDetailCard user={user} />;
      })}
    </div>
  );
};

export default Users;
