import { site } from "../content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <a href="/" aria-label={site.brand} className="flex items-center">
          {/* Фирменный логотип-вордмарк (как в оригинале) */}
          <img src="/assets/logo.svg" alt={site.brand} className="h-6 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 t-label md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--color-ink)]/70 transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/contacts" className="btn-soft px-5 py-2.5 text-[0.9rem]">
          Связаться
        </a>
      </div>
    </header>
  );
}
