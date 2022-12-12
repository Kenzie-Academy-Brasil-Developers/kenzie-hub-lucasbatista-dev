import { useEffect } from "react";
import { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [userInfo, setUserInfo] = useState([]);

  // ----------------------LOGIN----------------------

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);

      const { token } = response.data;
      const { id: userId } = response.data.user;

      // setUser(userId);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", token);
      window.localStorage.setItem("@USERID", userId);
      toast.success(`Seja bem vindo(a) ${response.data.user.name}`);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      if (
        error.response.data.message == "Incorrect email / password combination"
      ) {
        toast.error("E-mail ou senha invalido!");
        window.localStorage.clear();
      }
    } finally {
      setLoading(false);
    }
  };

  const submitLogin = (data) => {
    userLogin(data);
  };

  // ----------------------REGISTER----------------------

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

  const submitRegister = async (data) => {
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

  // ----------------------AutoLogin----------------------

  async function autoLogin() {
    const token = window.localStorage.getItem("@TOKEN");

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data } = await api.get("profile");
      setUserInfo(data.techs);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        setLoading,
        navigate,
        useNavigate,
        userLogin,
        submitLogin,
        submitRegister,
        setUserInfo,
        autoLogin,

        userInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
