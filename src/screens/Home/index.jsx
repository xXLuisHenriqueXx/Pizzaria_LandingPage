import { tv } from "tailwind-variants";

import Container from "./_components/Container";
import Header from "./_components/Header";
import Info from "./_components/Info";
import Buttons from "./_components/Buttons";

import { homeData } from "../../static/home/homeData";

const styles = tv({
  slots: {
    container: "flex flex-col items-center gap-y-12 w-full max-w-xl z-2",
    image: "hidden lg:block w-full max-w-xl z-2",
  },
});

const { container, image: styleImage } = styles();

const Home = () => {
  const { image } = homeData;

  return (
    <Container>
      <section className={container()}>
        <Header />

        <Info />

        <Buttons />
      </section>

      <img className={styleImage()} src={image} alt="Pizza" loading="lazy" />
    </Container>
  );
};

export default Home;
