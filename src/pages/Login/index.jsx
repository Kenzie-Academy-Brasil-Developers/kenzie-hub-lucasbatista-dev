import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Container, FormHeader, FormStyled } from "./styles";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { loginSchema } from "./loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

export const Login = () => {
  const { submitLogin, autoLogin } = useContext(UserContext);

  useEffect(() => {
    autoLogin();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  return (
    <Container>
      <img src={logo} alt="" />
      <FormStyled noValidate onSubmit={handleSubmit(submitLogin)}>
        <FormHeader>
          <h2>Login</h2>
        </FormHeader>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Digite aqui seu email"
          register={register("email")}
        />
        {errors.email && <p className="errorLabel">{errors.email.message}</p>}
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
          register={register("password")}
        />
        {errors.password && (
          <p className="errorLabel">{errors.password.message}</p>
        )}
        <button className="button disabled">Entrar</button>

        <span>Ainda não possui uma conta? </span>

        <Link className="button greyBig" to="/register">
          Cadastrar
        </Link>
      </FormStyled>
    </Container>
  );
};
