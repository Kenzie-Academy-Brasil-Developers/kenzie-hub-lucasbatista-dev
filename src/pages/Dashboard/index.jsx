import React, { useContext, useEffect } from "react";
import {
  AsideInfoContainer,
  Header,
  Info,
  UserTechs,
  Navbar,
  SectionContainer,
  HeaderSectionContainer,
  Modal,
  ModalHeader,
} from "./styles";
import logo from "../../assets/logo.svg";
import ReactModal from "react-modal";
import { Input } from "../../components/Input";
import { SelectAll } from "../../components/SelectAll";
import { useForm } from "react-hook-form";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { CardTech } from "../../components/CardTech";

ReactModal.setAppElement("#root");

export const Dashboard = () => {
  const {
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
    userInformation,
  } = useContext(TechContext);
  const { autoLogin } = useContext(UserContext);

  useEffect(() => {
    autoLogin();
    userInformation();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
        <HeaderSectionContainer>
          <p>Tecnologias</p>
          <button
            onClick={() => openModal(setNewTechModalIsOpen)}
            className="button greySmall"
          >
            +
          </button>
          <ReactModal
            isOpen={newTechModalIsOpen}
            onRequestClose={() => closeModal(setNewTechModalIsOpen)}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <Modal>
              <ModalHeader>
                <p>Cadastrar Tecnologia</p>

                <button onClick={() => closeModal(setNewTechModalIsOpen)}>
                  X
                </button>
              </ModalHeader>
              <form noValidate onSubmit={handleSubmit(submitTech)}>
                <Input
                  type="text"
                  id="title"
                  label="Nome"
                  placeholder="Digite a tecnologia"
                  register={register("title")}
                />
                <SelectAll
                  label="Selecionar Status"
                  register={register("status")}
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </SelectAll>
                <button className="button primary">Cadastrar Tecnologia</button>
              </form>
            </Modal>
          </ReactModal>
        </HeaderSectionContainer>
        <UserTechs>
          <ul>
            {userInfo.map((item) => (
              <CardTech
                key={item.id}
                id={item.id}
                title={item.title}
                status={item.status}
                trashIcon={<BsTrash />}
                pencilIcon={<BsPencilSquare />}
              />
            ))}
            <ReactModal
              isOpen={editTechModalIsOpen}
              onRequestClose={() => closeModal(setEditTechModalIsOpen)}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
            >
              <Modal>
                <ModalHeader>
                  <p>Editar Tecnologia</p>

                  <button onClick={() => closeModal(setEditTechModalIsOpen)}>
                    X
                  </button>
                </ModalHeader>
                <form noValidate onSubmit={handleSubmit(submitEditTech)}>
                  <Input
                    disabled
                    type="text"
                    id="title"
                    label="Nome"
                    placeholder={tech.title}
                    register={register("title")}
                  />
                  <SelectAll
                    label="Selecionar Status"
                    register={register("status")}
                  >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </SelectAll>

                  <div>
                    <button type="submit" className="button primary btn60">
                      Salvar Alterações
                    </button>
                    <button
                      type="button"
                      onClick={() => techDelete(tech.id)}
                      className="button greyBig btn40"
                    >
                      Excluir
                    </button>
                  </div>
                </form>
              </Modal>
            </ReactModal>
          </ul>
        </UserTechs>
      </SectionContainer>
    </>
  );
};
