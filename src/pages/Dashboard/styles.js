import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  width: 100%;
  min-height: 80px;
  background-color: ${colors.grey4};
  border-bottom: 1px solid ${colors.grey3};
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  height: 100%;
  width: 90%;
  max-width: 1200px;
`;
export const AsideInfoContainer = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  width: 100%;
  min-height: 160px;

  background-color: ${colors.grey4};
  border-bottom: 1px solid ${colors.grey3};
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  height: 100%;
  width: 90%;
  max-width: 1200px;
  @media (max-width: 700px) {
    justify-content: center;
  }
  span {
    font-size: ${typography.headline.size};
    font-weight: ${typography.headline.weigth};
    line-height: ${typography.headline.heigth};
    color: ${colors.grey1};
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 160px;
  background-color: ${colors.grey4};
  border-bottom: 1px solid ${colors.grey3};
  margin-top: 20px;
`;

export const HeaderSectionContainer = styled.header`
  width: 90%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserTechs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 25px;
  width: 90%;
  max-width: 1200px;
  padding: 25px;
  margin-top: 20px;
  margin-bottom: 20px;

  background-color: ${colors.grey3};

  border-radius: 4px;

  @media (max-width: 700px) {
    justify-content: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    background-color: ${colors.grey3};

    div {
      display: flex;
      gap: 25px;
    }
  }
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 55px;

    padding: 14px 22px;

    border-radius: 4px;
  }

  h2 {
    font-size: ${typography.title1.size};
    font-weight: ${typography.title1.weigth};
    line-height: ${typography.title1.heigth};
    cursor: pointer;
  }
`;
export const Modal = styled.div`
  width: 100%;

  header {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
  }
  form {
    padding: 32px 22px;
    background-color: ${colors.grey3};
    display: flex;
    flex-direction: column;
    gap: 22px;

    div {
      display: flex;
      gap: 22px;

      background-color: ${colors.grey3};

      .btn60 {
        width: 70%;
      }
      .btn40 {
        width: 30%;
      }
    }
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 22px;

  background-color: ${colors.grey2};

  p {
    font-size: ${typography.title3.size};
    line-height: ${typography.title3.heigth};
    font-weight: ${typography.title3.weigth};
    color: ${colors.grey0};
    background-color: transparent;
  }
  button {
    font-size: ${typography.title3.size};
    line-height: ${typography.title3.heigth};
    font-weight: ${typography.title3.weigth};
    color: ${colors.grey1};
    background-color: transparent;
  }
`;
