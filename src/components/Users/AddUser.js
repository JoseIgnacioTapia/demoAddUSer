import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [addUserName, setAddUserName] = useState('');
  const [addAge, setAddAge] = useState('');

  const addUserHandler = e => {
    e.preventDefault();

    if (addUserName.trim().length === 0 || addAge.trim().length === 0) {
      return;
    }
    if (+addAge < 1) {
      return;
    }

    props.onAddUsers(addUserName, addAge);
    setAddUserName('');
    setAddAge('');
  };

  const addUserNameHandler = e => {
    setAddUserName(e.target.value);
  };

  const addAgeHandler = e => {
    setAddAge(e.target.value);
  };

  return (
    <div>
      <ErrorModal title="An Error Ocurred!" content="Something went wrong!" />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={addUserName}
            onChange={addUserNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={addAge}
            onChange={addAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
