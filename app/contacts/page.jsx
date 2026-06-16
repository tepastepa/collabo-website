import PageShell from "../../components/PageShell";
import { Phone, Mail, Pin } from "../../components/icons";
import { contacts, company } from "../../content";

export const metadata = { title: "Контакты — Collabo Team" };

export default function Contacts() {
  return (
    <PageShell>
      {/* ---------- HERO (по центру) ---------- */}
      <section className="container flex flex-col items-center pt-20 pb-16 text-center md:pt-28 md:pb-20">
        <h1 className="t-display">
          {contacts.title}
        </h1>
        <p className="mt-6 max-w-xl t-body text-[var(--color-muted)]">
          {contacts.lead}
        </p>
      </section>

      {/* ---------- МЕТОДЫ (bento) ---------- */}
      <section className="container pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          <a href={contacts.phoneHref} className="tile tile-hover p-8">
            <Phone className="text-2xl" aria-hidden="true" />
            <p className="mt-6 t-label uppercase text-[var(--color-muted)]">
              Телефон
            </p>
            <p className="mt-2 t-heading">{contacts.phone}</p>
          </a>
          <a href={`mailto:${contacts.email}`} className="tile tile-hover p-8">
            <Mail className="text-2xl" aria-hidden="true" />
            <p className="mt-6 t-label uppercase text-[var(--color-muted)]">
              Почта
            </p>
            <p className="mt-2 t-heading break-all">{contacts.email}</p>
          </a>
          <div className="tile p-8">
            <Pin className="text-2xl" aria-hidden="true" />
            <p className="mt-6 t-label uppercase text-[var(--color-muted)]">
              Адрес
            </p>
            <p className="mt-2 text-[var(--color-muted)]">{contacts.address}</p>
          </div>
        </div>
      </section>

      {/* ---------- РЕКВИЗИТЫ ---------- */}
      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-24">
          <div className="section-head">
            <h2 className="t-title">Реквизиты</h2>
          </div>
          <dl className="mx-auto mt-12 max-w-2xl divide-y divide-[var(--color-ink)]/10 border-y border-[var(--color-ink)]/10 text-[var(--color-muted)]">
            {[
              ["Организация", company.legalName],
              ["ИНН", company.inn],
              ["КПП", company.kpp],
              ["ОГРН", company.ogrn],
              ["ОКВЭД", company.okved],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-3.5">
                <dt>{k}</dt>
                <dd className="font-medium text-[var(--color-ink)]">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mx-auto mt-6 max-w-2xl text-center t-label text-[var(--color-muted)]">
            {contacts.minctifry}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
