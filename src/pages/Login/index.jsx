import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Container, FormHeader, FormStyled } from "./styles";
import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      toast.success(`Seja bem vindo(a) ${response.data.user.name}`);

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      if (
        error.response.data.message == "Incorrect email / password combination"
      ) {
        toast.error("E-mail ou senha invalido!");
      }
    } finally {
      setLoading(false);
    }
  };

  const submitLogin = (data) => {
    userLogin(data);
  };

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
