import { tv } from "tailwind-variants";

import Navbar from "../../../components/Navbar";

const card = tv({
  slots: {
    container: "flex flex-col w-full min-h-screen bg-background",
    containerContent: "flex flex-col gap-y-8 px-6",
  },
});

const { container, containerContent } = card();

export default function Container({ children, setShowModal }) {
  return (
    <main className={container()}>
      <Navbar setShowModal={setShowModal} screen={"menu"} />

      <section className={containerContent()}>{children}</section>
    </main>
  );
}
