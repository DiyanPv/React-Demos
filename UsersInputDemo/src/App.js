import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (username, age) => {
    setUsersList((prevUserList) => [...prevUserList, { name: username, age }]);
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
