import React from "react";

function SelectInput({
  isForm,
  value,
  onChangeHandler,
  name,
  label,
  options,
  placeholder,
}) {
  return (
    <>
      {isForm && <label for="name">{label}</label>}
      <select
        id={name}
        value={value}
        onChange={onChangeHandler}
        name={name}
        placeholder={placeholder}
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectInput;
