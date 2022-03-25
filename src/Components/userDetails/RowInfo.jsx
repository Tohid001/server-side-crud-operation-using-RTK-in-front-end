import React, { useState, useEffect } from "react";
import { Row, IconContainer, SubRow, ShowModal } from "./UserDetails.styled";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCloudDone } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import useForm from "../../Hooks/useForm.js";

import { useDispatch, useSelector } from "react-redux";
import { patchUserThunk } from "../../features/users/usersSlice.js";

function RowInfo({ id, initialState, value, title, children }) {
  // const { loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [activity, setActivity] = useState({
    isEdit: false,
    showModal: false,
    isError: false,
    isUpdate: false,
  });

  const { isEdit, showModal, isError, isUpdate } = activity;

  const [formstates, setFormstates, onChangeHandler, resetHandler] =
    useForm(initialState);

  const options = {
    state: formstates[Object.keys(initialState)[0]],
    onChangeHandler,
    name: Object.keys(initialState)[0],
  };

  console.log(`${Object.keys(initialState)[0]} field rendered`);

  const onDispatch = () => {
    setActivity((prev) => {
      return { ...prev, isUpdate: !prev.isUpdate };
    });
    dispatch(patchUserThunk({ id, body: formstates }))
      .unwrap()
      .then((originalPromiseResult) => {
        setActivity((prev) => {
          return {
            ...prev,
            showModal: !prev.showModal,
            isUpdate: !prev.isUpdate,
            isEdit: !prev.isEdit,
          };
        });

        setTimeout(() => {
          setActivity((prev) => {
            return { ...prev, showModal: !prev.showModal };
          });
        }, 1000);
      })
      .catch((rejectedValueOrSerializedError) => {
        setActivity((prev) => {
          return {
            ...prev,
            showModal: !prev.showModal,
            isUpdate: !prev.isUpdate,
            isError: !prev.isError,
            isEdit: !prev.isEdit,
          };
        });
        resetHandler();
        setTimeout(() => {
          setActivity((prev) => {
            return {
              ...prev,
              showModal: !prev.showModal,
              isError: !prev.isError,
            };
          });
        }, 1000);
      });
  };

  return (
    <Row>
      <div className="title">{title}</div>
      <SubRow isUpdate={isUpdate}>
        {showModal && (
          <ShowModal isError={isError}>
            {!isError ? "Changes Saved!" : "Failed"}
          </ShowModal>
        )}
        {!isEdit ? <p>{value}</p> : children(options)}
        <IconContainer
          isEdit={isEdit}
          isAbled={
            !(
              Object.values(initialState)[0].toLowerCase() ===
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
                    Object.values(initialState)[0].toLowerCase() ===
                    Object.values(formstates)[0].toLowerCase()
                  }
                  onClick={onDispatch}
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
