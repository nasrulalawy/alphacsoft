import Reveal from "./Reveal";
import { achievements } from "../data/achievements";
import SectionTag from "./SectionTag";

export default function Achievements() {
  return (
    <section id="prestasi" className="relative scroll-mt-20 py-20 lg:py-28">
      <SectionTag label="Prestasi" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-alpha-600">
            Perjalanan Kami
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-alpha-950 sm:text-4xl">
            Pencapaian & Milestone
          </h2>
          <p className="mt-4 text-base leading-relaxed text-alpha-700/80">
            Dari startup kecil di Lombok hingga diakui nasional — setiap langkah membentuk
            Alphacsoft yang ada hari ini.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-4 top-0 hidden h-full w-0.5 bg-alpha-200 sm:left-1/2 sm:block sm:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {achievements.map((item, i) => (
              <Reveal key={`${item.year}-${item.title}`} delay={i * 80}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                    i % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />
                  <div
                    className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}
                  >
                    <div className="rounded-2xl border border-alpha-100 bg-white p-6 shadow-sm">
                      <span className="inline-block rounded-full bg-alpha-100 px-3 py-1 text-xs font-extrabold text-alpha-700">
                        {item.year}
                      </span>
                      <h3 className="mt-3 text-lg font-extrabold text-alpha-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-alpha-700/75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-alpha-600 shadow-md sm:left-1/2 sm:block"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
