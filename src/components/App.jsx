import Profile from 'components/Profile/Profile';
import user from 'data/user.json';

import Statistics from 'components/Statistics/Statistics';
import data from 'data/data.json';

import FriendList from './FriendList/FriendList';
import friends from 'data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export default function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
