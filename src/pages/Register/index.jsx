import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Select } from "../../components/Select";
import { Container, FormHeader, FormStyled } from "./styles";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const Register = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      bio: "",
      contact: "",
    },
  });

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("users", formData);

      toast.success("Usuário cadastrado com sucesso");
    } catch (error) {
      if (error.response.data.message == "Email already exists") {
        toast.error("E-mail já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = async (data) => {
    await userRegister(data);
    reset({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      bio: "",
      contact: "",
    });
  };

  return (
    <Container>
      <Navbar btnValue="Voltar" />
      <FormStyled noValidate onSubmit={handleSubmit(submit)}>
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
