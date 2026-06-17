export type Achievement = {
  year: string;
  title: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    year: "2016",
    title: "Alphacsoft Didirikan",
    description:
      "Tiga lulusan Teknik Universitas Hamzanwadi Pancor mendirikan Alphacsoft di Lombok Timur.",
  },
  {
    year: "2019",
    title: "Rekor MURI — Sitala",
    description:
      "Game Sitala memecahkan rekor MURI sebagai game lalu lintas dengan pemain terbanyak serentak di Polda Kalsel.",
  },
  {
    year: "2019",
    title: "Akuisisi Polda Kalsel",
    description:
      "Game edukasi Sitala diakuisisi oleh Polda Kalimantan Selatan sebagai media edukasi keselamatan berlalu lintas.",
  },
  {
    year: "2019",
    title: "Keynote Bekraf Developer Day",
    description:
      "CEO Alphacsoft, M. Nasrul Alawy, terpilih sebagai keynote speaker di Bekraf Developer Day Mataram 2019.",
  },
  {
    year: "2023",
    title: "Juara Dicoding Challenge",
    description:
      "Aplikasi Sampun (Sampah Untuk Negeri) memenangkan Indonesia Socioeconomic Expert Challenge dari Dicoding.",
  },
];

export const stats = [
  { value: "2016", label: "Tahun Berdiri" },
  { value: "50+", label: "Proyek Selesai" },
  { value: "1", label: "Rekor MURI" },
  { value: "SG+", label: "Klien Internasional" },
];

export const techStack = [
  "React.js",
  "TypeScript",
  "Python",
  "Golang",
  "Java",
  "Kotlin",
  "C#",
  "Flutter",
  "Dart",
  "Node.js",
  "PostgreSQL",
  "Docker",
];
