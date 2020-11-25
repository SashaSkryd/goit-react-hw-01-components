import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import statisticsArr from '../stats.json';
import FriendList from '../FriendList/FriendList';
import friendsArr from '../friends.json';
import TransactionHistory from '../Transaction/Transaction';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name="Jacques Gluke"
        tag="jgluke"
        location="Ocho Rios, Jamaica"
        avatar= "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"
        stats={{followers: 5603, 
          views: 4827, 
          likes: 1308}}
          />
      
      <Statistics stats={statisticsArr} title={'Upload stats'} />  
  
          <FriendList friends={friendsArr} />

      <TransactionHistory items={transactions} />
      
    </>
  )
}