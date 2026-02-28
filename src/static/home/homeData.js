import { Clock, MapPin, Pizza } from "lucide-react";

import PizzaImage from "../../assets/pizza.png";

export const homeData = {
  header: {
    title: ["Bem-vindo(a) ao", "DevPizza", "a melhor pizza da cidade"],
    description:
      "Estamos há 2 anos no mercado alimentício, dedicados a oferecer uma experiência gastronômica de alta qualidade. Nosso foco é proporcionar sabores inesquecíveis, com pratos preparados com cuidado e ingredientes selecionados para garantir a satisfação de nossos clientes.",
  },
  info: [
    {
      id: 1,
      icon: Clock,
      text: "Aberto de Segunda a Sexta das 18h às 22h",
    },
    {
      id: 2,
      icon: MapPin,
      text: "Localizado em Rua do Dev, 10, DevLand, Brasil",
    },
  ],
  buttons: [
    {
      id: 1,
      icon: Pizza,
      text: "Ver Cardapio",
      link: "/cardapio",
      variant: "default",
    },
  ],
  image: PizzaImage,
};
