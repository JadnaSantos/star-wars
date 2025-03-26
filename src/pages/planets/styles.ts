import { styled } from "styled-components";
import { DEVICES } from "../../styles/theme/devices";

export const GridPlanet = styled.div`
  width: 100%;
  padding: 1rem;
  max-width: 1440px;
  margin: 3rem auto;

  display: grid;
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  margin-top: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: ${DEVICES.MOBILE}) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    margin-bottom: 80px;
    margin-top: 16px;
    justify-content: center;
  }
`;
