import PageShell from "../../components/PageShell";
import { Icons, ArrowRight } from "../../components/icons";
import { roooms } from "../../content";

export const metadata = { title: `${roooms.name} — ${roooms.title}` };

export default function Roooms() {
  const p = roooms.palette;
  return (
    <PageShell>
      <div style={{ "--p": p.accent, "--p-deep": p.deep, "--p-soft": p.soft }}>
        {/* ---------- HERO (по центру) ---------- */}
        <section className="bg-[var(--p-soft)]">
          <div className="container flex flex-col items-center py-24 text-center md:py-32">
            <p className="t-label text-[var(--p)]">{roooms.name}</p>
            <h1 className="mt-4 max-w-3xl t-display">
              {roooms.title}
            </h1>
            <p className="mt-6 max-w-xl t-body text-[var(--color-muted)]">
              {roooms.subtitle}
            </p>
            {roooms.status && (
              <span
                className="mt-8 rounded-full px-5 py-2 t-label"
                style={{ background: "color-mix(in srgb, var(--p) 14%, transparent)", color: p.deep }}
              >
                {roooms.status}
              </span>
            )}
          </div>
        </section>

        {/* ---------- ZIG-ZAG SHOWCASE ---------- */}
        {roooms.showcase.map((s, i) => (
          <section key={s.title} className="border-t border-[var(--color-ink)]/10">
            <div className="container grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28">
              <div
                className={`tile overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img src={s.image} alt={s.title} className="w-full" loading="lazy" />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="t-title">{s.title}</h2>
                <p className="mt-5 max-w-md t-body text-[var(--color-muted)]">
                  {s.text}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* ---------- FEATURES (bento) ---------- */}
        <section className="border-t border-[var(--color-ink)]/10 bg-[var(--p-soft)]">
          <div className="container py-20 md:py-28">
            <div className="section-head">
              <h2 className="t-title">Почему Рууумс</h2>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {roooms.features.map((f) => {
                const Icon = Icons[f.icon];
                return (
                  <div key={f.title} className="tile p-8">
                    {Icon && <Icon className="text-2xl text-[var(--p)]" aria-hidden="true" />}
                    <h3 className="mt-4 t-heading">{f.title}</h3>
                    <p className="mt-3 text-[var(--color-muted)]">{f.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- OUTRO / CTA (по центру) ---------- */}
        <section className="bg-[var(--p-deep)] text-white">
          <div className="container flex flex-col items-center py-20 text-center md:py-24">
            <p className="max-w-3xl t-title">
              {roooms.outro}
            </p>
            <a href="/contacts" className="btn btn-light mt-9">
              Связаться с нами
              <ArrowRight className="t-body" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
