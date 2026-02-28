import { tv } from "tailwind-variants";

import { homeData } from "../../../static/home/homeData";

const styles = tv({
  slots: {
    container:
      "flex flex-col items-center lg:items-start gap-y-4 w-full text-center lg:text-start",
    title: "text-3xl md:text-4xl font-bold",
    description: "w-full text-xs md:text-sm text-foreground/75",
    highlight: "text-4xl md:text-5xl font-black text-primary",
  },
});

const { container, title, description, highlight } = styles();

const Header = () => {
  const { header } = homeData;
  return (
    <header className={container()}>
      <h1 className={title()}>
        {header.title[0]}
        <span className={highlight()}> {header.title[1]} </span>
        {header.title[2]}
      </h1>

      <p className={description()}>{header.description}</p>
    </header>
  );
};

export default Header;
