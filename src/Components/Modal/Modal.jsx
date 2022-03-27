import React from "react";

import { ModalContainer } from "./Modal.styled.js";

function Modal(props) {
  const { loading, showModal, error } = props;
  return (
    <ModalContainer {...props}>
      {loading ? "loading..." : !error ? "user deleted successfully!" : error}
    </ModalContainer>
  );
}

export default Modal;
