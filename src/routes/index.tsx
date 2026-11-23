import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Timer,
  Ban,
  UserRound,
  Minus,
  Plus,
  Phone,
  Check,
  Eye,
  Zap,
  Wallet,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/scs/Reveal";
import { HeroVisual } from "@/components/scs/HeroVisual";
import { HydroPreview, AutoPreview, DachPreview } from "@/components/scs/DemoPreviews";
import { ContactForm } from "@/components/scs/ContactForm";
import { MobileBar } from "@/components/scs/MobileBar";
import { TESTIMONIALS } from "@/lib/testimonials";
import { NAV, GOOGLE_PROFILE_URL } from "@/lib/nav";
import { BRANZE } from "@/lib/branze";
import { TestimonialCard } from "@/components/scs/TestimonialCard";
import { REALIZACJE } from "@/lib/realizacje";
import { RealizacjaCard } from "@/components/scs/RealizacjaCard";

const TITLE = "Strona internetowa dla firmy w 48h — SCS Web";
const DESCRIPTION =
  "SCS Web tworzy strony internetowe dla lokalnych firm w Polsce — hydraulików, warsztatów i dekarzy. Darmowy projekt w 48 godzin, płacisz dopiero gdy Ci się spodoba.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: "https://scsweb.pl/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://scsweb.pl/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "SCS Web",
          description: DESCRIPTION,
          url: "https://scsweb.pl",
          telephone: "+48 664 013 998",
          email: "kamil@scsweb.pl",
          sameAs: [GOOGLE_PROFILE_URL],
          founder: { "@type": "Person", name: "Kamil Pietraszko" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tarczyn",
            postalCode: "05-555",
            addressCountry: "PL",
          },
          areaServed: [
            { "@type": "City", name: "Tarczyn" },
            { "@type": "Country", name: "Polska" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          priceRange: "1500 PLN",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const STEPS = [
  {
    n: "01",
    title: "Rozmowa i ustalenia",
    body: "Dzwonisz albo wysyłasz formularz. Pytam o Twoją firmę, klientów i to, co ma Ci dawać strona. Kilka minut rozmowy — bez zobowiązań i bez zaliczki.",
  },
  {
    n: "02",
    title: "Darmowy projekt strony",
    body: "Buduję gotową, działającą stronę Twojej firmy i wysyłam Ci link. Oglądasz ją na spokojnie, mówisz co zmienić — poprawiam. Cały czas za darmo; płacisz dopiero, gdy powiesz „to jest to”.",
  },
  {
    n: "03",
    title: "Uruchomienie",
    body: "Rejestruję domenę na Twoje dane, publikuję stronę i zgłaszam ją do Google. W 48 godzin od akceptacji Twoja firma jest w internecie — strona jest Twoją własnością.",
  },
];


const CASES = [
  {
    name: "Hydro-Perfekt",
    branch: "Hydraulik — Bielsko-Biała",
    url: "hydro-perfekt.pl",
    desc: "Jasny, uporządkowany layout z całodobowym paskiem awaryjnym, siatką usług z widełkami cen i opiniami klientów.",
    to: "/demo/hydro-perfekt",
    Preview: HydroPreview,
  },
  {
    name: "AutoSerwis Kowalski",
    branch: "Warsztat samochodowy — Radom",
    url: "autoserwis-kowalski.pl",
    desc: "Ciemna, warsztatowa estetyka z żółtym akcentem, mocną typografią, godzinami otwarcia i szybkim umawianiem wizyt.",
    to: "/demo/autoserwis-kowalski",
    Preview: AutoPreview,
  },
  {
    name: "DachPol",
    branch: "Dekarz — Lublin",
    url: "dachpol.pl",
    desc: "Ciepła, ziemista paleta z szeryfową typografią, galerią realizacji, przeglądem materiałów i licznikiem doświadczenia.",
    to: "/demo/dachpol",
    hint: "Zawiera działający kalkulator wyceny",
    Preview: DachPreview,
  },
] as const;

const ADVANTAGES = [
  {
    icon: Eye,
    title: "Zobaczysz stronę, zanim zapłacisz",
    body: "Projekt przygotowuję jako pierwszy krok, za darmo i bez zobowiązań. Płacisz dopiero, gdy Ci się spodoba.",
  },
  {
    icon: Zap,
    title: "Gotowe w 48 godzin",
    body: "Nie tygodnie i nie miesiące. Projekt w 48 godzin, publikacja w 48 godzin od akceptacji.",
  },
  {
    icon: Wallet,
    title: "Bez abonamentu i ukrytych kosztów",
    body: "Płacisz raz. Jedyny stały wydatek to domena, około 120 zł rocznie — i to wszystko.",
  },
  {
    icon: KeyRound,
    title: "Strona i domena są Twoją własnością",
    body: "Domenę rejestruję na Twoje dane, kod przekazuję. Nikt Cię niczym nie wiąże.",
  },
];

const WHY = [
  {
    icon: ShieldCheck,
    title: "Projekt przed płatnością",
    body: "Najpierw widzisz gotową stronę, potem decydujesz. Nic nie ryzykujesz.",
  },
  {
    icon: Timer,
    title: "48 godzin zamiast tygodni",
    body: "Nie czekasz miesiąca na pierwszy szkic. Demo dostajesz w dwa dni.",
  },
  {
    icon: Ban,
    title: "Zero abonamentu za samą stronę",
    body: "Przy zakupie jednorazowym strona jest Twoja. Bez comiesięcznych opłat.",
  },
  {
    icon: UserRound,
    title: "Bezpośredni kontakt",
    body: "Rozmawiasz z jedną osobą, która robi Twoją stronę. Bez agencji i pośredników.",
  },
];

const FAQ = [
  {
    q: "Ile to kosztuje w przyszłości?",
    a: "Za samą stronę nie płacisz żadnego abonamentu. Jedyny stały koszt to domena, czyli ok. 100–150 zł rocznie. W wariancie abonamentowym za 199 zł miesięcznie domena i hosting są już w cenie.",
  },
  {
    q: "Czyja jest domena?",
    a: "Twoja. Domenę zawsze rejestruję na Twoje dane, więc jest Twoją własnością i możesz ją w każdej chwili przenieść.",
  },
  {
    q: "Ile trwa realizacja?",
    a: "Projekt demo dostajesz w 48 godzin od rozmowy. Publikacja pod Twoją domeną następuje w ciągu 48 godzin od akceptacji projektu.",
  },
  {
    q: "Co jeśli projekt mi się nie spodoba?",
    a: "Nic nie płacisz. Demo jest darmowe i całkowicie niezobowiązujące — po prostu kończymy współpracę.",
  },
  {
    q: "Czy mogę później coś zmienić na stronie?",
    a: "Tak. W abonamencie drobne zmiany są w cenie. Przy zakupie jednorazowym wyceniam je indywidualnie, zawsze przed rozpoczęciem pracy.",
  },
  {
    q: "Czy obsługujecie firmy spoza Tarczyna?",
    a: "Tak. Pracuję zdalnie i obsługuję firmy z całej Polski — wystarczy rozmowa telefoniczna i kilka zdjęć. Do miejscowości z okolicy, takich jak Piaseczno, Grójec, Góra Kalwaria, Konstancin-Jeziorna, Nadarzyn, Pruszków czy Grodzisk Mazowiecki, mogę też po prostu przyjechać.",
  },
  {
    q: "Czy strona będzie na WordPressie?",
    a: "Nie. Robię strony statyczne, bez systemu zarządzania treścią. Są dzięki temu szybkie, bezpieczne i nie wymagają aktualizacji wtyczek. Minus jest jeden i mówię o nim wprost: treści nie zmieniasz samodzielnie w panelu. W abonamencie 199 zł/mies. drobne zmiany robię ja, do trzech miesięcznie w cenie; przy wariancie jednorazowym wyceniam je osobno.",
  },
  {
    q: "Czy strona albo wizytówka Google gwarantuje pierwsze miejsce w Google?",
    a: "Nie i nikomu tego nie obiecuję — kto obiecuje pozycję, sprzedaje ściemę. Strona dostaje przygotowanie techniczne pod wyszukiwarkę i zgłoszenie do Google, a pierwsze efekty na frazy lokalne widać zwykle po 4–12 tygodniach i zależą od tego, ilu masz konkurentów w okolicy. To samo dotyczy wizytówki Google: dbam o to, żeby była kompletna i aktywna, ale miejsca w wynikach nie gwarantuję.",
  },
];

const SINGLE_SERVICES = [
  {
    name: "Strona internetowa",
    benefit: "Wizytówka firmy w sieci, która realnie przynosi telefony.",
    price: "od 1500 zł",
    to: "/uslugi/strona-internetowa",
  },
  {
    name: "Poczta firmowa",
    benefit: "Adres e-mail na Twojej domenie zamiast prywatnej skrzynki.",
    price: "400 zł",
    to: "/uslugi/poczta-firmowa",
  },
  {
    name: "Pakiet Start Google",
    benefit: "Wizytówka w Mapach Google, żeby klienci z okolicy Cię znaleźli.",
    price: "od 400 zł",
    to: "/uslugi/pakiet-start-google",
  },
  {
    name: "Pozycjonowanie wizytówki Google",
    benefit: "Co miesiąc wpisy, zdjęcia, odpowiedzi na opinie i raport z Google.",
    price: "299 zł/mies.",
    to: "/uslugi/pozycjonowanie-wizytowki-google",
  },
  {
    name: "Projekt wizytówki",
    benefit: "Wizytówka, którą nie wstyd podać klientowi.",
    price: "250 zł",
    to: "/uslugi/projekt-wizytowki",
  },
  {
    name: "Projekt ulotki",
    benefit: "Ulotka gotowa do druku, czytelna i konkretna.",
    price: "300 zł",
    to: "/uslugi/projekt-ulotki",
  },
  {
    name: "Oznakowanie auta",
    benefit: "Twoje auto pracuje jako reklama na drodze.",
    price: "od 300 zł",
    to: "/uslugi/oznakowanie-auta",
  },
  {
    name: "Projekt logo",
    benefit: "Jeden znak, który zapamiętają klienci.",
    price: "800 zł",
    to: "/uslugi/projekt-logo",
  },
] as const;

const PACKAGES = [
  {
    name: "Start Online",
    desc: "Strona internetowa, firmowy e-mail na domenie i wizytówka Google.",
    separate: "2300 zł",
    bundle: "1990 zł",
    to: "/pakiety/start-online",
  },
  {
    name: "Firma Kompletna",
    desc: "Strona, poczta, wizytówka Google oraz projekty wizytówki i ulotki.",
    separate: "2850 zł",
    bundle: "2390 zł",
    to: "/pakiety/firma-kompletna",
  },
  {
    name: "Wizerunek",
    desc: "Wizytówka Google, projekt wizytówki i ulotki — dla firm, które mają już stronę.",
    separate: "950 zł",
    bundle: "820 zł",
    to: "/pakiety/wizerunek",
  },
  {
    name: "Materiały firmowe",
    desc: "Projekt wizytówki i ulotki gotowe do druku.",
    separate: "550 zł",
    bundle: "480 zł",
    to: "/pakiety/materialy-firmowe",
  },
  {
    name: "Identyfikacja",
    desc: "Logo, wizytówka i ulotka — spójny wygląd firmy.",
    separate: "1350 zł",
    bundle: "1200 zł",
    to: "/pakiety/identyfikacja",
  },
] as const;


function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-9 max-w-3xl md:mb-12">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="display text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold">{title}</h2>
      {lead ? <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{lead}</p> : null}
    </div>
  );

}

