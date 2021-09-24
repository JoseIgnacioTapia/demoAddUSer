import { useState, Fragment } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [addUserName, setAddUserName] = useState('');
  const [addAge, setAddAge] = useState('');
  const [error, setError] = useState(null);

  const addUserHandler = e => {
    e.preventDefault();

    if (addUserName.trim().length === 0 || addAge.trim().length === 0) {
      setError({
        title: "User name invalid. I can't be empty",
        content: 'Try again!',
      });
      return;
    }
    if (+addAge < 1) {
      setError({ title: 'Age is invalid!', content: 'Try a positive number!' });
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

  const closeModalHandler = () => {
    setError(false);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onCloseModal={closeModalHandler}
        />
      )}
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
    </Fragment>
  );
};

export default AddUser;
