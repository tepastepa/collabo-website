import PageShell from "../../components/PageShell";
import { Icons, ArrowRight } from "../../components/icons";
import { gradely } from "../../content";

export const metadata = { title: `${gradely.name} — ${gradely.title}` };

export default function Gradely() {
  const p = gradely.palette;
  return (
    <PageShell>
      <div style={{ "--p": p.accent, "--p-deep": p.deep, "--p-soft": p.soft }}>
        {/* ---------- HERO (по центру) ---------- */}
        <section className="bg-[var(--p-deep)] text-white">
          <div className="container flex flex-col items-center pt-20 pb-0 text-center md:pt-24">
            <p className="t-label text-white/60">{gradely.name}</p>
            <h1 className="mt-4 max-w-3xl t-display">
              {gradely.title}
            </h1>
            <p className="mt-6 max-w-xl t-body text-white/75">
              {gradely.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {gradely.ctas.map((cta, i) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={`btn ${i === 0 ? "btn-light" : "btn-on-color"}`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
            <div className="-mb-16 mt-12 w-full overflow-hidden rounded-t-2xl md:-mb-24">
              <img src={gradely.image} alt={`Интерфейс ${gradely.name}`} className="w-full" />
            </div>
          </div>
        </section>

        {/* ---------- BENEFITS (bento) ---------- */}
        <section className="pt-28 md:pt-36">
          <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gradely.benefits.map((b) => {
              const Icon = Icons[b.icon];
              return (
                <div key={b.text} className="tile p-7">
                  {Icon && <Icon className="text-2xl text-[var(--p)]" aria-hidden="true" />}
                  <p className="mt-5 t-heading">{b.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- STEPS (зигзаг, заголовок по центру) ---------- */}
        <section className="mt-8 bg-[var(--p-soft)]">
          <div className="container py-20 md:py-28">
            <div className="section-head">
              <h2 className="t-title">
                {gradely.stepsTitle}
              </h2>
            </div>
            <div className="mt-16 flex flex-col gap-20 md:gap-28">
              {gradely.steps.map((step, i) => (
                <div
                  key={step.text}
                  className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-start gap-5">
                      <span className="t-display text-[var(--p)]">
                        0{i + 1}
                      </span>
                      <p className="max-w-xs pt-2 t-heading text-[var(--color-ink)]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`mx-auto w-full max-w-[300px] overflow-hidden rounded-3xl border border-[var(--color-ink)]/10 bg-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <img src={step.image} alt={step.text} className="w-full" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- TESTIMONIALS ---------- */}
        <section className="border-t border-[var(--color-ink)]/10">
          <div className="container py-20 md:py-28">
            <div className="section-head">
              <h2 className="t-title">
                {gradely.testimonialsTitle}
              </h2>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {gradely.testimonials.map((t) => (
                <figure key={t.author} className="tile p-8">
                  <blockquote className="t-heading">«{t.text}»</blockquote>
                  <figcaption className="mt-5 t-label text-[var(--color-muted)]">
                    {t.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA (по центру) ---------- */}
        <section className="bg-[var(--p-deep)] text-white">
          <div className="container flex flex-col items-center py-20 text-center md:py-24">
            <p className="max-w-2xl t-title">
              Попробуйте Грейдли в своём классе уже сегодня
            </p>
            <a href="/contacts" className="btn btn-light mt-9">
              Запросить демо
              <ArrowRight className="t-body" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ---------- DOCS ---------- */}
        <section className="border-t border-[var(--color-ink)]/10">
          <div className="container py-20 md:py-24">
            <div className="section-head">
              <h2 className="t-title">
                {gradely.docsTitle}
              </h2>
            </div>
            <ul className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--color-ink)]/10 border-y border-[var(--color-ink)]/10">
              {gradely.docs.map((d) => (
                <li key={d.href}>
                  <a
                    href={d.href}
                    className="group flex items-center justify-between py-5 t-body transition-colors hover:text-[var(--p)]"
                  >
                    <span>{d.label}</span>
                    <ArrowRight
                      className="t-body transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
