import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onCloseModal} />;
};

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onCloseModal}>Ok!</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          content={props.content}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
