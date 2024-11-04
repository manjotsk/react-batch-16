import UserDetailCard from "../components/UserDetailCard";
import Loading from "./Loading";
import useUsers from "../hooks/useUsers";

const Users = () => {
  const [userData, loading] = useUsers();
  if (loading) return <Loading />;
  return (
    <div>
      {userData?.map((user) => {
        return <UserDetailCard user={user} />;
      })}
    </div>
  );
};

export default Users;
