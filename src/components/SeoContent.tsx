import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import { whatsappUrl } from "../data/site";

const keywordBlocks = [
  {
    title: "Jasa Pembuatan Aplikasi Terpercaya",
    text: "Alphacsoft adalah pilihan jasa pembuatan aplikasi terpercaya di Lombok Timur dan seluruh Indonesia. Kami mengembangkan aplikasi mobile Android & iOS, aplikasi web, dan sistem custom yang telah terbukti melalui produk Hisabia, Fathara.id, dan puluhan proyek klien sejak 2016.",
  },
  {
    title: "Jasa Pembuatan Website Profesional",
    text: "Butuh jasa pembuatan website untuk bisnis atau organisasi Anda? Alphacsoft menyediakan pembuatan website profesional — mulai dari landing page, company profile, portal admin, hingga platform SaaS. Setiap website dibangun dengan teknologi modern, responsif, dan dioptimalkan untuk SEO.",
  },
  {
    title: "Software House Lombok Timur, NTB",
    text: "Sebagai software house terkemuka di Lombok Timur, NTB, Alphacsoft melayani kebutuhan digital UMKM, pemerintahan, pendidikan, dan enterprise. Tim developer berpengalaman kami siap membantu transformasi digital bisnis Anda dengan solusi yang tepat guna dan berkualitas tinggi.",
  },
];

export default function SeoContent() {
  return (
    <section
      id="jasa-digital"
      className="relative scroll-mt-20 border-t border-alpha-100 py-20 lg:py-28"
      aria-label="Informasi layanan jasa pembuatan aplikasi dan website Alphacsoft"
    >
      <SectionTag label="Layanan Kami" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-alpha-950 sm:text-4xl">
            Alphacsoft — Partner Digital Terpercaya untuk Bisnis Anda
          </h2>
          <p className="mt-5 text-base leading-relaxed text-alpha-700">
            Sejak 2016, <strong>Alphacsoft</strong> membantu bisnis dan organisasi di Indonesia
            mewujudkan solusi digital. Dari <strong>pembuatan aplikasi</strong>,{" "}
            <strong>pembuatan website</strong>, custom software, hingga game development — semua
            dikerjakan oleh tim profesional berbasis di Lombok Timur, NTB.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {keywordBlocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-alpha-100 bg-alpha-50 p-6">
                <h3 className="text-lg font-extrabold text-alpha-950">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-alpha-700">{block.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-sm text-alpha-700">
            Cari <strong>jasa pembuatan aplikasi terpercaya</strong> atau{" "}
            <strong>jasa pembuatan website</strong> di Lombok, NTB, atau seluruh Indonesia?
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-alpha-600 px-8 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-alpha-700"
          >
            Konsultasi Gratis dengan Alphacsoft
          </a>
        </Reveal>
      </div>
    </section>
  );
}
