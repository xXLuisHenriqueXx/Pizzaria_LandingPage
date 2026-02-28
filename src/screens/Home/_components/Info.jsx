import { tv } from "tailwind-variants";

import { homeData } from "../../../static/home/homeData";

const styles = tv({
  slots: {
    container: "flex flex-col items-center lg:items-start gap-y-4 w-full",
    item: "flex flex-row items-center gap-x-2",
    icon: "w-4 h-4",
    text: "text-xs md:text-sm font-medium",
  },
});

const { container, item, icon, text: styleText } = styles();

const Info = () => {
  const { info } = homeData;

  return (
    <ul className={container()}>
      {info.map(({ id, icon: Icon, text }) => (
        <li key={id} className={item()}>
          <Icon className={icon()} aria-hidden />

          <p className={styleText()}>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Info;
