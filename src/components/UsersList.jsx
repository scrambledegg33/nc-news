import { useContext, useEffect, useState } from "react";
import {UserContext} from '../contexts/User';
import { getUsers } from '../utils/api';

const UsersList = () => {

const [users, setUsers] = useState([]);


useEffect(() => {
    fetch(`https://news-app-backend123.herokuapp.com/api/users`).then((response) => {
        return response.json()
    })
    .then((data) => {
        
        setUsers(data.users)
    })
}, [])


    return (
      <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
        return (
            <li key={user.username}>
        <h2>Name: {user.name}</h2>
        <h2>User Name: {user.username}</h2>
        <img src={user.avatar_url} />
        </li>
        )
        })}
      </ul>
      </div>

    );
  };

export default UsersList;
