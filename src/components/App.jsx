import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'


import { Profile } from './Profile/Profile';
import {Statistics} from './Statistics/Statistics'
import {FriendList} from './FriendList/FriendList'


const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  justifyContent: 'center',
  alignItems: 'center',
};

export const App = () => {
  return (
    <div style={rootStyles}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      </div>
  );
};
