import "./UI-Dropdown";

export default {
  title: "Components/UI-Dropdown",
  tags: ["autodocs"],
  render: (args) => {
    const dropdown = document.createElement("ui-dropdown");

    if (args.label) dropdown.setAttribute("label", args.label);
    if (args.options)
      dropdown.setAttribute("options", JSON.stringify(args.options));
    if (args.selected) dropdown.setAttribute("selected", args.selected);
    if (args["border-color"])
      dropdown.setAttribute("border-color", args["border-color"]);
    if (args.disabled)
      dropdown.setAttribute("disabled", args.disabled.toString());

    return dropdown;
  },
  argTypes: {
    label: { control: "text" },
    options: { control: "object" },
    selected: { control: "text" },
    "border-color": { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    label: "País:",
    options: ["Brasil", "Argentina", "Chile"],
    selected: "Brasil",
    "border-color": "rgb(100, 122, 152)",
    disabled: false,
  },
};

export const Example = {
  args: {
    label: "Desativado:",
    options: ["Opção A", "Opção B", "Opção C"],
    selected: "Opção A",
    "border-color": "#ff5722",
    disabled: true,
  },
};
