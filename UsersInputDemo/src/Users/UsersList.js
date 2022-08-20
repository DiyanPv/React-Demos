import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";
import IndividualUser from "./IndividualUser";
const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul class="ul-users">
        {users.map((user) => (
          <IndividualUser name={user.name} age={user.age} key={Math.random() + `000` + Math.random()}/>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
