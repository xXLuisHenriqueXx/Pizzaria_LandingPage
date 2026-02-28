import { tv } from "tailwind-variants";

const cardStyles = tv({
  base: "flex flex-col gap-4 p-4 bg-background text-foreground border border-foreground/10 transition-all duration-300 shadow-sm rounded-2xl",
  variants: {
    hasHover: {
      true: "hover:border-primary/50 hover:shadow-md hover:-translate-y-2",
    },
  },
});

const Card = ({ hasHover = false, className, ...props }) => {
  return (
    <div
      data-slot="card"
      className={cardStyles({ hasHover, className })}
      {...props}
    />
  );
};

export default Card;
