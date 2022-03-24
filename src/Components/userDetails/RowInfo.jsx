import React, { useState, useEffect, useContext } from "react";
import { Row, IconContainer, SubRow, ShowSuccess } from "./UserDetails.styled";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCloudDone } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import useForm from "../../Hooks/useForm.js";
import { api } from "../../api.js";
import { UserContext } from "../../Contexts/usersContext";

function RowInfo({ dispatch, id, initialState, value, title, children }) {
  console.log(` ${title} rendered`);
  const [activity, setActivity] = useState({
    isEdit: false,
    isUpdate: false,
    showSuccess: false,
  });

  const { isEdit, isUpdate, showSuccess } = activity;

  // const [, dispatch] = useContext(UserContext);
  const [formstates, setFormstates, onChangeHandler, resetHandler] =
    useForm(initialState);

  const options = {
    state: formstates[Object.keys(initialState)[0]],
    onChangeHandler,
    name: Object.keys(initialState)[0],
  };

  return (
    <Row>
      <div className="title">{title}</div>
      <SubRow isUpdate={isUpdate}>
        {showSuccess && <ShowSuccess>Changes Saved!</ShowSuccess>}
        {!isEdit ? <p>{value}</p> : children(options)}
        <IconContainer
          isEdit={isEdit}
          isAbled={
            !(
              Object.values(initialState)[0].toLowerCase() ==
              Object.values(formstates)[0].toLowerCase()
            )
          }
        >
          {!isEdit ? (
            <button
              onClick={() => {
                setActivity((prev) => {
                  return { ...prev, isEdit: !prev.isEdit };
                });
              }}
            >
              <AiFillEdit size="1.25rem" />
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setActivity((prev) => {
                    return { ...prev, isEdit: !prev.isEdit };
                  });
                  resetHandler();
                }}
              >
                <GiCancel size="1.25rem" />
              </button>
              <>
                <button
                  disabled={
                    Object.values(initialState)[0].toLowerCase() ==
                    Object.values(formstates)[0].toLowerCase()
                  }
                  onClick={() => {
                    setActivity((prev) => {
                      return { ...prev, isUpdate: !prev.isUpdate };
                    });
                    api.patch({
                      dispatch,
                      id,
                      body: formstates,
                      setActivity,
                    });
                  }}
                >
                  <IoIosCloudDone size="1.25rem" />
                </button>
              </>
            </>
          )}
        </IconContainer>
      </SubRow>
    </Row>
  );
}

export default RowInfo;
