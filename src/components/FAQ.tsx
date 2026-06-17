import { useState } from "react";
import Reveal from "./Reveal";
import { faqItems } from "../data/faq";
import { ChevronDown } from "./icons";
import SectionTag from "./SectionTag";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 bg-alpha-50 py-20 lg:py-28">
      <SectionTag label="FAQ" tone="cyan" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-alpha-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-alpha-950 sm:text-4xl">
            Pertanyaan Seputar Jasa Pembuatan Aplikasi &amp; Website
          </h2>
          <p className="mt-4 text-base leading-relaxed text-alpha-700/80">
            Jawaban untuk pertanyaan umum tentang Alphacsoft sebagai software house terpercaya
            di Lombok Timur.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 50}>
                <article
                  className={`rounded-2xl border transition-colors ${
                    isOpen ? "border-alpha-300 bg-white" : "border-alpha-100 bg-white"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-extrabold text-alpha-950 sm:text-base">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-alpha-500 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-alpha-700/80">
                      {item.answer}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
