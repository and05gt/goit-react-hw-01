import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={style.friendListItem}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
