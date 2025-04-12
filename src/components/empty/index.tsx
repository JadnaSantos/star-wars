import { optionsEmpty, TypeEmpity } from "./options";
import * as S from "./styles";

type EmptyProps = {
  type: TypeEmpity;
  onClick: () => void;
};

export const Empty = ({ onClick, type }: EmptyProps) => {
  const { img, textButton, title } = optionsEmpty[type];
  return (
    <S.NotItens>
      <S.TextMessage>{title}</S.TextMessage>
      <img src={img} alt={title} />
      <S.ContainerButton>
        <S.Button onClick={onClick}>{textButton}</S.Button>
      </S.ContainerButton>
    </S.NotItens>
  );
};
