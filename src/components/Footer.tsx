import { MapPin, Mail, Github, Instagram, Linkedin } from "./icons";
import { site } from "../data/site";
import Logo from "./Logo";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#faq", label: "FAQ" },
];

const services = [
  "Jasa Pembuatan Aplikasi",
  "Jasa Pembuatan Website",
  "Custom Software",
  "Game Development",
  "UI/UX Design",
  "Konsultasi IT",
];

export default function Footer() {
  return (
    <footer className="bg-alpha-950 text-alpha-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo size="lg" />
            <div className="leading-tight">
              <p className="text-base font-extrabold text-white">{site.name}</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent-400">
                {site.tagline}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-alpha-300">
            Software house di Lombok Timur yang menghadirkan solusi digital berkualitas —
            dari custom software, aplikasi mobile, hingga game development melalui Alphac Studios.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Alphacsoft"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-white"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Alphacsoft"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-white"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Alphacsoft"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-white"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Navigasi</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-alpha-300 transition-colors hover:text-accent-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Layanan</h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service} className="text-sm font-medium text-alpha-300">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Kontak</h3>
          <div className="mt-5 flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
            <p className="text-sm leading-relaxed text-alpha-300">{site.address}</p>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Mail className="h-5 w-5 shrink-0 text-accent-400" />
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-alpha-300 transition-colors hover:text-accent-300"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs font-medium text-alpha-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} PT. Alphacsoft Digital Indonesia. Hak cipta dilindungi.</p>
          <p>
            Dibangun dengan dedikasi di{" "}
            <span className="font-bold text-accent-400">Lombok Timur, NTB</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
