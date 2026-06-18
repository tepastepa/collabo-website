import PageShell from "../../components/PageShell";
import CtaBand from "../../components/CtaBand";
import { Icons } from "../../components/icons";
import { about } from "../../content";

export const metadata = { title: "О компании — Collabo Team" };

export default function About() {
  return (
    <PageShell>
      {/* ---------- HERO ---------- */}
      <section className="container flex flex-col items-center pt-20 pb-20 text-center md:pt-28 md:pb-24">
        <p className="t-label uppercase text-[var(--color-muted)]">{about.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl t-title">{about.title}</h1>
        <p className="mt-8 max-w-2xl t-body text-[var(--color-muted)]">{about.lead}</p>
      </section>

      {/* ---------- DIRECTIONS bento ---------- */}
      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">{about.directionsTitle}</h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.directions.map((d) => {
              const Icon = Icons[d.icon];
              return (
                <div key={d.title} className="tile tile-hover p-8">
                  <div className="icon-box">
                    {Icon && <Icon aria-hidden="true" />}
                  </div>
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
            <h2 className="t-title">{about.principlesTitle}</h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.principles.map((pr, i) => (
              <div
                key={pr}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 min-h-[200px]"
              >
                <span className="t-title text-white/20">0{i + 1}</span>
                <p className="mt-auto pt-6 t-body">{pr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STACK bento ---------- */}
      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">{about.stackTitle}</h2>
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

      {/* ---------- PRICING bento ---------- */}
      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">{about.pricingTitle}</h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            {about.pricing.map((pmodel) => (
              <div key={pmodel.title} className="tile p-8">
                <h3 className="t-heading">{pmodel.title}</h3>
                <p className="mt-3 t-body text-[var(--color-muted)]">{pmodel.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
