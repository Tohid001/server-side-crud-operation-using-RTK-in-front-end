import React, { useState, useRef, useEffect } from "react";
import { Row, IconContainer } from "./UserDetails.styled";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCloudDone } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import useInput from "../../Hooks/useForm.js";

function RowInfo({ initialState, value, title, children }) {
  const [isEdit, setEdit] = useState(false);
  const [formstates, setFormstates, onChangeHandler, resetHandler] =
    useInput(initialState);

  const options = {
    state: formstates[Object.keys(initialState)[0]],
    onChangeHandler,
    name: Object.keys(initialState)[0],
  };

  return (
    <Row>
      <div>{title}</div>
      <div className="mainRow">
        {!isEdit ? <p>{value}</p> : children(options)}
        <IconContainer isEdit={isEdit}>
          {!isEdit ? (
            <span
              onClick={() => {
                setEdit((prev) => !prev);
              }}
            >
              <AiFillEdit size="1.25rem" />
            </span>
          ) : (
            <>
              <span
                onClick={() => {
                  setEdit((prev) => !prev);
                  resetHandler();
                }}
              >
                <GiCancel size="1.25rem" />
              </span>
              <span>
                <IoIosCloudDone size="1.25rem" />
              </span>
            </>
          )}
        </IconContainer>
      </div>
    </Row>
  );
}

export default RowInfo;
