import React from "react";

import { ModalContainer } from "./Modal.styled.js";

function Modal(props) {
  const { loading, showModal, error } = props;
  return <ModalContainer {...props}></ModalContainer>;
}

export default Modal;
