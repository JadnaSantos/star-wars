import empty from "../../assets/soldado.svg";
export type TypeEmpity = keyof typeof optionsEmpty;

export const optionsEmpty = {
  back: {
    textButton: "Recarregar página",
    title: "Desculpe, estamos em manutenção",
    img: `${empty}`,
  },
};
