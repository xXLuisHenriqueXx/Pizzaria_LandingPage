import { tv } from "tailwind-variants";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import Button from "./Button";

import Logo from "../assets/logo.png";

const card = tv({
  slots: {
    container:
      "fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-4 lg:px-8 z-40",
    logo: "w-10 h-10",
    icon: "w-6 h-6",
  },
});

const { container, logo, icon } = card();

export default function Navbar({ screen, setShowModal }) {
  return (
    <header className={container()}>
      <Link to="/" role="button" aria-label={"Go to Home"}>
        <Button variant="ghost">
          <img
            className={logo()}
            src={Logo}
            alt="DevPizza logo"
            loading="lazy"
          />
        </Button>
      </Link>

      {screen !== "home" && (
        <Button
          variant="ghost"
          size="icon-lg"
          onClick={() => setShowModal(true)}
          aria-label="Open cart"
        >
          <ShoppingCart className={icon()} aria-hidden />
        </Button>
      )}
    </header>
  );
}
