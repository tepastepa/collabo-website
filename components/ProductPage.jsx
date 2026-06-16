import PageShell from "./PageShell";
import { Icons, ArrowRight } from "./icons";

// Единый шаблон для всех продуктовых страниц.
// Опциональные секции: image, status, ctas, benefits, steps, features,
// showcase, gallery, testimonials, outro, pricing, closingTitle, closingCta, docs, externalUrl

function ClosingBand({ product }) {
  if (product.outro) {
    return (
      <section className="bg-[var(--p-deep)] text-white">
        <div className="container flex flex-col items-center py-20 text-center md:py-24">
          <p className="max-w-3xl t-title">{product.outro}</p>
          <a href="/contacts" className="btn btn-light mt-9">
            Связаться с нами
            <ArrowRight className="text-lg" aria-hidden="true" />
          </a>
        </div>
      </section>
    );
  }
  if (product.pricing) {
    return (
      <section className="bg-[var(--p-deep)] text-white">
        <div className="container flex flex-col items-center py-20 text-center md:py-24">
          <p className="t-label uppercase tracking-widest text-white/60">
            {product.pricingTitle}
          </p>
          <p className="mt-6 max-w-3xl t-title">{product.pricing}</p>
          <a href="/contacts" className="btn btn-light mt-9">
            Оставить заявку
            <ArrowRight className="text-lg" aria-hidden="true" />
          </a>
        </div>
      </section>
    );
  }
  const title = product.closingTitle || "Расскажите о своей задаче";
  const cta = product.closingCta || { label: "Связаться с нами", href: "/contacts" };
  return (
    <section className="bg-[var(--p-deep)] text-white">
      <div className="container flex flex-col items-center py-20 text-center md:py-24">
        <p className="max-w-2xl t-title">{title}</p>
        <a href={cta.href} className="btn btn-light mt-9">
          {cta.label}
          <ArrowRight className="text-lg" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default function ProductPage({ product }) {
  const p = product.palette;
  const hasHangingImage = !!product.image;

  return (
    <PageShell>
      <div style={{ "--p": p.accent, "--p-deep": p.deep, "--p-soft": p.soft }}>

        {/* ---- HERO ---- */}
        <section className="bg-[var(--p-deep)] text-white">
          <div className="container flex flex-col items-center pt-20 pb-0 text-center md:pt-24">
            {product.status && (
              <span
                className="mb-4 rounded-full px-4 py-1 t-label"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                {product.status}
              </span>
            )}
            <p className="t-label text-white/60">{product.name}</p>
            <h1 className="mt-4 max-w-3xl t-display">{product.title}</h1>
            <p className="mt-6 max-w-xl t-body text-white/75">{product.subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {product.ctas ? (
                product.ctas.map((cta, i) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={`btn ${i === 0 ? "btn-light" : "btn-on-color"}`}
                  >
                    {cta.label}
                  </a>
                ))
              ) : (
                <a href="/contacts" className="btn btn-light">
                  Связаться с нами
                  <ArrowRight className="text-lg" aria-hidden="true" />
                </a>
              )}
            </div>
            {hasHangingImage && (
              <div className="-mb-16 mt-12 w-full overflow-hidden rounded-t-2xl border-x border-t border-white/10 md:-mb-24">
                <img
                  src={product.image}
                  alt={`Интерфейс ${product.name}`}
                  className="w-full"
                />
              </div>
            )}
            {/* Пустое дно для продуктов без мокапа */}
            {!hasHangingImage && <div className="h-12 md:h-16" />}
          </div>
        </section>

        {/* ---- BENEFITS ---- */}
        {product.benefits && (
          <section className={hasHangingImage ? "pt-28 md:pt-36" : "pt-12"}>
            <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.benefits.map((b) => {
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
        )}

        {/* ---- STEPS ---- */}
        {product.steps && (
          <section className="mt-8 bg-[var(--p-soft)]">
            <div className="container py-20 md:py-28">
              <div className="section-head">
                <h2 className="t-title">{product.stepsTitle || "Как это работает"}</h2>
              </div>
              <div className="mt-16 flex flex-col gap-20 md:gap-28">
                {product.steps.map((step, i) => (
                  <div
                    key={step.text}
                    className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
                  >
                    <div className={i % 2 === 1 ? "md:order-2" : ""}>
                      <div className="flex items-start gap-5">
                        <span className="t-display text-[var(--p)]">0{i + 1}</span>
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
                      <img
                        src={step.image}
                        alt={step.text}
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---- FEATURES ---- */}
        {product.features && (
          <section className="border-t border-[var(--color-ink)]/10">
            <div className="container py-20 md:py-28">
              <div className="section-head">
                <h2 className="t-title">
                  {product.featuresTitle || "Возможности"}
                </h2>
              </div>
              <div
                className={`mt-14 grid gap-4 ${
                  product.features.length <= 4
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {product.features.map((f) => {
                  const Icon = Icons[f.icon];
                  return (
                    <div key={f.title} className="tile p-8">
                      {Icon && (
                        <Icon className="text-2xl text-[var(--p)]" aria-hidden="true" />
                      )}
                      <h3 className="mt-4 t-heading">{f.title}</h3>
                      <p className="mt-3 text-[var(--color-muted)]">{f.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ---- SHOWCASE (zigzag) ---- */}
        {product.showcase &&
          product.showcase.map((s, i) => (
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

        {/* ---- GALLERY ---- */}
        {product.gallery && (
          <section className="bg-[var(--p-soft)]">
            <div className="container py-20 md:py-28">
              <div className="section-head">
                <h2 className="t-title">{product.galleryTitle || "Экраны"}</h2>
              </div>
              <div className="mt-14 grid gap-4 md:grid-cols-2">
                {product.gallery.map((g) => (
                  <figure key={g.image} className="tile overflow-hidden">
                    <img
                      src={g.image}
                      alt={g.caption}
                      className="w-full"
                      loading="lazy"
                    />
                    <figcaption className="p-5 t-label text-[var(--color-muted)]">
                      {g.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---- TESTIMONIALS ---- */}
        {product.testimonials && (
          <section className="border-t border-[var(--color-ink)]/10">
            <div className="container py-20 md:py-28">
              <div className="section-head">
                <h2 className="t-title">
                  {product.testimonialsTitle || "Отзывы"}
                </h2>
              </div>
              <div className="mt-14 grid gap-4 md:grid-cols-3">
                {product.testimonials.map((t) => (
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
        )}

        {/* ---- CLOSING BAND ---- */}
        <ClosingBand product={product} />

        {/* ---- DOCS ---- */}
        {product.docs && (
          <section className="border-t border-[var(--color-ink)]/10">
            <div className="container py-20 md:py-24">
              <div className="section-head">
                <h2 className="t-title">{product.docsTitle || "Документация"}</h2>
              </div>
              <ul className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--color-ink)]/10 border-y border-[var(--color-ink)]/10">
                {product.docs.map((d) => (
                  <li key={d.href}>
                    <a
                      href={d.href}
                      className="group flex items-center justify-between py-5 t-body transition-colors hover:text-[var(--p)]"
                    >
                      <span>{d.label}</span>
                      <ArrowRight
                        className="text-lg transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ---- EXTERNAL LINK ---- */}
        {product.externalUrl && (
          <section className="border-t border-[var(--color-ink)]/10">
            <div className="container flex justify-center py-12">
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: p.deep, color: "#fff" }}
              >
                Перейти на сайт {product.name}
                <ArrowRight className="text-lg" aria-hidden="true" />
              </a>
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}
