import React from "react";

function SelectInput({
  state,
  onChangeHandler,
  name,
  label,
  options,
  placeholder,
}) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        value={state}
        onChange={onChangeHandler}
        name={name}
        placeholder={placeholder}
      >
        <>
          <option disabled>Select a country</option>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </>
      </select>
    </>
  );
}

export default SelectInput;
