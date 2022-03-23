import React, { useState, useRef, useEffect } from "react";
import { Row } from "./UserDetails.styled";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCloudDone } from "react-icons/io";

function RowInfo({ title, value, children }) {
  const [isEdit, setEdit] = useState(false);

  return (
    <Row>
      <div>{title}</div>
      <div>
        {!isEdit ? <p>{value}</p> : children}
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
