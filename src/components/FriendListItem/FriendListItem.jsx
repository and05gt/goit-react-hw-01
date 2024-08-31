import styled from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={styled.friendAvatar} src={avatar} alt={name} width="48" />
      <p className={styled.friendName}>{name}</p>
      {isOnline ? (
        <p className={styled.friendStatusGreen}>Online</p>
      ) : (
        <p className={styled.friendStatusRed}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
