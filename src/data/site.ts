export const site = {
  name: "Alphacsoft",
  tagline: "Software House Lombok Timur",
  description:
    "Alphacsoft — software house di Lombok Timur yang menghadirkan solusi custom software, aplikasi mobile, dan game development untuk klien lokal hingga internasional.",
  whatsappNumber: "6281234567890",
  whatsappMessage:
    "Halo Alphacsoft, saya tertarik untuk mendiskusikan proyek software.",
  email: "info@alphacsoft.com",
  address: "Jl. Cipto Mangunkusumo, Majidi, Lombok Timur, NTB 83619",
  website: "https://alphacsoft.com",
  ceo: "M. Nasrul Alawy",
  founded: 2016,
  social: {
    github: "https://github.com/alalawy",
    instagram: "#",
    linkedin: "#",
  },
} as const;

export function whatsappUrl(message = site.whatsappMessage) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
