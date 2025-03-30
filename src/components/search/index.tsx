import { InputHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  onClick: () => void;
};

export const Search = forwardRef<HTMLInputElement, InputProps>(
  ({ onClick, ...rest }, ref) => {
    return (
      <S.Container
        onSubmit={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        <S.Input ref={ref} {...rest} />
        <>
          <S.Icon size={24} onClick={onClick} />
        </>
      </S.Container>
    );
  }
);
