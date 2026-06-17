import { useEffect, useState } from "react";
import { whatsappUrl } from "../data/site";
import Logo from "./Logo";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#tentang", label: "Tentang" },
  { href: "#faq", label: "FAQ" },
  { href: "#hubungi", label: "Hubungi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 shadow-sm shadow-alpha-900/5 backdrop-blur-md"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#beranda" className="flex items-center gap-3">
          <Logo size="md" className="shadow-lg shadow-alpha-500/25" />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-alpha-950 sm:text-base">
              Alphacsoft
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-alpha-600">
              Software House
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-alpha-800 transition-colors hover:text-alpha-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-alpha-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-alpha-700 sm:inline-block"
          >
            Konsultasi Gratis
          </a>
          <button
            type="button"
            aria-label="Buka menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-alpha-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-5 bg-alpha-950 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-5 bg-alpha-950 ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 bg-alpha-950 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-alpha-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-alpha-800 hover:bg-alpha-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-alpha-600 px-5 py-2.5 text-center text-sm font-bold text-white"
            >
              Konsultasi Gratis
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
