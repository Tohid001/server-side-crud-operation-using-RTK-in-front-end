import React, { useRef, useEffect } from "react";

function TextInput({
  state,
  name,
  onChangeHandler,
  isForm,
  placeholder,
  label,
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    !label && inputRef.current.focus();
  }, []);
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        ref={inputRef}
        id={name}
        type="text"
        value={state}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
}

export default TextInput;
