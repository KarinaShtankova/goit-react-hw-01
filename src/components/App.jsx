
import { Profile } from './Profile/Profile';
import userData from '../userData.json';

console.log(userData);

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}
