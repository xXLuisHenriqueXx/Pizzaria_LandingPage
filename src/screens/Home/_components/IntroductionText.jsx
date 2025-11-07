import { tv } from "tailwind-variants";

import IntroductionTextInfo from "./IntroductionTextInfo";
import MenuButton from "./MenuButton";

const card = tv({
  slots: {
    container: "flex flex-col items-center gap-y-12 z-10",
    containerTitle: "flex flex-col items-center",
    title: "text-8xl md:text-9xl font-karantina text-primary-red",
    subtitle: "text-lg md:text-xl font-medium text-primary-white",
  },
});

const { container, containerTitle, title, subtitle } = card();

export default function IntroductionText() {
  return (
    <section className={container()}>
      <article className={containerTitle()}>
        <h2 className={subtitle()}>Seja bem-vindo(a) ao</h2>

        <h1 className={title()}>DEVPIZZA</h1>
      </article>

      <IntroductionTextInfo />

      <MenuButton />
    </section>
  );
}
