import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { NavbarStyled } from "./style";

export const Navbar = () => {
  return (
    <NavbarStyled>
      <img src={logo} alt="" />
      <Link className="button grey" to="/">
        Voltar
      </Link>
    </NavbarStyled>
  );
};
