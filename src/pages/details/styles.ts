import { styled } from "styled-components";
import { DEVICES } from "../../styles/theme/devices";

export const Grid = styled.div`
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 3rem auto;
  justify-content: center;

  @media (max-width: ${DEVICES.MOBILE}) {
    padding: 0 16px;
    margin-bottom: 80px;
    margin-top: 16px;
    justify-content: center;
  }
`;
