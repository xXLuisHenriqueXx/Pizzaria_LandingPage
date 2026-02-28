import { tv } from "tailwind-variants";

const buttonStyles = tv({
  base: "relative flex shrink-0 flex-row items-center justify-center gap-4 text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none transition-all duration-300 rounded-2xl cursor-pointer",
  variants: {
    variant: {
      default: "bg-primary hover:bg-highlight",
      secondary: "bg-inactive/10 text-secondary hover:bg-inactive/50",
      outline:
        "border border-primary text-primary bg-background shadow-xs hover:bg-primary hover:text-background",
      ghost: "text-inactive hover:text-primary/90 hover:bg-primary/10",
    },
    size: {
      default: "py-3 px-4",
      "icon-sm": "size-8",
      "icon-md": "size-10",
      "icon-lg": "size-12",
      "icon-xl": "size-14",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = ({
  className,
  variant = "default",
  size = "default",
  children,
  ...rest
}) => {
  return (
    <button className={buttonStyles({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
