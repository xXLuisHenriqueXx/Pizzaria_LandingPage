import { tv } from "tailwind-variants";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import Logo from "../../assets/logo.png";

const card = tv({
  slots: {
    container:
      "fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-6 z-40",
    logo: "w-10 h-10 lg:w-12 lg:h-12 hover:scale-[1.025] cursor-pointer",
    icon: "w-6 h-6 md:w-8 md:h-8 text-primary-white hover:text-primary-red cursor-pointer duration-200",
  },
});

const { container, logo, icon } = card();

export default function Navbar({ screen, setShowModal }) {
  return (
    <header className={container()}>
      <Link to="/" role="button" aria-label={"Go to Home"}>
        <img className={logo()} src={Logo} alt="DevPizza logo" loading="lazy" />
      </Link>

      {screen !== "home" && (
        <button onClick={() => setShowModal(true)} aria-label="Open cart">
          <ShoppingCart className={icon()} aria-hidden />
        </button>
      )}
    </header>
  );
}
