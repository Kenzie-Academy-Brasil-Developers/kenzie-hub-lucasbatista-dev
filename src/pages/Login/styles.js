import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-top: 60px;
  padding-bottom: 60px;
  img {
    width: 144.06px;
    height: 19.97px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 42px 22px;
  gap: 22px;
  width: 370px;

  background-color: ${colors.grey3};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  span {
    background-color: ${colors.grey3};
    font-size: ${typography.headline.size};
    line-height: ${typography.headline.heigth};
    font-weight: ${typography.headline.weigth};
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;
export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  background-color: ${colors.grey3};

  h2 {
    background-color: ${colors.grey3};

    font-size: ${typography.title1.size};
    font-weight: ${typography.title1.weigth};
    line-height: ${typography.title1.heigth};
  }
`;
