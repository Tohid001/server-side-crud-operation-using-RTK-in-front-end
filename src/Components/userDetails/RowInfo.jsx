import React, { useState, useRef, useEffect } from "react";
import { Row, IconContainer } from "./UserDetails.styled";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCloudDone } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { TextInput, RadioInput, SelectInput } from "../index.js";
import useInput from "../../Hooks/useInput.js";

const InputDetector = (type) => {
  switch (type) {
    case "text":
      return <TextInput />;
    case "radio":
      return <RadioInput />;
    case "select":
      return <SelectInput />;
  }
};

function RowInfo({
  currentInputState,
  type,
  title,
  value,
  children,
  resetHandler,
}) {
  const [isEdit, setEdit] = useState(false);

  return (
    <Row>
      <div>{title}</div>
      <div className="mainRow">
        {!isEdit ? <p>{value}</p> : children}
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
