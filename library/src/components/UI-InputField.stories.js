import "./UI-InputField";

export default {
  title: "Components/UI-InputField",
  tags: ["autodocs"],
  render: (args) => {
    const inputField = document.createElement("ui-inputfield");

    if (args.label) inputField.setAttribute("label", args.label);
    if (args.placeholder)
      inputField.setAttribute("placeholder", args.placeholder);
    if (args.value) inputField.setAttribute("value", args.value);
    if (args.type) inputField.setAttribute("type", args.type);
    if (args["border-color"])
      inputField.setAttribute("border-color", args["border-color"]);
    if (args.disabled)
      inputField.setAttribute("disabled", args.disabled.toString());

    return inputField;
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    type: { control: "text" },
    "border-color": { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    label: "Nome:",
    placeholder: "Digite seu nome aqui.",
    value: "Fulano de tal",
    type: "text",
    "border-color": "rgb(100, 122, 152)",
    disabled: false,
  },
};

export const Example1 = {
  args: {
    label: "Senha:",
    placeholder: "Digite sua senha aqui.",
    value: "",
    type: "password",
    "border-color": "#FF2759",
    disabled: false,
  },
};

export const Example2 = {
  args: {
    label: "Desativado:",
    placeholder: "Campo desativado.",
    value: "",
    type: "text",
    "border-color": "#888888",
    disabled: true,
  },
};
