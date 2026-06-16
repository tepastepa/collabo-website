import "./globals.css";
import localFont from "next/font/local";

// Единственный шрифт сайта — фирменный Struve (локальный).
const struve = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/Struve-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/Struve-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Struve-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/Struve-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/Struve-Bold.otf", weight: "700", style: "normal" },
  ],
});

export const metadata = {
  title: "Collabo Team — делаем из идей бизнесы",
  description:
    "Превращаем цифровые идеи в работающие продукты: автоматизация бизнеса, образовательные платформы и ИИ-инструменты.",
  icons: { icon: "/assets/logo.svg" },
  openGraph: {
    title: "Collabo Team — делаем из идей бизнесы",
    description:
      "Превращаем цифровые идеи в работающие продукты: автоматизация бизнеса, образовательные платформы и ИИ-инструменты.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={struve.variable}>
      <body>{children}</body>
    </html>
  );
}
