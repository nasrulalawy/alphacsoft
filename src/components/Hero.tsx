import Reveal from "./Reveal";
import { Sparkles, ShieldCheck, Globe } from "./icons";
import { stats } from "../data/achievements";
import { whatsappUrl } from "../data/site";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-130 w-130 rounded-full bg-alpha-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-100/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-alpha-200 bg-alpha-50 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-alpha-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-alpha-700">
              Software House · Lombok Timur, NTB
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-alpha-950 sm:text-5xl xl:text-6xl">
            <span className="text-alpha-600">Alphacsoft</span> — Jasa Pembuatan Aplikasi &amp;{" "}
            <span className="relative inline-block">
              Website Terpercaya
              <svg
                className="absolute -bottom-2 left-0 w-full text-accent-400"
                viewBox="0 0 200 10"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8c50-6 146-6 196-2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-alpha-800 sm:text-lg">
            <strong>Alphacsoft</strong> — software house di Lombok Timur sejak 2016. Jasa{" "}
            <strong>pembuatan aplikasi</strong>, <strong>pembuatan website</strong>, custom
            software, dan game development untuk UMKM, pemerintahan, hingga klien internasional.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-accent-500/30 transition-all hover:-translate-y-0.5 hover:bg-accent-400"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#portofolio"
              className="rounded-full border-2 border-alpha-200 px-7 py-3.5 text-sm font-bold text-alpha-800 transition-colors hover:border-alpha-400 hover:text-alpha-600"
            >
              Lihat Portofolio
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-alpha-100 pt-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-alpha-900 sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-alpha-700">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-alpha-200 via-alpha-50 to-accent-100"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2rem] bg-alpha-950 p-6 shadow-2xl shadow-alpha-900/30 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-medium text-alpha-300">alphacsoft — main.tsx</span>
              </div>

              <pre className="mt-5 overflow-hidden rounded-xl bg-alpha-900/80 p-4 text-[11px] leading-relaxed text-alpha-100 sm:text-xs">
                <code>{`const alphacsoft = {
  services: [
    "Custom Software",
    "Mobile Apps",
    "Game Development"
  ],
  location: "Lombok Timur, NTB",
  since: 2016,
  clients: ["Indonesia", "Singapore"],
  studio: "Alphac Studios"
};

alphacsoft.build(yourIdea);`}</code>
              </pre>

              <div className="mt-4 flex items-center gap-2 text-xs text-accent-300">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent-400" />
                Building your next project...
              </div>
            </div>

            <div className="absolute -top-5 -right-3 w-52 rounded-2xl bg-white p-4 shadow-xl shadow-alpha-900/10 sm:-right-8 animate-float">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-alpha-100 text-alpha-700">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-alpha-700">
                    Rekor MURI
                  </p>
                  <p className="text-xs font-semibold text-alpha-900">Game Sitala</p>
                </div>
              </div>
              <p className="mt-2 text-sm font-bold text-alpha-900">Edukasi Lalu Lintas</p>
              <p className="mt-1 text-[11px] font-medium text-alpha-600">Diakuisisi Polda Kalsel</p>
            </div>

            <div className="absolute -bottom-7 -left-3 flex items-center gap-3 rounded-2xl bg-alpha-600 p-3 pr-5 shadow-xl shadow-alpha-600/30 sm:-left-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                <Globe className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Klien Internasional</p>
                <p className="text-[11px] font-medium text-alpha-200">
                  Indonesia · Singapura · lebih
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
