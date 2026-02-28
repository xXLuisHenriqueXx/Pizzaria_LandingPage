import pizzaBroto from "../../assets/sizes/pizza_broto.png";
import pizzaMedia from "../../assets/sizes/pizza_media.png";
import pizzaFamilia from "../../assets/sizes/pizza_familia.png";

export const sizesData = [
  {
    id: 1,
    value: 1,
    price: 24,
    title: "Broto",
    slices: "4 pedaços",
    size: "20 cm",
    numFlavors: "1 sabor",
    src: pizzaBroto,
  },
  {
    id: 2,
    value: 3,
    price: 65,
    title: "Média",
    slices: "16 pedaços",
    size: "40 cm",
    numFlavors: "3 sabores",
    src: pizzaMedia,
  },
  {
    id: 3,
    value: 4,
    price: 85,
    title: "Família",
    slices: "36 pedaços",
    size: "70 cm",
    numFlavors: "4 sabores",
    src: pizzaFamilia,
  },
];
