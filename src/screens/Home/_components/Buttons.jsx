import { tv } from "tailwind-variants";
import { Link } from "react-router-dom";

import Button from "../../../components/Button";

import { homeData } from "../../../static/home/homeData";

const styles = tv({
  slots: {
    container: "flex flex-col items-center gap-y-2 w-full",
    icon: "w-4 h-4",
  },
});

const { container, icon } = styles();

const Buttons = () => {
  const { buttons } = homeData;

  return (
    <ul className={container()}>
      {buttons.map(({ id, icon: Icon, text, variant, link }) => (
        <li className={"w-full"} key={id}>
          <Link to={link}>
            <Button className={"w-full"} variant={variant}>
              <Icon className={icon()} aria-hidden />

              {text}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Buttons;
