import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/scs/PageShell";

const TITLE = "KartRace Series — strona amatorskiej ligi kartingowej | SCS Web";
const DESCRIPTION =
  "Jak powstała strona ligi KartRace Series: WordPress bez page buildera, autorska wtyczka pobierająca wyniki z arkusza Excel i generator grafik na relacje.";
const URL = "https://scsweb.pl/realizacje/kartrace-series/";

export const Route = createFileRoute("/realizacje/kartrace-series")({
  component: KartRacePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

const ZRZUTY = [
  {
    src: "/realizacje/krs-kalendarz.jpg",
    alt: "Kalendarz sezonu na stronie KartRace Series — lista rund z datami i torami",
    tytul: "Kalendarz sezonu",
    opis: "Wszystkie rundy w jednym miejscu. Przycisk zapisów do Messengera pokazuje się tylko przed zawodami, po terminie znika sam.",
  },
  {
    src: "/realizacje/krs-tory.jpg",
    alt: "Strona Tory — karty torów kartingowych z nitkami i listą rund",
    tytul: "Tory",
    opis: "Każdy tor z własnym opisem, nitką i listą rund, które się na nim odbywają. Kalendarz, tory i klasyfikacja są ze sobą połączone linkami.",
  },
  {
    src: "/realizacje/krs-klasyfikacja-podium.jpg",
    alt: "Klasyfikacja generalna — przełącznik rund i podium trzech pierwszych zawodników",
    tytul: "Klasyfikacja — podium i rundy",
    opis: "Przełącznik „generalna albo konkretna runda” i podium nad tabelą. Dane lecą prosto z arkusza, nikt ich nie przepisuje.",
  },
  {
    src: "/realizacje/krs-klasyfikacja-tabela.jpg",
    alt: "Tabela klasyfikacji generalnej z miejscami, punktami i przyciskiem Udostępnij",
    tytul: "Klasyfikacja — tabela",
    opis: "Kliknięcie w wiersz rozwija kartę zawodnika: miejsca, punkty i najlepsze okrążenie z każdej rundy.",
  },
  {
    src: "/realizacje/krs-udostepnij.jpg",
    alt: "Okno Udostępnij z wygenerowaną pionową grafiką wyniku zawodnika",
    tytul: "Okno „Udostępnij”",
    opis: "Grafika 1080 × 1920 px na relację, rysowana w przeglądarce w chwili kliknięcia. Wieniec złoty, srebrny albo brązowy zależnie od miejsca.",
  },
];

const ROZWIAZANIE = [
  "Klasyfikacja generalna i wyniki każdej rundy pobierają się automatycznie z arkusza Excel na OneDrive, co piętnaście minut.",
  "Rozwijane karty zawodników: miejsce, punkty i najlepsze okrążenie z każdej rundy.",
  "Kalendarz, tory i klasyfikacja połączone linkami. Przycisk zapisów do Messengera pojawia się tylko przed zawodami.",
  "Przycisk „Udostępnij” przy każdym zawodniku — gotowa grafika 1080 × 1920 px na relację w Instagramie lub na Facebooku, z wieńcem złotym, srebrnym albo brązowym, generowana w przeglądarce.",
  "SEO: Rank Math, dane strukturalne organizacji, wydarzeń i pytań, frazy pod ligę kartingową i nazwy torów.",
  "Polityka prywatności, regulamin do pobrania w PDF, osadzenia Instagrama ładowane dopiero po zgodzie i pełna wersja mobilna.",
];

const TECHNOLOGIE = ["WordPress", "PHP", "JavaScript (canvas)", "CSS", "Rank Math"];

function KartRacePage() {
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <p className="eyebrow mb-3">Realizacja · projekt własny</p>
          <h1 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] font-bold">
            KartRace Series — strona amatorskiej ligi kartingowej
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Liga kartingowa spod Warszawy, którą współzałożyłem razem z dwoma znajomymi. To projekt
            własny, nie zlecenie zewnętrznego klienta — piszę o tym wprost, bo robi różnicę przy
            czytaniu takiego opisu.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://kartraceseries.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 bg-foreground px-7 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Otwórz kartraceseries.pl
              <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/#realizacje"
              className="inline-flex min-h-[52px] items-center justify-center border border-hairline-strong px-7 text-base font-medium tracking-wide transition-colors hover:border-foreground/45"
            >
              Wróć do realizacji
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <div className="border border-hairline bg-[#0d0d0d]">
            <div className="flex h-6 items-center gap-1.5 border-b border-hairline px-2.5">
              <span className="h-1.5 w-1.5 border border-foreground/35" />
              <span className="h-1.5 w-1.5 border border-foreground/25" />
              <span className="h-1.5 w-1.5 border border-foreground/25" />
              <span className="ml-3 text-[10px] text-muted-foreground">kartraceseries.pl</span>
            </div>
            <img
              src="/realizacje/kartrace.jpg"
              alt="Strona główna kartraceseries.pl — ciemny hero z napisem Kart Race Series i gokartem"
              width={1200}
              height={532}
              decoding="async"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-20">
          <div>
            <p className="eyebrow mb-3">Wyzwanie</p>
            <h2 className="display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">
              Wyniki w Excelu, wydarzenia na Facebooku
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Liga liczy wyniki w arkuszu Excel, a terminy zawodów ogłasza w wydarzeniach na
              Facebooku. Strona miała to pokazywać bez przepisywania czegokolwiek ręcznie — bo
              przepisywane ręcznie wyniki po dwóch rundach przestają być aktualne.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Jak to zrobiłem</p>
            <h2 className="display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">
              WordPress i własna wtyczka
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Motyw blokowy Twenty Twenty-Five, bez page buildera. Projekt graficzny powstał na bazie
              makiety z Google Stitch: czarne tło i efekt glitch w nagłówku. Całą logikę wyników
              obsługuje napisana od zera wtyczka „KRS Wyniki”.
            </p>
            <ul className="mt-8 border-t border-hairline">
              {ROZWIAZANIE.map((punkt) => (
                <li
                  key={punkt}
                  className="border-b border-hairline py-4 leading-relaxed text-muted-foreground"
                >
                  {punkt}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="text-foreground">Technologie:</span> {TECHNOLOGIE.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <p className="eyebrow mb-3">Z wnętrza strony</p>
          <h2 className="display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">
            Jak to wygląda w środku
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {ZRZUTY.map((z) => (
              <figure key={z.src} className="m-0 border border-hairline bg-[#0d0d0d]">
                <img
                  src={z.src}
                  alt={z.alt}
                  width={1200}
                  height={532}
                  loading="lazy"
                  decoding="async"
                  className="block w-full border-b border-hairline"
                />
                <figcaption className="p-5">
                  <p className="display font-semibold">{z.tytul}</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {z.opis}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <h2 className="display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">
            Potrzebujesz czegoś więcej niż wizytówki?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Katalog, wyniki, kalendarz, cennik, który liczy sam — jeżeli Twoja strona ma coś robić,
            a nie tylko wisieć, napisz. Projekt pokazuję, zanim zapłacisz choćby złotówkę.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#kontakt"
              className="inline-flex min-h-[52px] items-center justify-center bg-foreground px-7 text-base font-medium tracking-wide text-background transition-opacity hover:opacity-90"
            >
              Zamów darmowy projekt
            </a>
            <Link
              to="/kalkulator"
              className="inline-flex min-h-[52px] items-center justify-center border border-hairline-strong px-7 text-base font-medium tracking-wide transition-colors hover:border-foreground/45"
            >
              Policz cenę w kalkulatorze
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
