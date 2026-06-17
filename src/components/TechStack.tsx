import Reveal from "./Reveal";
import { techStack } from "../data/achievements";
import SectionTag from "./SectionTag";

export default function TechStack() {
  return (
    <section className="relative bg-alpha-950 py-20 lg:py-28">
      <SectionTag label="Teknologi" tone="cyan" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-accent-300">
            Tech Stack
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Teknologi yang Kami Kuasai
          </h2>
          <p className="mt-4 text-base leading-relaxed text-alpha-300">
            Kami menggunakan teknologi modern dan teruji untuk memastikan setiap produk
            berperforma tinggi, aman, dan mudah dikembangkan.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent-400/50 hover:bg-accent-500/10 hover:text-accent-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
