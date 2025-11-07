import { tv } from "tailwind-variants";
import { Clock, MapPin } from "lucide-react";

const card = tv({
  slots: {
    container: "flex flex-col items-center gap-y-8",
    containerList: "flex flex-col items-center gap-y-2",
    containerItem: "flex flex-row items-center gap-x-2 text-primary-white",
    icon: "w-4 h-4",
    introduceText:
      "w-full md:w-[80%] text-xs md:text-sm text-primary-white/75 text-center",
    iconText: "text-xs md:text-sm font-medium",
  },
});

const {
  container,
  containerList,
  containerItem,
  introduceText,
  icon,
  iconText,
} = card();

export default function IntroductionTextInfo() {
  return (
    <article className={container()}>
      <p className={introduceText()}>
        Estamos há 2 anos no mercado alimentício, dedicados a oferecer uma
        experiência gastronômica de alta qualidade. Nosso foco é proporcionar
        sabores inesquecíveis, com pratos preparados com cuidado e ingredientes
        selecionados para garantir a satisfação de nossos clientes.
      </p>

      <div className={containerList()}>
        <div className={containerItem()}>
          <Clock className={icon()} aria-hidden />

          <p className={iconText()}>Aberto de SEG à SEX das 18h às 22h</p>
        </div>

        <div className={containerItem()}>
          <MapPin className={icon()} aria-hidden />

          <p className={iconText()}>Localizado em Rua do Dev, 10, DevLand</p>
        </div>
      </div>
    </article>
  );
}
