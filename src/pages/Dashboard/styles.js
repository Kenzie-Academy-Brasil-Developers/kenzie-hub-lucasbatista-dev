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
  @media (max-width: 700px) {
    justify-content: center;
  }
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
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 160px;
  background-color: ${colors.grey4};
  border-bottom: 1px solid ${colors.grey3};
`;
export const InProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 25px;
  width: 90%;
  max-width: 1200px;

  @media (max-width: 700px) {
    justify-content: center;
  }

  h2 {
    font-size: ${typography.title1.size};
    font-weight: ${typography.title1.weigth};
    line-height: ${typography.title1.heigth};
  }
`;
