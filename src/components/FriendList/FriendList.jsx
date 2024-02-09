import css from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClass = clsx(css.status, isOnline ? css.online : css.offline);
  return (
    <div className={css.wrapper}>
      <img className={css.pic} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? <>Online</> : <>Offline</>}</p>
    </div>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
