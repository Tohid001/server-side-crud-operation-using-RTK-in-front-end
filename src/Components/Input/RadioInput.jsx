import React from "react";

function RadioInput({ label, name, value, onChangeHandler, checked }) {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChangeHandler}
        id={name}
      />
      <label for={name}>{label}</label>
    </>
  );
}

export default RadioInput;
