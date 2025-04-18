import styled, { keyframes } from "styled-components";
import { THEME_COLORS } from "../../styles/theme/colors";

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const LoadingContainer = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  height: 50vh;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-width: 0.5rem;
    border-color: transparent;
    border-style: solid;
    border-radius: 50%;
  }
  &:after {
    width: 6rem;
    height: 6rem;
    border-left: 0.5rem solid ${THEME_COLORS.PRETO};
    border-top: 0.5rem solid ${THEME_COLORS.PRETO};
    animation: ${rotate()} 600ms linear infinite;
  }
  &:before {
    width: 2rem;
    height: 2rem;
    border-left: 0.5rem solid ${THEME_COLORS.PRETO};
    border-top: 0.5rem solid ${THEME_COLORS.PRETO};
    animation: ${rotate()} 1s linear reverse infinite;
  }
`;
