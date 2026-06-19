// Запрет индексации всего сайта для поисковиков и веб-архивов.
export default function robots() {
  return {
    rules: [
      { userAgent: "*", disallow: "/" },
      { userAgent: "ia_archiver", disallow: "/" },
      { userAgent: "archive.org_bot", disallow: "/" },
    ],
  };
}
