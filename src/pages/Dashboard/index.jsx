import React, { useEffect, useState } from "react";
import {
  AsideInfoContainer,
  Header,
  Info,
  InProgress,
  Navbar,
  SectionContainer,
} from "./styles";
import logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getToken = window.localStorage.getItem("@TOKEN");
    const getUserId = window.localStorage.getItem("@USERID");

    if (getToken === null || getUserId === null) {
      navigate("/login");
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

  return (
    <>
      <Header>
        <Navbar>
          <img src={logo} alt="Logo" />
          <button onClick={logout} className="button grey">
            Sair
          </button>
        </Navbar>
      </Header>
      <AsideInfoContainer>
        <Info>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </Info>
      </AsideInfoContainer>
      <SectionContainer>
        <InProgress>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </InProgress>
      </SectionContainer>
    </>
  );
};
