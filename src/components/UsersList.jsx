import { useContext, useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";

const UsersList = () => {

const [users, setUsers] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
    fetch(`https://news-app-backend123.herokuapp.com/api/users`).then((response) => {
        return response.json()
    })
    .then((data) => {
        
        setUsers(data.users)
    })
    .catch((err) => {
      setError({ err });
    });
}, [])

if (error) {
  return <ErrorComponent />;
}


    return (
      <div>
      <h1>User List</h1>
      <ul id="otis">
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
