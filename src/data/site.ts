export const site = {
  name: "Alphacsoft",
  tagline: "Software House Lombok Timur",
  description:
    "Alphacsoft — jasa pembuatan aplikasi terpercaya, pembuatan website profesional, custom software, dan game development di Lombok Timur, NTB sejak 2016.",
  whatsappNumber: "6281234567890",
  whatsappMessage:
    "Halo Alphacsoft, saya tertarik untuk mendiskusikan proyek software.",
  email: "info@alphacsoft.com",
  address: "Jl. Cipto Mangunkusumo, Majidi, Lombok Timur, NTB 83619",
  website: "https://www.alphacsoft.com",
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