function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background pb-24 text-foreground lg:pb-0">
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-10">
          <a href="#top" className="display shrink-0 text-lg font-bold tracking-tight">
            SCS Web
          </a>
          <nav className="hidden min-w-0 items-center gap-6 lg:flex xl:gap-9">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground xl:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="tel:+48664013998"
              aria-label="Zadzwoń: +48 664 013 998"
              className="inline-flex min-h-[44px] items-center gap-2 px-1 text-base font-medium transition-opacity hover:opacity-70"
            >
              <Phone strokeWidth={1.5} className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">+48 664 013 998</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex min-h-[44px] items-center gap-2 bg-foreground px-5 py-3 text-sm font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Darmowe demo
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="border-b border-hairline">
          <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-6 pt-20 pb-20 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10 md:pt-28 md:pb-28">
            <Reveal>
              <p className="eyebrow mb-8">Strony dla lokalnych firm w Polsce</p>
              <h1 className="display text-[clamp(2.5rem,6vw,4.25rem)] font-bold">
                Profesjonalna strona dla Twojej firmy w 48 godzin
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Zobaczysz projekt, zanim zapłacisz. Bez ryzyka, bez zaliczek, bez abonamentu za samą
                stronę.
              </p>
              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 bg-foreground px-10 py-4 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Zamów darmowe demo
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#realizacje"
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 border border-foreground px-10 py-4 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
                >
                  Zobacz przykłady
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="/kalkulator"
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 border border-foreground px-10 py-4 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
                >
                  Policz swoją wycenę
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        {/* CZTERY ZALETY */}
        <section aria-label="Najważniejsze zalety" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
            <div className="grid gap-px bg-hairline sm:grid-cols-2">
              {ADVANTAGES.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="bg-background">
                  <div className={i === 0 ? "h-full p-6 md:p-8" : "h-full p-5 md:p-7"}>
                    <item.icon strokeWidth={1} className={i === 0 ? "h-9 w-9" : "h-7 w-7"} aria-hidden="true" />
                    <h3 className={`display mt-4 font-semibold ${i === 0 ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* JAK TO DZIAŁA */}
        <section id="jak-to-dziala" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
            <SectionHead
              eyebrow="Proces"
              title="Jak to działa"
              lead="Trzy proste kroki od pierwszej rozmowy do gotowej strony."
            />
            <ol>
              {STEPS.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 90}>
                  <div className="grid gap-3 border-t border-hairline py-6 md:grid-cols-12 md:gap-6 md:py-8">
                    <span className="display col-span-2 text-2xl font-semibold text-muted-foreground md:text-3xl">
                      {step.n}
                    </span>
                    <h3 className="display col-span-4 text-xl font-semibold md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="col-span-6 max-w-xl leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>

          </div>
        </section>

        {/* REALIZACJE */}
        <section id="realizacje" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
            <SectionHead
              eyebrow="Realizacje"
              title="Strony, które działają w sieci"
              lead="Adresy, pod które możesz wejść teraz i sprawdzić sam."
            />
            <div className="grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
              {REALIZACJE.map((r, i) => (
                <Reveal key={r.href} delay={i * 60} className="bg-background">
                  <RealizacjaCard r={r} />
                </Reveal>
              ))}
              {/* Pięć kart w siatce 2 albo 3 kolumn zostawia jedną pustą komórkę,
                  która świeciłaby kolorem kreski. Ten wypełniacz domyka rząd. */}
              <div className="hidden bg-background md:block" aria-hidden="true" />
            </div>

            {/* Podpisane referencje — świadomie TUTAJ, a nie w osobnej zakładce.
                Decyzja Kamila 29.09: menu było przeładowane, referencje mają
                siedzieć pod „Realizacje”. Osobna strona /referencje zostaje
                (jest w sitemapie i zgłoszona do indeksacji), ale bez pozycji w menu. */}
            {TESTIMONIALS.length > 0 && (
              <div className="mt-14 border-t border-hairline pt-14 md:mt-20 md:pt-20">
                <h3 className="display text-[clamp(1.5rem,3.2vw,2.2rem)] leading-tight font-bold">
                  Podpisane referencje
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  Skany dokumentów podpisanych przez klientów. Kliknij dowolny, żeby otworzyć
                  pełny plik PDF.
                </p>
                <div className="mt-8 grid gap-px bg-hairline md:grid-cols-2">
                  {TESTIMONIALS.map((t, i) => (
                    <Reveal key={`${t.name}-${t.company}`} delay={i * 60} className="bg-background">
                      <TestimonialCard t={t} />
                    </Reveal>
                  ))}
                </div>
                <Link
                  to="/referencje"
                  className="mt-8 inline-flex min-h-[44px] items-center gap-2 font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  Referencje na osobnej stronie
                  <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </section>

        <section id="projekty-przykladowe" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
            <SectionHead
              eyebrow="Projekty przykładowe"
              title="Zobacz, jak pracuję"
              lead="Przykładowe strony, które zaprojektowałem od zera. Kliknij dowolną, żeby zobaczyć ją w całości."
            />
            <div className="space-y-8 md:space-y-10">
              {CASES.map((c, i) => (
                <Reveal key={c.name} delay={i * 60}>
                  <Link
                    to={c.to}
                    className="group block border border-hairline-strong bg-secondary/20 transition-colors duration-200 hover:border-foreground/45 hover:bg-secondary/40 focus-visible:border-foreground/45"
                  >
                    <article className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                      <div className="p-3 md:border-r md:border-hairline md:p-4">
                        <div className="border border-hairline bg-[#0d0d0d]">
                          <div className="flex h-6 items-center gap-1.5 border-b border-hairline px-2.5">
                            <span className="h-1.5 w-1.5 border border-foreground/35" />
                            <span className="h-1.5 w-1.5 border border-foreground/25" />
                            <span className="h-1.5 w-1.5 border border-foreground/25" />
                            <span className="ml-3 text-[10px] text-muted-foreground">{c.url}</span>
                          </div>
                          <div className="aspect-[16/9] overflow-hidden">
                            <c.Preview />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center gap-4 border-t border-hairline p-5 md:border-t-0 md:p-7">
                        <div className="min-w-0">
                          <p className="eyebrow mb-2">{c.branch}</p>
                          <h3 className="display text-xl font-semibold md:text-2xl">{c.name}</h3>
                          <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                            {c.desc}
                          </p>
                          {"hint" in c && (
                            <p className="mt-2 text-sm font-medium text-foreground">
                              {c.hint}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="inline-flex min-h-[46px] w-fit items-center justify-center gap-3 bg-foreground px-6 py-3 text-base font-medium tracking-wide text-background transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-90">
                            Zobacz przykładową stronę
                            <span aria-hidden="true">→</span>
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Otworzy się pełna strona przykładowa
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 border-t border-hairline pt-5 text-sm text-muted-foreground">
              Projekty przykładowe, zaprojektowane od zera — Twoja strona powstanie tak samo,
              pod Twoją branżę i Twoich klientów.
            </p>

          </div>
        </section>

        {/* CENNIK */}
        <section id="cennik" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
            <SectionHead
              eyebrow="Cennik"
              title="Cennik"
              lead="Zacznij od samej strony albo złóż większy pakiet — wszystko z jasną ceną z góry."
            />
            <h3 className="display mb-5 text-xl font-semibold md:text-2xl">Sama strona</h3>
            <div className="grid gap-px bg-hairline md:grid-cols-2">
              <Reveal className="bg-background">
                <div className="flex h-full flex-col border border-hairline-strong p-6 md:p-8">
                  <p className="eyebrow mb-3">Jednorazowo</p>
                  <p className="display mb-4 text-lg font-semibold">Płacisz raz</p>
                  <p className="display text-[clamp(1.9rem,4vw,2.6rem)] font-bold">1500 zł</p>
                  <ul className="mt-6 space-y-3 text-muted-foreground">
                    <li className="flex gap-3 border-t border-hairline pt-4">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                      <span>Strona na własność — bez ukrytych warunków</span>
                    </li>
                    <li className="flex gap-3 border-t border-hairline pt-4">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                      <span>Publikacja pod Twoją domeną</span>
                    </li>
                    <li className="flex gap-3 border-t border-hairline pt-4">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                      <span>Potem jedyny stały koszt to domena, ok. 100–150 zł rocznie, rejestrowana na
                      Twoje dane</span>
                    </li>
                    <li className="flex gap-3 border-t border-hairline pt-4">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                      <span>Żadnego abonamentu za stronę</span>
                    </li>
                  </ul>
                  <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <a
                      href="#kontakt"
                      className="inline-flex min-h-[46px] w-fit items-center gap-3 border border-foreground px-7 py-3 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
                    >
                      Zamów darmowe demo
                      <span aria-hidden="true">→</span>
                    </a>
                    <Link
                      to="/uslugi/strona-internetowa"
                      className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
                    >
                      Co dokładnie zawiera strona →
                    </Link>
                  </div>

                </div>
              </Reveal>

              <Reveal delay={90} className="bg-background">
                <div className="flex h-full flex-col border border-foreground p-6 md:p-8">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="eyebrow">Abonament</p>
                    <span className="border border-foreground px-3 py-1 text-[10px] tracking-widest uppercase">
                      Bez kosztów na start
                    </span>
                  </div>
                  <p className="display mb-4 text-lg font-semibold">Płacisz miesięcznie</p>
                  <p className="display text-[clamp(1.9rem,4vw,2.6rem)] font-bold">
                    199 zł<span className="text-xl font-normal">/mies.</span>
                  </p>
                  <ul className="mt-6 space-y-3 text-muted-foreground">
                    <li className="flex gap-3 border-t border-hairline pt-4">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                      <span>0 zł na start</span>
                    </li>
                    <li className="flex gap-3 border-t border-hairline pt-4">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                      <span>Domena i hosting w cenie</span>
                    </li>
                    <li className="flex gap-3 border-t border-hairline pt-4">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                      <span>Drobne zmiany na stronie i opieka techniczna</span>
                    </li>
                    <li className="flex gap-3 border-t border-hairline pt-4">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                      <span>Żadnych dodatkowych kosztów — domena i serwer po naszej stronie</span>
                    </li>
                  </ul>
                  <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <a
                      href="#kontakt"
                      className="inline-flex min-h-[46px] w-fit items-center gap-3 bg-foreground px-7 py-3 text-base font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                    >
                      Zamów darmowe demo
                      <span aria-hidden="true">→</span>
                    </a>
                    <Link
                      to="/uslugi/strona-internetowa"
                      className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
                    >
                      Co dokładnie zawiera strona →
                    </Link>
                  </div>

                </div>
              </Reveal>
            </div>

            <h3 className="display mt-14 mb-2 text-xl font-semibold md:text-2xl">
              Usługi pojedynczo
            </h3>
            <p className="mb-5 max-w-2xl leading-relaxed text-muted-foreground">
              Wybierz tylko to, czego naprawdę potrzebujesz. Kliknij, żeby zobaczyć szczegóły.
            </p>
            <div className="border-t border-hairline">
              {SINGLE_SERVICES.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group flex min-h-[56px] flex-col gap-2 border-b border-hairline py-4 transition-colors hover:bg-foreground/5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-3.5"
                >
                  <span className="min-w-0">
                    <span className="display block text-lg font-semibold">{s.name}</span>
                    <span className="mt-0.5 block text-[0.95rem] leading-relaxed text-muted-foreground">
                      {s.benefit}
                    </span>
                  </span>
                  <span className="display flex shrink-0 items-center gap-4 text-lg font-bold">
                    {s.price}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <h3 className="display mt-14 mb-2 text-xl font-semibold md:text-2xl">
              Strony pod branżę
            </h3>
            <p className="mb-5 max-w-2xl leading-relaxed text-muted-foreground">
              Co powinna mieć strona w Twojej branży i czego klienci na niej szukają.
            </p>
            <div className="border-t border-hairline">
              {Object.values(BRANZE).map((b) => (
                <Link
                  key={b.slug}
                  to={`/branze/${b.slug}`}
                  className="group flex min-h-[56px] flex-col gap-2 border-b border-hairline py-4 transition-colors hover:bg-foreground/5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-3.5"
                >
                  <span className="min-w-0">
                    <span className="display block text-lg font-semibold">{b.listName}</span>
                    <span className="mt-0.5 block text-[0.95rem] leading-relaxed text-muted-foreground">
                      {b.listBenefit}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="display shrink-0 text-lg font-bold transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

            <h3 className="display mt-14 mb-2 text-xl font-semibold md:text-2xl">Pakiety</h3>
            <p className="mb-5 max-w-2xl leading-relaxed text-muted-foreground">
              Kilka usług razem taniej niż osobno.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PACKAGES.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="group flex min-h-[44px] flex-col justify-between gap-4 border border-hairline-strong bg-background p-6 transition-colors hover:border-[oklch(0.5_0_0)] hover:bg-foreground/5"
                >
                  <div>
                    <p className="display text-xl font-semibold">{p.name}</p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="border-t border-hairline pt-4">
                    <p className="text-muted-foreground line-through">osobno {p.separate}</p>
                    <p className="display mt-1 flex items-center justify-between gap-4 text-[clamp(1.5rem,3vw,2rem)] font-bold">
                      {p.bundle}
                      <span
                        aria-hidden="true"
                        className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 mb-16 flex flex-col items-start gap-6 border border-hairline-strong bg-secondary/25 p-7 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="display text-xl font-semibold md:text-2xl">
                  Nie wiesz, ile to wyjdzie u Ciebie? Policz w minutę.
                </p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Zaznaczasz, czego potrzebujesz — cena i rabat pakietowy liczą się od razu.
                </p>
              </div>
              <a
                href="/kalkulator"
                className="inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 bg-foreground px-8 py-4 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                Policz swoją wycenę
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <p className="mt-8 leading-relaxed text-muted-foreground">
              Nie wiesz, co wybrać? Zadzwoń — doradzę bez zobowiązań:{" "}
              <a
                href="tel:+48664013998"
                className="font-medium text-foreground underline underline-offset-8"
              >
                +48 664 013 998
              </a>
              .
            </p>
          </div>

        </section>

        {/* DLACZEGO */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
            <SectionHead
              eyebrow="Dlaczego SCS Web"
              title="Cztery powody, żeby zacząć"
              lead="Krótko: bez ryzyka, bez czekania i bez ukrytych kosztów."
            />
            <div className="grid gap-px bg-hairline sm:grid-cols-2">
              {WHY.map((item, i) => (
                <Reveal key={item.title} delay={i * 70} className="bg-background">
                  <div className="h-full p-6 md:p-8">
                    <item.icon strokeWidth={1} className="h-8 w-8" aria-hidden="true" />
                    <h3 className="display mt-6 text-lg font-semibold md:text-xl">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
            <SectionHead
              eyebrow="FAQ"
              title="Najczęstsze pytania"
              lead="Odpowiedzi na to, o co pytają najczęściej właściciele małych firm."
            />
            <div className="max-w-3xl">
              {FAQ.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className="border-t border-hairline last:border-b">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex min-h-[56px] w-full items-center justify-between gap-6 py-5 text-left transition-opacity hover:opacity-60"
                    >
                      <span className="display text-xl font-semibold md:text-2xl">{item.q}</span>
                      {isOpen ? (
                        <Minus strokeWidth={1.25} className="h-5 w-5 shrink-0" aria-hidden="true" />
                      ) : (
                        <Plus strokeWidth={1.25} className="h-5 w-5 shrink-0" aria-hidden="true" />
                      )}
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt">
          <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <Reveal>
                <p className="eyebrow mb-5">Kontakt</p>
                <h2 className="display text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold">
                  Zamów darmowe demo
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                  Napisz kilka zdań o swojej firmie. W 48 godzin dostaniesz link do gotowego projektu
                  strony — bez zaliczki i bez zobowiązań.
                </p>
                <div className="mt-10">
                  <p className="display text-xl font-semibold md:text-2xl">Kamil Pietraszko</p>
                  <div className="mt-4 space-y-2 text-2xl md:text-3xl">
                    <p>
                      <a href="tel:+48664013998" className="display inline-flex min-h-[48px] items-center font-semibold underline underline-offset-8 hover:opacity-70">
                        +48 664 013 998
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:kamil@scsweb.pl"
                        className="display inline-flex min-h-[48px] items-center break-all font-semibold underline underline-offset-8 hover:opacity-70"
                      >
                        kamil@scsweb.pl
                      </a>
                    </p>
                    <p>
                      <a
                        href={GOOGLE_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="display inline-flex min-h-[48px] items-center font-semibold underline underline-offset-8 hover:opacity-70"
                      >
                        Zobacz nas w Google
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={90}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="display text-base font-bold text-foreground">SCS Web</p>
            <p className="mt-2">Strony internetowe dla lokalnych firm</p>
            <p className="mt-3">
              <a href="/strony-internetowe" className="underline underline-offset-8 transition-colors hover:text-foreground">
                Strony internetowe w Twojej okolicy
              </a>
            </p>
          </div>
          <div className="space-y-1 md:text-right">
            <p className="text-foreground">Kamil Pietraszko</p>
            <p>Tarczyn, woj. mazowieckie</p>
            <p>tel. +48 664 013 998</p>
            <p>kamil@scsweb.pl</p>
            <p>
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-8 transition-colors hover:text-foreground"
              >
                Zobacz nas w Google
              </a>
            </p>
            <p className="pt-2">© 2026 SCS Web</p>
          </div>
        </div>
      </footer>

      <MobileBar />
    </div>
  );
}
