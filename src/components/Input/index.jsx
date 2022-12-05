import React from "react";
import { Fieldset } from "./styles";

export const Input = ({ label, type, id, placeholder, register, disabled }) => {
  return (
    <Fieldset>
      <label>{label}</label>
      <input
        className="input"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
      />
    </Fieldset>
  );
};
