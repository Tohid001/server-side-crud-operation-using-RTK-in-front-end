import React, { useState } from "react";

function useForm(initialValue) {
  const [value, setValue] = useState(initialValue);
  console.log("hook", initialValue);

  const onChange = (e) => {
    setValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, setValue, onChange, reset];
}

export default useForm;
