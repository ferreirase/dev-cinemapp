/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Modal } from './styles';

interface PropsModal {
  children: any;
  onClose: any | void;
  id: string;
}

const ModalComponent = ({ id = 'modal', children, onClose }: PropsModal) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) onClose();
  };

  return (
    <>
      <Modal onClick={handleOutsideClick} id={id}>
        <div className="container">
          <button className="close" onClick={onClose} />
          <div className="content">{children}</div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
