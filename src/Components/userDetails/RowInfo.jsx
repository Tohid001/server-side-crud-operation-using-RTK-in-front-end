import React, { useState, useRef, useEffect } from "react";
import { Row } from "./UserDetails.styled";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCloudDone } from "react-icons/io";

function RowInfo({ oKey, currentUser }) {
  const [isEdit, setEdit] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    isEdit && inputRef.current.focus();
  }, [isEdit]);

  return (
    <Row test={oKey}>
      <div>{oKey}</div>
      <div>
        {!isEdit ? (
          <p>{currentUser[oKey]}</p>
        ) : (
          <input
            ref={inputRef}
            type={oKey === "gender" ? "radio" : " text"}
            name={oKey}
            value={currentUser[oKey]}
            onChange={() => {}}
          />
        )}
        <span
          onClick={() => {
            setEdit((prev) => !prev);
          }}
        >
          {!isEdit ? (
            <AiFillEdit size="1.25rem" />
          ) : (
            <IoIosCloudDone size="1.25rem" color="green" />
          )}
        </span>
      </div>
    </Row>
  );
}

export default RowInfo;
