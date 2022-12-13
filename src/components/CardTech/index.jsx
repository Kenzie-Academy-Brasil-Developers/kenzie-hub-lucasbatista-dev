import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
export const CardTech = ({ title, status, trashIcon, pencilIcon, id }) => {
  const { openModal, setEditTechModalIsOpen, techDelete, getTech } =
    useContext(TechContext);

  return (
    <li
      key={id}
      id={id}
      onClick={() => {
        getTech(id);
      }}
    >
      <h2
        onClick={() => {
          openModal(setEditTechModalIsOpen);
        }}
      >
        {title}
      </h2>
      <div>
        <p>{status}</p>
        <div>
          <button onClick={() => techDelete(id)}>{trashIcon}</button>
          <button
            onClick={() => {
              openModal(setEditTechModalIsOpen);
            }}
          >
            {pencilIcon}
          </button>
        </div>
      </div>
    </li>
  );
};
