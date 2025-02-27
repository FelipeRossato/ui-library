import "./UI-Modal";

export default {
  title: "Components/UI-Modal",
  tags: ["autodocs"],
  render: (args) => {
    const modal = document.createElement("ui-modal");

    if (args.open) modal.setAttribute("open", args.open.toString());
    if (args.title) modal.setAttribute("title", args.title);
    if (args.message) modal.setAttribute("message", args.message);
    if (args.color) modal.setAttribute("color", args.color);
    if (args.button) modal.setAttribute("button", args.button);

    return modal;
  },
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    message: { control: "text" },
    color: { control: "color" },
    button: { control: "text" },
  },
};

export const Default = {
  args: {
    open: true,
    title: "Salvar mudanças?",
    message: "Depois de salvar, as mudanças não poderão ser desfeitas.",
    color: "#647A98",
    button: "Salvar",
  },
};

export const Example = {
  args: {
    open: true,
    title: "Tem certeza que deseja deletar?",
    message: "Você poderá recuperar esse dado em até 30 dias.",
    color: "#FF2759",
    button: "Deletar",
  },
};
