import { styled } from "styled-components";
import { DEVICES } from "../../styles/theme/devices";

export const Grid = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  max-width: 1440px;
  margin: 3rem auto;

  justify-content: center;
  margin-top: 1.5rem;

  @media (max-width: ${DEVICES.MOBILE}) {
    padding: 0 16px;
    margin-bottom: 80px;
    margin-top: 16px;
    justify-content: center;
  }
`;
