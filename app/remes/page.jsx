import PageShell from "../../components/PageShell";
import { Icons, ArrowRight } from "../../components/icons";
import { remes } from "../../content";

export const metadata = { title: `${remes.name} — ${remes.title}` };

export default function Remes() {
  const p = remes.palette;
  return (
    <PageShell>
      <div style={{ "--p": p.accent, "--p-deep": p.deep, "--p-soft": p.soft }}>
        {/* ---------- HERO (по центру) ---------- */}
        <section className="bg-[var(--p-deep)] text-white">
          <div className="container flex flex-col items-center pt-20 pb-0 text-center md:pt-24">
            <p className="t-label text-white/60">{remes.name}</p>
            <h1 className="mt-4 max-w-3xl t-display">
              {remes.title}
            </h1>
            <p className="mt-6 max-w-2xl t-body text-white/75">
              {remes.subtitle}
            </p>
            <a href="/contacts" className="btn btn-light mt-8">
              Связаться с нами
              <ArrowRight className="t-body" aria-hidden="true" />
            </a>
            <div className="-mb-16 mt-12 w-full overflow-hidden rounded-t-2xl border-x border-t border-white/10 md:-mb-24">
              <img src={remes.image} alt={`Интерфейс ${remes.name}`} className="w-full" />
            </div>
          </div>
        </section>

        {/* ---------- FEATURES (bento) ---------- */}
        <section className="pt-28 md:pt-36">
          <div className="container pb-20 md:pb-28">
            <div className="section-head">
              <h2 className="t-title">Возможности</h2>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {remes.features.map((f) => {
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

        {/* ---------- GALLERY ---------- */}
        {remes.gallery && (
          <section className="bg-[var(--p-soft)]">
            <div className="container py-20 md:py-28">
              <div className="section-head">
                <h2 className="t-title">
                  {remes.galleryTitle}
                </h2>
              </div>
              <div className="mt-14 grid gap-4 md:grid-cols-2">
                {remes.gallery.map((g) => (
                  <figure key={g.image} className="tile overflow-hidden">
                    <img src={g.image} alt={g.caption} className="w-full" loading="lazy" />
                    <figcaption className="p-5 t-label text-[var(--color-muted)]">
                      {g.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---------- PRICING (по центру) ---------- */}
        <section className="bg-[var(--p-deep)] text-white">
          <div className="container flex flex-col items-center py-20 text-center md:py-24">
            <p className="t-label uppercase tracking-widest text-white/60">
              {remes.pricingTitle}
            </p>
            <p className="mt-6 max-w-3xl t-title">
              {remes.pricing}
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
