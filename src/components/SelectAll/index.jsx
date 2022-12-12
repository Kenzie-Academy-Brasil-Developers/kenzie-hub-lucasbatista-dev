import React from "react";
import { Fieldset } from "./style";

export const SelectAll = ({ children, label, register }) => {
  return (
    <Fieldset>
      <label>{label}</label>
      <select className="input" {...register}>
        {children}
      </select>
    </Fieldset>
  );
};
