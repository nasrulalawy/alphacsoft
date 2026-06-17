import Reveal from "./Reveal";
import { MessageCircle, ArrowUpRight } from "./icons";
import { whatsappUrl } from "../data/site";

export default function CTA() {
  return (
    <section id="hubungi" className="scroll-mt-20 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-alpha-950 px-8 py-16 text-center sm:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-alpha-600/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-accent-400">
              Mulai Proyek Anda
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Punya Ide Digital? Mari Wujudkan Bersama
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-alpha-200">
              Konsultasikan kebutuhan software, aplikasi mobile, atau game Anda secara gratis.
              Tim Alphacsoft siap mendampingi dari perencanaan hingga peluncuran produk.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-400"
              >
                <MessageCircle className="h-5 w-5" />
                Chat via WhatsApp
              </a>
              <a
                href="#portofolio"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                Lihat Portofolio
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
