import { tv } from "tailwind-variants";
import { Link } from "react-router-dom";
import { Pizza } from "lucide-react";

const card = tv({
  slots: {
    button:
      "relative flex items-center justify-center w-full md:w-[80%] py-6 lg:py-4 bg-primary-red hover:bg-highlight-red hover:shadow-red hover:scale-[1.025] rounded-xl transition-all duration-300 cursor-pointer text-primary-white",
    icon: "absolute w-5 h-5 right-5",
    text: "text-sm md:text-base font-semibold",
  },
});

const { button, icon, text } = card();

export default function MenuButton() {
  return (
    <Link className={button()} to="/menu" role="button" aria-label="Go to menu">
      <p className={text()}>Cardápio</p>

      <Pizza className={icon()} aria-hidden />
    </Link>
  );
}
