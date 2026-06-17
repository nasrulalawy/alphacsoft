import Reveal from "./Reveal";
import { site } from "../data/site";
import { Check, Users, Trophy } from "./icons";
import SectionTag from "./SectionTag";

const highlights = [
  "Studio game pertama di Lombok — Alphac Studios",
  "Pengalaman klien lokal hingga internasional",
  "Rekor MURI untuk game edukasi Sitala",
  "Keynote speaker Bekraf Developer Day 2019",
  "Platform SaaS: Hisabia & Fathara.id",
];

export default function About() {
  return (
    <section id="tentang" className="relative scroll-mt-20 py-20 lg:py-28">
      <SectionTag label="Tentang" tone="cyan" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-alpha-600">
              Siapa Kami
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-alpha-950 sm:text-4xl">
              Solusi Digital dari Lombok untuk Indonesia & Dunia
            </h2>
            <p className="mt-5 text-base leading-relaxed text-alpha-700/80">
              Alphacsoft didirikan pada tahun {site.founded} di Lombok Timur oleh tiga lulusan
              Teknik Universitas Hamzanwadi Pancor. Berawal dari passion coding dan game
              development, kini kami melayani klien dari berbagai sektor — pemerintahan, pendidikan,
              hingga enterprise internasional.
            </p>
            <p className="mt-4 text-base leading-relaxed text-alpha-700/80">
              Di bawah kepemimpinan {site.ceo}, Alphacsoft terus berinovasi menghadirkan produk
              digital yang tidak hanya fungsional, tetapi juga berdampak — seperti game edukasi
              Sitala yang diakuisisi Polda Kalsel dan meraih rekor MURI.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-alpha-100 text-alpha-600">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-medium text-alpha-800">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-alpha-600 p-6 text-white">
                <Users className="h-8 w-8 text-accent-300" />
                <p className="mt-4 text-3xl font-extrabold">3+</p>
                <p className="mt-1 text-sm font-medium text-alpha-200">Founder & Tim Inti</p>
              </div>
              <div className="rounded-2xl bg-accent-500 p-6 text-white">
                <Trophy className="h-8 w-8 text-white/80" />
                <p className="mt-4 text-3xl font-extrabold">MURI</p>
                <p className="mt-1 text-sm font-medium text-accent-100">Rekor Nasional</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-alpha-100 bg-alpha-50 p-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-alpha-600">
                  Alphac Studios
                </p>
                <p className="mt-2 text-lg font-extrabold text-alpha-950">
                  Divisi Game Development
                </p>
                <p className="mt-2 text-sm leading-relaxed text-alpha-700/75">
                  Studio game pertama di Lombok. Mengembangkan game edukasi, adventure, simulasi,
                  hingga FPS — menghadirkan pengalaman gaming berkualitas dari Nusa Tenggara Barat.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
