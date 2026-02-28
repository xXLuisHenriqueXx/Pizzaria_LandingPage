import { tv } from "tailwind-variants";

import Navbar from "../../../components/Navbar";

const card = tv({
  slots: {
    container:
      "relative grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 w-full h-dvh px-4 lg:px-8 bg-main bg-cover bg-center bg-no-repeat",
    overflow: "absolute top-0 left-0 right-0 bottom-0 bg-background/75 z-1",
  },
});

const { container, overflow } = card();

const Container = ({ children }) => {
  return (
    <main className={container()} aria-label="Home page">
      <div className={overflow()} aria-hidden></div>

      <Navbar screen={"home"} />

      {children}
    </main>
  );
};

export default Container;
