import "./UI-Card";

export default {
  title: "Components/UI-Card",
  tags: ["autodocs"],
  render: (args) => {
    const card = document.createElement("ui-card");

    if (args.image) card.setAttribute("image", args.image);
    if (args.title) card.setAttribute("title", args.title);
    if (args.description) card.setAttribute("description", args.description);
    if (args.color) card.setAttribute("color", args.color);
    if (args["title-color"])
      card.setAttribute("title-color", args["title-color"]);
    if (args["description-color"])
      card.setAttribute("description-color", args["description-color"]);

    return card;
  },
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    color: { control: "color" },
    "title-color": { control: "color" },
    "description-color": { control: "color" },
  },
};

export const Default = {
  args: {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tênis Nike Fit 2.0",
    description:
      "Esse tênis é perfeito para você que gosta de correr. Ele tem um design moderno e é super confortável.",
    color: "white",
    "title-color": "black",
    "description-color": "black",
  },
};

export const Example = {
  args: {
    image:
      "https://www.bnews.com.br/media/_versions/fevereiro_2025/byd_estuda_iniciar_producao_de_baterias_para_carros_eletricos_na_bahia_foto_bnews_widelg.jpg",
    title:
      "BYD estuda iniciar produção de baterias para carros elétricos na Bahia",
    description:
      "Com a nova fábrica, a BYD pretende produzir baterias de fosfato de ferro-lítio, diferenciando-se do mercado atual.",
    color: "rgb(31 37 44)",
    "title-color": "#ADBAC7",
    "description-color": "#D2D9E0",
  },
};
