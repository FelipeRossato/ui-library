import "../components/UI-Button";

export default {
  title: "Components/UI-Button",
  tags: ["autodocs"],
  render: (args) => {
    const button = document.createElement("ui-button");

    if (args.icon) button.setAttribute("icon", args.icon);
    if (args.label) button.setAttribute("label", args.label);
    if (args.color) button.setAttribute("color", args.color);

    return button;
  },
  argTypes: {
    icon: { control: "text" },
    label: { control: "text" },
    color: { control: "color" },
  },
};

export const Default = {
  args: {
    icon: "add",
    label: "Adicionar",
    color: "rgb(100, 122, 152)",
  },
};

export const Example = {
  args: {
    icon: "edit",
    label: "Editar",
    color: "#ff5722",
  },
};
