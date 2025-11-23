import { tv } from "tailwind-variants";
import { Pizza, Ruler, Salad, Plus, Minus } from "lucide-react";

const card = tv({
  slots: {
    container:
      "flex flex-row md:flex-col justify-between md:justify-center items-center gap-2 md:gap-4 w-full p-4 bg-background-card rounded-xl hover:scale-[1.025] transition duration-300",
    containerText: "flex flex-col gap-1",
    containerInfo:
      "flex items-center gap-2 text-xs md:text-sm  font-inter font-light text-primary-white/75",
    containerButtons: "flex items-center gap-2 md:gap-4",
    buttonSize:
      "p-1 rounded-full text-primary-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300",
    image: "w-22 h-22 md:w-28 md:h-28 p-2 bg-background rounded-md",
    iconInfo: "w-4 h-4",
    title: "mb-1 text-base font-semibold text-primary-white md:text-center",
  },
  variants: {
    type: {
      decrease: {
        buttonSize: "border border-primary-white hover:bg-primary-white/75",
      },
      increase: {
        buttonSize: "bg-primary-red hover:bg-highlight-red",
      },
    },
  },
});

const {
  container,
  containerText,
  containerInfo,
  containerButtons,
  buttonSize,
  image,
  iconInfo,
  title,
} = card();

export default function CardSize({ size, quantity, onIncrease, onDecrease }) {
  return (
    <div className={container()}>
      <img className={image()} src={size.src} alt={size.imgAlt} />

      <div>
        <h2 className={title()}>{size.title}</h2>

        <div className={containerText()}>
          <div className={containerInfo()}>
            <Pizza className={iconInfo()} aria-hidden />

            <p>{size.slices}</p>
          </div>
          <div className={containerInfo()}>
            <Ruler className={iconInfo()} aria-hidden />

            <p>{size.size}</p>
          </div>
          <div className={containerInfo()}>
            <Salad className={iconInfo()} aria-hidden />

            <p>{size.numFlavors}</p>
          </div>
        </div>
      </div>

      <div className={containerButtons()}>
        <button
          onClick={onDecrease}
          disabled={quantity === 0}
          className={buttonSize({ type: "decrease" })}
        >
          <Minus className="w-4 h-4 md:w-6 md:h-6" aria-hidden />
        </button>

        <span className={title()}>{quantity}</span>

        <button
          onClick={onIncrease}
          className={buttonSize({ type: "increase" })}
        >
          <Plus className="w-4 h-4 md:w-6 md:h-6" aria-hidden />
        </button>
      </div>
    </div>
  );
}
