import React, { useState, useEffect, useContext } from "react";
import { Row, IconContainer, SubRow } from "./UserDetails.styled";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCloudDone } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import useInput from "../../Hooks/useForm.js";
import axios from "axios";
import { api } from "../../api.js";
import { UserContext } from "../../Contexts/usersContext";

function RowInfo({ id, initialState, value, title, children }) {
  const [, dispatch] = useContext(UserContext);
  const [isEdit, setEdit] = useState(false);
  const [isUpdate, setIsUpdate] = useState(true);
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
      <SubRow isUpdate={isUpdate}>
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
              <span
                onClick={() => {
                  api.patch({ dispatch, id, body: formstates });
                }}
              >
                <IoIosCloudDone size="1.25rem" />
              </span>
            </>
          )}
        </IconContainer>
      </SubRow>
    </Row>
  );
}

export default RowInfo;
