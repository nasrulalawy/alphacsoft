export type Service = {
  title: string;
  description: string;
  icon: "code" | "mobile" | "game" | "consult";
};

export const services: Service[] = [
  {
    title: "Custom Software",
    description:
      "Pengembangan sistem dan aplikasi web sesuai kebutuhan bisnis Anda — dari ERP, dashboard, hingga platform digital skala enterprise.",
    icon: "code",
  },
  {
    title: "Aplikasi Mobile",
    description:
      "Aplikasi Android dan iOS yang responsif, aman, dan siap produksi. Dibangun dengan teknologi modern untuk performa optimal.",
    icon: "mobile",
  },
  {
    title: "Game Development",
    description:
      "Divisi Alphac Studios — studio game pertama di Lombok. Edukasi, adventure, simulasi, hingga game FPS berkualitas.",
    icon: "game",
  },
  {
    title: "UI/UX & Konsultasi IT",
    description:
      "Desain antarmuka yang intuitif dan konsultasi strategi digital untuk membantu transformasi bisnis Anda ke era Industri 4.0.",
    icon: "consult",
  },
];
