import Reveal from "./Reveal";
import { portfolio } from "../data/portfolio";
import SectionTag from "./SectionTag";
import { ArrowUpRight } from "./icons";

export default function Portfolio() {
  return (
    <section id="portofolio" className="relative scroll-mt-20 bg-alpha-50 py-20 lg:py-28">
      <SectionTag label="Portofolio" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-alpha-600">
            Karya Terpilih
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-alpha-950 sm:text-4xl">
            Portofolio Proyek
          </h2>
          <p className="mt-4 text-base leading-relaxed text-alpha-700/80">
            Dari platform SaaS bisnis dan pesantren, game edukasi berprestasi, hingga aplikasi
            sosial — produk digital yang kami bangun dan kembangkan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => {
            const CardWrapper = item.url ? "a" : "article";
            const linkProps = item.url
              ? {
                  href: item.url,
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": `Kunjungi ${item.title}`,
                }
              : {};

            return (
              <Reveal key={item.title} delay={i * 80}>
                <CardWrapper
                  {...linkProps}
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-alpha-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-alpha-600/10 ${
                    item.url ? "cursor-pointer" : ""
                  }`}
                >
                  <div
                    className={`flex h-44 items-end bg-gradient-to-br ${item.gradient} p-6`}
                  >
                    <div className="w-full">
                      <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                        {item.category}
                      </span>
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                          {item.title}
                        </h3>
                        {item.url && (
                          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-sm leading-relaxed text-alpha-700/80">
                      {item.description}
                    </p>
                    {item.highlight && (
                      <span
                        className={`mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                          item.url
                            ? "bg-alpha-100 text-alpha-700 group-hover:bg-alpha-600 group-hover:text-white"
                            : "bg-accent-50 text-accent-700"
                        }`}
                      >
                        {item.url && <ArrowUpRight className="h-3.5 w-3.5" />}
                        {item.highlight}
                      </span>
                    )}
                  </div>
                </CardWrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
