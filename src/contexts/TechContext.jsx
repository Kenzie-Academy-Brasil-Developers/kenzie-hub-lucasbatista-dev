import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [newTechModalIsOpen, setNewTechModalIsOpen] = useState(false);
  const [editTechModalIsOpen, setEditTechModalIsOpen] = useState(false);
  const [tech, setTech] = useState({});
  const { userInfo, setUserInfo } = useContext(UserContext);

  function openModal(state) {
    state(true);
  }

  function closeModal(state) {
    state(false);
  }

  useEffect(() => {
    const getToken = window.localStorage.getItem("@TOKEN");
    const getUserId = window.localStorage.getItem("@USERID");

    if (getToken === null || getUserId === null) {
      navigate("/");
    } else {
      const getUserInformation = async () => {
        try {
          const response = api.get(`users/${getUserId}`);
          const userData = await response;
          setUser(userData.data);
        } catch (error) {
          console.log(error);
        }
      };

      getUserInformation();
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const techRegister = async (formData) => {
    try {
      const response = await api.post("users/techs", formData);

      setUserInfo([...userInfo, response.data]);
    } catch (error) {
      console.log(error);
    } finally {
      toast.success("Tech criada com sucesso");
      setNewTechModalIsOpen(false);
    }
  };

  const techDelete = async (id) => {
    try {
      const response = await api.delete(`users/techs/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      toast.success("Tech deletada com sucesso");
      setEditTechModalIsOpen(false);
    }
    const newUserInfo = userInfo.filter((tech) => tech.id !== id);
    setUserInfo(newUserInfo);
  };

  const submitTech = async (data) => {
    await techRegister(data);
  };

  const techEdit = async (formData) => {
    try {
      const response = await api.put(`users/techs/${tech.id}`, formData);
    } catch (error) {
      console.log(error);
    } finally {
      setEditTechModalIsOpen(false);
    }
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
    autoLogin();
  };

  const submitEditTech = async (data) => {
    techEdit(data);
  };

  const getTech = (id) => {
    const verifyTech = userInfo.filter((tech) => tech.id === id);
    setTech(...verifyTech);
  };

  return (
    <TechContext.Provider
      value={{
        logout,
        user,
        userInfo,
        setNewTechModalIsOpen,
        closeModal,
        openModal,
        newTechModalIsOpen,
        submitTech,
        getTech,
        techDelete,
        setEditTechModalIsOpen,
        editTechModalIsOpen,
        submitEditTech,
        tech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
