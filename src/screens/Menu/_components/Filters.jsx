import { useMemo } from "react";
import { tv } from "tailwind-variants";
import { X } from "lucide-react";

import { filterData } from "../../../static/FilterData";

const card = tv({
  slots: {
    container: "flex flex-col items-center justify-center gap-y-4 w-full pt-20",
    containerButtons:
      "flex flex-row items-center justify-start lg:justify-center gap-x-2 w-full max-w-xl lg:max-w-[80%] overflow-auto",
    containerInput:
      "relative flex flex-row items-center w-full max-w-xl py-2 px-4 border border-highlight-red rounded-xl transition-all duration-300 cursor-pointer",
    input:
      "flex-1 text-xs md:text-sm font-medium text-primary-white placeholder:text-primary-white/50 outline-none",
    button:
      "flex flex-row items-center gap-x-2 py-2 px-4 border border-highlight-red rounded-xl hover:bg-highlight-red text-primary-white transition-all duration-300 cursor-pointer",
    cleanButton: "absolute right-2 p-2 text-primary-white outline-none",
    icon: "w-4 h-4 md:w-6 md:h-6",
    buttonText: "text-xs md:text-sm font-medium text-nowrap",
  },
  variants: {
    active: {
      true: {
        button: "bg-primary-red border-primary-red",
      },
    },
  },
});

const {
  container,
  containerButtons,
  containerInput,
  input,
  button,
  cleanButton,
  icon,
  buttonText,
} = card();

export default function Filters({ search, setSearch, filter, setFilter }) {
  const cleanSearch = () => setSearch("");
  const showCleanButton = useMemo(() => search.length > 0, [search]);

  return (
    <article className={container()}>
      <div className={containerInput()} role="search">
        <input
          type="text"
          placeholder="Pesquisar ..."
          className={input()}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />

        {showCleanButton && (
          <button className={cleanButton()}>
            <X className={icon()} onClick={cleanSearch} aria-hidden />
          </button>
        )}
      </div>

      <nav className={containerButtons()}>
        {filterData.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            className={button({ active: filter === id })}
            onClick={() => setFilter(id)}
          >
            <Icon className={icon()} aria-hidden />

            <p className={buttonText()}>{title}</p>
          </button>
        ))}
      </nav>
    </article>
  );
}
