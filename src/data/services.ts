export type Service = {
  title: string;
  description: string;
  icon: "code" | "mobile" | "game" | "consult";
  seoTitle: string;
};

export const services: Service[] = [
  {
    title: "Custom Software",
    seoTitle: "Jasa Pembuatan Software & Sistem",
    description:
      "Jasa pembuatan software dan sistem custom sesuai kebutuhan bisnis — ERP, dashboard, manajemen data, hingga platform digital enterprise seperti Hisabia dan Fathara.id.",
    icon: "code",
  },
  {
    title: "Aplikasi Mobile",
    seoTitle: "Jasa Pembuatan Aplikasi Mobile Terpercaya",
    description:
      "Jasa pembuatan aplikasi Android dan iOS yang responsif, aman, dan siap produksi. Dibangun dengan React Native, Flutter, Java/Kotlin untuk performa optimal.",
    icon: "mobile",
  },
  {
    title: "Pembuatan Website",
    seoTitle: "Jasa Pembuatan Website Profesional",
    description:
      "Jasa pembuatan website profesional — company profile, landing page, e-commerce, portal bisnis, dan web app dengan desain modern dan SEO-friendly.",
    icon: "consult",
  },
  {
    title: "Game Development",
    seoTitle: "Jasa Pembuatan Game — Alphac Studios",
    description:
      "Divisi Alphac Studios — studio game pertama di Lombok. Game edukasi, adventure, simulasi, hingga FPS. Portofolio: Sitala (Rekor MURI), Hiyoko Adventures.",
    icon: "game",
  },
];
