import { company, contacts, site, products } from "../content";
import { Phone, Mail, Pin, ArrowRight } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-ink)] bg-[var(--color-bg)]">
      <div className="container py-20 md:py-24">
        {/* Колонки */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="t-label uppercase text-[var(--color-muted)]">
              Навигация
            </p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="t-body hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="t-label uppercase text-[var(--color-muted)]">
              Продукты
            </p>
            <ul className="mt-5 space-y-3">
              {products.items.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="t-body hover:underline">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="t-label uppercase text-[var(--color-muted)]">
              Контакты
            </p>
            <ul className="mt-5 space-y-3 t-body">
              <li>
                <a href={contacts.phoneHref} className="hover:underline">
                  {contacts.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacts.email}`} className="hover:underline">
                  {contacts.email}
                </a>
              </li>
              <li className="text-[var(--color-muted)]">
                {contacts.address}
              </li>
            </ul>
          </div>

          <div>
            <p className="t-label uppercase text-[var(--color-muted)]">
              Документы
            </p>
            <ul className="mt-5 space-y-3 t-body">
              {company.footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Реквизиты */}
        <div className="flex flex-col gap-3 border-t border-[var(--color-ink)]/15 pt-8 t-label text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
          <span>{company.copyright}</span>
          <span>
            {company.legalName} · ИНН {company.inn} · ОГРН {company.ogrn} · ОКВЭД{" "}
            {company.okved}
          </span>
        </div>
      </div>
    </footer>
  );
}
