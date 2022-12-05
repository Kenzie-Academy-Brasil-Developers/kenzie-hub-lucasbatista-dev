import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("É necessário informar um email")
    .email("O email digitado é inválido"),
  password: yup.string().required("Você precisa informar uma senha"),
});
