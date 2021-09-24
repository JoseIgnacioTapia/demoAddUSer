import { useState, Fragment, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const addUserHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "User name invalid. I can't be empty",
        content: 'Try again!',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({ title: 'Age is invalid!', content: 'Try a positive number!' });
      return;
    }

    props.onAddUsers(enteredName, enteredUserAge);
    // It's not normal "manipulate" DOM without React using ref
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
          <input id="name" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
