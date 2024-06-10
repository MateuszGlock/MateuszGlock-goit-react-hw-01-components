import Profile from "./Profile";
import user from "../data/user.json";
import Statistics from "./Statistics";
import data from "../data/data.json";
import FriendList from "./FriendList";
import friends from "../data/friends.json";
import Transactions from "./Transactions";
import transactions from "../data/transactions.json";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>
        React Homework 1
      </h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
}

export default App;
