import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  background-color: ${colors.grey3};

  label {
    font-size: ${typography.headline.size};
    font-weight: ${typography.headline.weigth};
    line-height: ${typography.headline.heigth};

    background-color: ${colors.grey3};
  }
`;
