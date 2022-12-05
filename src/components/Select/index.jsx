import React from "react";
import { Fieldset } from "./style";

export const Select = ({ label, register }) => {
  return (
    <Fieldset>
      <label>{label}</label>
      <select className="input" {...register}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>
    </Fieldset>
  );
};
