import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsersAction } from "../redux/usersActions";
import UserCard from "../component/UserCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchAllUsersAction());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px",
        padding: "0 30px",
      }}
    >
      {users.map((item) => (
        <UserCard key={item.id} userInfo={item} />
      ))}
    </div>
  );
};

export default HomePage;
