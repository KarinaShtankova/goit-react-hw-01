import css from './App.module.css';
import { Profile } from './Profile/Profile';
import userData from '../userData.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';

// console.log(friends);

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </div>
  );
}
