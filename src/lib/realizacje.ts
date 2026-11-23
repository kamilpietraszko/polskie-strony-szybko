// ============================================================
// NASZE REALIZACJE — strony, które faktycznie działają w sieci.
// To NIE są projekty przykładowe (te siedzą w CASES na stronie
// głównej i pod /demo/...). Tutaj wpisujemy wyłącznie adresy,
// pod którymi strona jest opublikowana i dostępna publicznie.
//
// Nowa pozycja = jeden wpis poniżej. Nic więcej nie trzeba
// zmieniać — sekcja na stronie głównej renderuje się z tej listy.
//
// `shot` to zrzut strony głównej z katalogu /public/realizacje/,
// zawsze 1200 x 532 px (okno 1536 x 674 bez paska przewijania).
// Kliknięcie w zrzut otwiera żywą stronę w nowej karcie.
// `caseHref` jest opcjonalne — jeśli jest, nazwa realizacji i link
// pod opisem prowadzą do naszej podstrony z szerszym opisem.
// ============================================================

export type Realizacja = {
  name: string;
  branch: string;
  url: string;
  href: string;
  desc: string;
  tag: string;
  shot: string;
  shotAlt: string;
  caseHref?: string;
};

export const REALIZACJE: Realizacja[] = [
  {
    name: "KartRace Series",
    branch: "Amatorska liga kartingowa — Warszawa i okolice",
    url: "kartraceseries.pl",
    href: "https://kartraceseries.pl",
    tag: "Projekt własny · najbardziej rozbudowany",
    desc: "Strona ligi na WordPressie z autorską wtyczką „KRS Wyniki”. Klasyfikacja generalna i wyniki każdej rundy pobierają się same z arkusza Excel co 15 minut, zawodnik rozwija własną kartę z punktami i najlepszym okrążeniem, a przycisk „Udostępnij” generuje w przeglądarce gotową grafikę na relację. Do tego kalendarz, tory, dane strukturalne i polityka prywatności. Ligę współzałożyłem — to projekt własny, nie zlecenie.",
    shot: "/realizacje/kartrace.jpg",
    shotAlt: "Strona główna kartraceseries.pl — ciemny hero z napisem Kart Race Series i gokartem",
    caseHref: "/realizacje/kartrace-series/",
  },
  {
    name: "SP Trans",
    branch: "Sprzedaż pojazdów użytkowych — Kopana k. Warszawy",
    url: "sp-trans-easy-drive.lovable.app",
    href: "https://sp-trans-easy-drive.lovable.app",
    tag: "Katalog z wyszukiwarką",
    desc: "Katalog około dziewięćdziesięciu pojazdów — ciężarówek, busów, ciągników siodłowych i naczep — z wyszukiwarką filtrującą po typie pojazdu, marce i cenie maksymalnej oraz osobną kartą każdego pojazdu. Dowód, że ta technologia udźwignie coś większego niż wizytówka.",
    shot: "/realizacje/sp-trans.jpg",
    shotAlt: "Strona główna SP Trans — wyszukiwarka używanych pojazdów użytkowych",
  },
  {
    name: "DK-BUD Damian Kasiarz",
    branch: "Usługi koparką i brukarstwo — Stargard",
    url: "dk-bud.com.pl",
    href: "https://dk-bud.com.pl",
    tag: "Wdrożenie u klienta",
    desc: "Strona jednostronicowa pod własną domeną klienta: siedem usług, galeria realizacji z powiększaniem zdjęć, formularz kontaktowy wysyłający zgłoszenia prosto na skrzynkę właściciela i polityka prywatności. Zaprojektowana od zera, opublikowana we wrześniu 2026.",
    shot: "/realizacje/dk-bud.jpg",
    shotAlt: "Strona główna dk-bud.com.pl — czarno-złoty hero z logo DK-BUD",
  },
  {
    name: "Wygodnia.pl",
    branch: "Sklep internetowy — artykuły do domu",
    url: "wygodnia.pl",
    href: "https://wygodnia.pl",
    tag: "Projekt własny",
    desc: "Działający sklep internetowy z katalogiem produktów, koszykiem i płatnościami online. Zbudowany i prowadzony przeze mnie — to moja własna firma, nie zlecenie.",
    shot: "/realizacje/wygodnia.jpg",
    shotAlt: "Strona główna wygodnia.pl — sklep internetowy z artykułami do domu",
  },
  {
    name: "Szkolniaki",
    branch: "Klub i sala zabaw dla dzieci — Grójec",
    url: "szkolniakigrojec.pl",
    href: "https://szkolniakigrojec.pl",
    tag: "Wdrożenie u klienta",
    desc: "Strona klubu pod nową domeną kupioną dla klientki: oferta animacyjna, urodziny, półkolonie, galeria z powiększaniem zdjęć, dane do rezerwacji i mapa dojazdu. Formularz kontaktowy ze zgodą RODO wysyła zgłoszenia prosto na skrzynkę właścicielki. Opublikowana i zgłoszona do Google w listopadzie 2026.",
    shot: "/realizacje/szkolniaki.jpg",
    shotAlt: "Strona główna szkolniakigrojec.pl — hero klubu Szkolniaki ze zdjęciem sali zabaw",
  },
];
