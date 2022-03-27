import React from "react";

import { ModalContainer, ModalWrapper } from "./Modal.styled.js";

function Modal(props) {
  const { loading, showModal, error, name, id } = props;
  console.log("modal rendered");
  return (
    <ModalWrapper>
      <ModalContainer {...props}>
        {loading ? (
          id ? (
            <div>
              <span
                style={{ fontWeight: "bold" }}
              >{`Deleting user ${name}...`}</span>
              <br />
              <br />
              <span>{`UserId[${id}]`}</span>
            </div>
          ) : (
            "Loading..."
          )
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
