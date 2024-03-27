import { useNavigate } from "react-router-dom";

import userIcon from "../img/user.svg";

import styles from "./UserCard.module.css";

const UserCard = ({ userInfo }) => {
  const naviagate = useNavigate();

  return (
    <div
      onClick={() => naviagate(`/user/${userInfo.id}`)}
      className={styles.main}
    >
      <div className={styles.imgDiv}>
        <img className={styles.img} src={userIcon} alt="" />
      </div>
      <div>
        <h2>{userInfo?.name}</h2>
        <p>{userInfo?.username}</p>
        <p>{userInfo?.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
