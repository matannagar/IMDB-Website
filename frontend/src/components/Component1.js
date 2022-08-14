import React, { useState, useEffect } from "react";

export default function Component1(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Component1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, doloremque, quia quidem quisquam dolorum, quibusdam
        voluptatibus quam doloremque quisquam dolorum quisquam dolorum quisquam
      </p>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
