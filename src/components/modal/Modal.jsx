import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.node,
};

export const ModalContent = (props) => {
  const closeModal = () => {
    if (props.onClose) props.onClose();
  };

  return (
    <div className="modal-content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
