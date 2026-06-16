import PageShell from "../../components/PageShell";
import CtaBand from "../../components/CtaBand";
import { Icons } from "../../components/icons";
import { about } from "../../content";

export const metadata = { title: "О компании — Collabo Team" };

export default function About() {
  return (
    <PageShell>
      {/* ---------- HERO — по центру ---------- */}
      <section className="container flex flex-col items-center pt-20 pb-20 text-center md:pt-28 md:pb-24">
        <p className="t-label uppercase text-[var(--color-muted)]">
          {about.eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl t-display">
          {about.title}
        </h1>
        <p className="mt-8 max-w-2xl t-body text-[var(--color-muted)]">
          {about.lead}
        </p>
      </section>

      {/* ---------- DIRECTIONS — bento ---------- */}
      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">
              {about.directionsTitle}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.directions.map((d) => {
              const Icon = Icons[d.icon];
              return (
                <div key={d.title} className="tile tile-hover p-8">
                  {Icon && <Icon className="text-2xl" aria-hidden="true" />}
                  <h3 className="mt-5 t-heading">{d.title}</h3>
                  <p className="mt-2 text-[var(--color-muted)]">{d.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- PRINCIPLES — тёмная плашка ---------- */}
      <section className="bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">
              {about.principlesTitle}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.principles.map((pr, i) => (
              <div
                key={pr}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <span className="t-heading text-white/30">0{i + 1}</span>
                <p className="mt-6 t-heading">{pr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STACK — bento с тегами ---------- */}
      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">
              {about.stackTitle}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.stack.map((s) => (
              <div key={s.group} className="tile p-8">
                <h3 className="t-label font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                  {s.group}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full bg-[var(--color-ink)]/[0.06] px-3.5 py-1.5 t-label"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING — bento ---------- */}
      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">
              {about.pricingTitle}
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            {about.pricing.map((pmodel, i) => (
              <div
                key={pmodel}
                className="tile flex items-baseline gap-5 p-8"
              >
                <span className="t-heading text-[var(--color-ink)]/25">
                  0{i + 1}
                </span>
                <span className="t-heading">
                  {pmodel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
