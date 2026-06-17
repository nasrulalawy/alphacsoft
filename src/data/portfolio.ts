export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  highlight?: string;
  url?: string;
  gradient: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Hisabia",
    category: "SaaS · Akuntansi & POS",
    description:
      "Platform terintegrasi untuk mengelola akuntansi, keuangan, inventori, POS, gudang, dan operasional bisnis — cocok untuk retail, F&B, grosir, dan UMKM.",
    highlight: "hisabia.biz.id",
    url: "https://hisabia.biz.id",
    gradient: "from-alpha-700 to-alpha-400",
  },
  {
    title: "Fathara.id",
    category: "SaaS · Manajemen Pesantren",
    description:
      "Sistem manajemen pondok pesantren terintegrasi dengan 12+ modul — keuangan KSPPS BMT RA, akademik, unit usaha, dan operasional santri dalam satu platform.",
    highlight: "fathara.id",
    url: "https://fathara.id",
    gradient: "from-accent-600 to-alpha-600",
  },
  {
    title: "Sitala",
    category: "Game Edukasi",
    description:
      "Game simulasi tertib dan aman berlalu lintas untuk Satlantas Polres Tanah Laut. Diakuisisi Polda Kalsel dan meraih rekor MURI.",
    highlight: "Rekor MURI 2019",
    gradient: "from-alpha-600 to-accent-500",
  },
  {
    title: "Sampun",
    category: "Aplikasi Sosial",
    description:
      "Aplikasi Sampah Untuk Negeri — solusi pengelolaan sampah digital. Juara Indonesia Socioeconomic Expert Challenge dari Dicoding.",
    highlight: "Juara Dicoding",
    gradient: "from-accent-500 to-alpha-400",
  },
  {
    title: "Hiyoko Adventures",
    category: "Game Adventure",
    description:
      "Game petualangan edukatif untuk anak-anak dengan gameplay yang menyenangkan dan pembelajaran interaktif.",
    gradient: "from-alpha-400 to-alpha-700",
  },
  {
    title: "Lendo & Adipati",
    category: "Game Lokal",
    description:
      "Game dengan nuansa budaya lokal Lombok yang sedang dikembangkan untuk menghadirkan pengalaman gaming unik dari Nusa Tenggara Barat.",
    gradient: "from-alpha-800 to-accent-600",
  },
];
