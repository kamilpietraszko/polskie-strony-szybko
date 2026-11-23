import { ArrowUpRight } from "lucide-react";
import type { Realizacja } from "@/lib/realizacje";

// Karta jednej realizacji. Ramka ze zrzutem jest celowo taka sama jak przy
// projektach przykładowych na stronie głównej (pasek z trzema kwadracikami
// i adresem), żeby obie sekcje trzymały ten sam język wizualny.
//
// Kliknięcie w zrzut otwiera żywą stronę klienta w nowej karcie.
// Jeśli realizacja ma `caseHref`, nazwa i link pod opisem prowadzą do naszej
// podstrony z szerszym opisem projektu.
export function RealizacjaCard({ r }: { r: Realizacja }) {
  return (
    <article className="flex h-full flex-col p-6 md:p-8">
      <a
        href={r.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Otwórz stronę ${r.url} w nowej karcie`}
        className="group mb-6 block border border-hairline bg-[#0d0d0d] transition-colors duration-200 hover:border-foreground/45"
      >
        <div className="flex h-6 items-center gap-1.5 border-b border-hairline px-2.5">
          <span className="h-1.5 w-1.5 border border-foreground/35" />
          <span className="h-1.5 w-1.5 border border-foreground/25" />
          <span className="h-1.5 w-1.5 border border-foreground/25" />
          <span className="ml-3 truncate text-[10px] text-muted-foreground">{r.url}</span>
        </div>
        <img
          src={r.shot}
          alt={r.shotAlt}
          width={1200}
          height={532}
          loading="lazy"
          decoding="async"
          className="block w-full transition-opacity duration-200 group-hover:opacity-85"
        />
      </a>

      <p className="eyebrow mb-3">{r.tag}</p>
      <h3 className="display text-xl font-semibold md:text-2xl">
        {r.caseHref ? (
          <a href={r.caseHref} className="underline-offset-4 hover:underline">
            {r.name}
          </a>
        ) : (
          r.name
        )}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{r.branch}</p>

      <div className="mt-4 flex-1">
        <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{r.desc}</p>
        {r.caseHref ? (
          <a
            href={r.caseHref}
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[0.95rem] font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Zobacz, jak to zbudowałem
            <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>

      <a
        href={r.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
      >
        {r.url}
        <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
