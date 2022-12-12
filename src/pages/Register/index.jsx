import React from "react";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Select } from "../../components/Select";
import { Container, FormHeader, FormStyled } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { registerSchema } from "./registerSchema";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Register = () => {
  const { loading, submitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  return (
    <Container>
      <Navbar btnValue="Voltar" />
      <FormStyled noValidate onSubmit={handleSubmit(submitRegister)}>
        <FormHeader>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
        </FormHeader>
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite aqui seu nome"
          register={register("name")}
          disabled={loading}
        />
        {errors.name && <p className="errorLabel">{errors.name.message}</p>}
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Digite aqui seu email"
          register={register("email")}
          disabled={loading}
        />
        {errors.email && <p className="errorLabel">{errors.email.message}</p>}
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
          register={register("password")}
          disabled={loading}
        />
        {errors.password && (
          <p className="errorLabel">{errors.password.message}</p>
        )}
        <Input
          type="password"
          id="passwordConfirmation"
          label="Confirmar Senha"
          placeholder="Digite novamente sua senha"
          register={register("passwordConfirmation")}
          disabled={loading}
        />
        {errors.passwordConfirmation && (
          <p className="errorLabel">{errors.passwordConfirmation.message}</p>
        )}
        <Input
          type="text"
          id="bio"
          label="Bio"
          placeholder="Fale sobre você"
          register={register("bio")}
          disabled={loading}
        />
        {errors.bio && <p className="errorLabel">{errors.bio.message}</p>}
        <Input
          type="text"
          id="contact"
          label="Contato"
          placeholder="Opção de contato"
          register={register("contact")}
          disabled={loading}
        />
        {errors.contact && (
          <p className="errorLabel">{errors.contact.message}</p>
        )}

        <Select
          label="Selecionar módulo"
          register={register("course_module")}
          disabled={loading}
        />
        <button disabled={loading} type="submit" className="button disabled">
          {loading ? "cadastrando" : "cadastrar"}
        </button>
      </FormStyled>
    </Container>
  );
};
