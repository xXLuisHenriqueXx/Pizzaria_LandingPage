import Container from "./_components/Container";
import IntroductionText from "./_components/IntroductionText";

import PizzaHome from "../../assets/pizza_home.png";

export default function Home() {
  return (
    <Container>
      <IntroductionText />

      <img
        className="hidden lg:block max-w-lg hover:scale-[1.025] cursor-pointer transition-all duration-300 z-10"
        src={PizzaHome}
        alt="Imagem de uma pizza"
        loading="lazy"
      />
    </Container>
  );
}
