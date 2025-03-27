import empty from "../../assets/soldado.svg";
export type TypeEmpity = keyof typeof optionsEmpty;

export const optionsEmpty = {
  back: {
    textButton: "Recarregar página",
    title: "Essa página está em construção para melhor atendê-lo",
    img: `${empty}`,
  },
};
