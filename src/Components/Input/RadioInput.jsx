import React from "react";

function RadioInput({ label, name, value, onChangeHandler, state }) {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        checked={state.toLowerCase() === value}
        onChange={onChangeHandler}
        id={value}
      />
      <label for={value}>{label}</label>
      <br />
    </>
  );
}

export default RadioInput;
