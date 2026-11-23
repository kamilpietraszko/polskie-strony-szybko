import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/scs/PageShell";
import { TESTIMONIALS } from "@/lib/testimonials";
import { TestimonialCard } from "@/components/scs/TestimonialCard";
import { REALIZACJE } from "@/lib/realizacje";
import { RealizacjaCard } from "@/components/scs/RealizacjaCard";

const TITLE = "Referencje i opinie klientów — SCS Web";
const DESCRIPTION =
  "Opinie firm, dla których zrobiłem stronę internetową, oraz adresy działających realizacji SCS Web. Bez wymyślonych cytatów — publikuję wyłącznie to, co klient sam napisał.";
const URL = "https://scsweb.pl/referencje/";

export const Route = createFileRoute("/referencje")({
  component: ReferencjePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    // Bez JSON-LD `Review`. Google zgłosił 30.09 błąd „Wiele weryfikacji bez
    // obiektu aggregateRating". Nie dodajemy aggregateRating, bo nasze
    // referencje nie mają ocen liczbowych — wymyślona średnia byłaby
    // nieprawdą. Poza tym od 2019 r. Google i tak nie pokazuje gwiazdek dla
    // opinii o firmie umieszczonych na jej własnej stronie („self-serving
    // reviews"), więc ta schema nic tu nie dawała poza błędem w GSC.
    // Widoczne karty referencji i skany PDF zostają bez zmian.
    // Szczegóły: claude/gsc-fragmenty-opinii-30-09.md
  }),
});

function ReferencjePage() {
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <p className="eyebrow mb-3">Referencje</p>
          <h1 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] font-bold">
            Co mówią firmy, dla których zrobiłem stronę
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Publikuję wyłącznie to, co klient sam napisał, pod swoim imieniem i nazwą firmy, razem
            z adresem strony — żeby każdy mógł sprawdzić. Żadnych wymyślonych cytatów i żadnych
            opinii „zadowolonego klienta z Warszawy”.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          {TESTIMONIALS.length > 0 ? (
            <div className="grid gap-px bg-hairline md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <div key={`${t.name}-${t.company}`} className="bg-background">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-hairline-strong bg-secondary/20 p-6 md:p-10">
              <h2 className="display text-2xl font-semibold">Pierwsze referencje są w drodze</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                SCS Web działa od sierpnia 2026 i pierwsze strony właśnie ruszyły. Poprosiłem
                klientów o kilka zdań o współpracy — pojawią się tutaj, gdy je odeślą. Do tego
                czasu zamiast cytatów zostawiam coś bardziej konkretnego: adresy stron, które
                możesz sprawdzić sam.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <p className="eyebrow mb-3">Realizacje</p>
          <h2 className="display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">
            Strony, które działają w sieci
          </h2>
          <div className="mt-10 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {REALIZACJE.map((r) => (
              <div key={r.href} className="bg-background">
                <RealizacjaCard r={r} />
              </div>
            ))}
            {/* Wypełniacz domykający ostatni rząd — patrz komentarz na stronie głównej. */}
            <div className="hidden bg-background md:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <h2 className="display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">
            Chcesz zobaczyć projekt swojej strony?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Przygotowuję go w 48 godzin i pokazuję, zanim zapłacisz choćby złotówkę.
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
