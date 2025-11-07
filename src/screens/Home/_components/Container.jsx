import { tv } from "tailwind-variants";

import Navbar from "../../../components/Navbar";

const card = tv({
  slots: {
    container:
      "relative grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-4 w-full h-dvh px-6 bg-main bg-cover bg-center bg-no-repeat overflow-hidden",
    overflow: "absolute top-0 left-0 right-0 bottom-0 bg-background/60 z-1",
  },
});

const { container, overflow } = card();

export default function Container({ children }) {
  return (
    <main className={container()} aria-label="Home page">
      <div className={overflow()} aria-hidden></div>

      <Navbar screen={"home"} />

      {children}
    </main>
  );
}
