import React, { useRef, useEffect } from "react";

function TextInput({
  value,
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
      {label && <label>{label}</label>}
      <input
        ref={inputRef}
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
}

export default TextInput;
