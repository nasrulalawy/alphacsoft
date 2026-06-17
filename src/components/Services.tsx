import Reveal from "./Reveal";
import { services } from "../data/services";
import { Code, Smartphone, Gamepad, Lightbulb } from "./icons";
import SectionTag from "./SectionTag";

const iconMap = {
  code: Code,
  mobile: Smartphone,
  game: Gamepad,
  consult: Lightbulb,
};

export default function Services() {
  return (
    <section id="layanan" className="relative scroll-mt-20 py-20 lg:py-28">
      <SectionTag label="Layanan" tone="cyan" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-alpha-600">
            Apa yang Kami Tawarkan
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-alpha-950 sm:text-4xl">
            Layanan Pengembangan Digital
          </h2>
          <p className="mt-4 text-base leading-relaxed text-alpha-700/80">
            Dari ide hingga produk siap pakai — kami mendampingi setiap tahap pengembangan
            software Anda dengan tim berpengalaman.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-alpha-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-alpha-200 hover:shadow-lg hover:shadow-alpha-600/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-alpha-100 text-alpha-600 transition-colors group-hover:bg-alpha-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-alpha-950">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-alpha-700/75">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
