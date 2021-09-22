import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [addUserName, setAddUserName] = useState('');
  const [addAge, setAddAge] = useState('');

  const addUserHandler = e => {
    e.preventDefault();
    console.log(addUserName, addAge);
  };

  const addUserNameHandler = e => {
    setAddUserName(e.target.value);
  };

  const addAgeHandler = e => {
    setAddAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={addUserNameHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={addAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
