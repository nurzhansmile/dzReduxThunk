import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserByIdAction } from "../redux/usersActions";
import userIcon from "../img/user.svg";

import styles from "../styles/UserPage.module.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserByIdAction(id));
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className={styles.main}>
      <div className={styles.nameWrap}>
        <div>
          <div className={styles.imgDiv}>
            <img src={userIcon} alt="" />
          </div>
          <h2>{user?.name}</h2>
          <h3>{user?.username}</h3>
        </div>
      </div>
      <div className={styles.descDiv}>
        <div className={styles.title}>
            <h2>User Info:</h2>
        </div>
        <h3>Email: </h3>
        <i>{user?.email}</i>
        <h3>Address: </h3>
        <i>
          {user?.address?.street} {user?.address?.suite} {user?.address?.city}
        </i>
        <h3>Phone: </h3>
        <i>{user?.phone}</i>
        <h3>Website: </h3>
        <i>{user?.website}</i>
        <h3>Company:</h3>
        <i>{user?.company?.name}</i>
      </div>
    </div>
  );
};

export default UserPage;
