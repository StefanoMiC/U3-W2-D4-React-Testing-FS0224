import { useEffect, useState } from "react";
import { FormControl, ListGroup } from "react-bootstrap";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getUsers = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await resp.json();

    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <FormControl
        type="text"
        className="my-3"
        placeholder="Cerca utente per nome"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <ListGroup as="ul">
        {users
          .filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map(user => (
            <ListGroup.Item as="li" key={`user-${user.id}`} title={user.username}>
              {user.name} — {user.email}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default FetchComponent;
