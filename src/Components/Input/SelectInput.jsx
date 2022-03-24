import React from "react";

function SelectInput({
  value,
  onChangeHandler,
  name,
  label,
  options,
  placeholder,
}) {
  return (
    <>
      {label && <label for="name">{label}</label>}
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
