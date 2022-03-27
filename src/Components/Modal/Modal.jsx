import React from "react";

import { ModalContainer, ModalWrapper } from "./Modal.styled.js";

function Modal(props) {
  const { loading, showModal, error, name, id } = props;
  return (
    <ModalWrapper>
      <ModalContainer {...props}>
        {loading ? (
          <div>
            <span
              style={{ fontWeight: "bold" }}
            >{`Deleting user ${name}...`}</span>
            <br />
            <br />
            <span>{`UserId[${id}]`}</span>
          </div>
        ) : !error ? (
          "user deleted successfully!"
        ) : (
          error
        )}
      </ModalContainer>
    </ModalWrapper>
  );
}

export default Modal;
