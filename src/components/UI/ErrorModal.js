import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';


const Backdrop = props => {
    return <div className="error-modal__backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = props => {
    return (
        <Card className="error-modal">
          <header className="error-modal__header">
            <h2>{props.title}</h2>
          </header>
          <div className="error-modal__content">
            <p>{props.message}</p>
          </div>
          <footer className="error-modal__footer">
            <Button className="error-modal__btn" onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      );
};

const ErrorModal = props => {
    return (
        <React.Fragment>
          {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById('backdrop-root')
          )}
          {ReactDOM.createPortal(
            <ModalOverlay
              title={props.title}
              message={props.message}
              onConfirm={props.onConfirm}
            />,
            document.getElementById('overlay-root')
          )}
        </React.Fragment>
      );
};

export default ErrorModal;
