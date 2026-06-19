import PageShell from "../../components/PageShell";
import VacancyTabs from "../../components/VacancyTabs";
import { Icons } from "../../components/icons";
import { vacancies } from "../../content";

export const metadata = {
  title: "Вакансии — Collabo Team",
  description:
    "Открытые позиции в Collabo Team: разработка, дизайн, ML и продуктовые роли в компактных командах.",
};

export default function VacanciesLayout({ children }) {
  return (
    <PageShell>
      <section className="container flex flex-col items-center pt-20 pb-12 text-center md:pt-28 md:pb-16">
        <p className="t-label uppercase tracking-widest text-[var(--color-muted)]">
          {vacancies.eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl t-title">{vacancies.title}</h1>
        <p className="mt-6 max-w-2xl t-body text-[var(--color-muted)]">
          {vacancies.subtitle}
        </p>
        <div className="mt-10">
          <VacancyTabs
            openCount={vacancies.open.length}
            archiveCount={vacancies.archive.length}
          />
        </div>
      </section>

      <section className="border-t border-[var(--color-ink)]/10 bg-[var(--color-surface)]">
        <div className="container py-16 md:py-20">{children}</div>
      </section>

      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">{vacancies.perksTitle}</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {vacancies.perks.map((perk) => {
              const Icon = Icons[perk.icon];
              return (
                <div key={perk.title} className="tile p-8">
                  <div className="icon-box">
                    {Icon && <Icon aria-hidden="true" />}
                  </div>
                  <h3 className="mt-5 t-heading">{perk.title}</h3>
                  <p className="mt-2 text-[var(--color-muted)]">{perk.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
