import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("É necessário informar um nome")
    .min(2, "O nome precisa ter no minimo 3 caracteres"),
  email: yup
    .string()
    .required("É necessário informar um email")
    .email("O formato do email digitado é inválido"),
  password: yup.string().required("É necessário informar uma senha"),
  passwordConfirmation: yup
    .string()
    .required("Digite novamente a sua senha")
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  bio: yup.string().required("É necessário informar uma descrição"),
  contact: yup.string().required("Informe um meio de contato"),
});
