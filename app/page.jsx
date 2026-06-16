import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBand from "../components/CtaBand";
import { ArrowRight, Icons } from "../components/icons";
import { hero, mission, products, team } from "../content";

export default function Home() {
  const [featured, ...rest] = products.items;
  return (
    <div id="top">
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="container flex flex-col items-center pt-20 pb-20 text-center md:pt-28 md:pb-28">
        <h1 className="max-w-[16ch] t-display">
          Делаем из идей бизнесы
        </h1>
        <p className="mt-8 max-w-xl t-body text-[var(--color-muted)]">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={hero.cta.href} className="btn">
            {hero.cta.label}
            <ArrowRight className="text-lg" aria-hidden="true" />
          </a>
          <a href="#products" className="btn-soft">
            Наши продукты
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 t-label">
          {hero.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--color-ink)]" />
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- MISSION ---------- */}
      <section className="bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="container flex flex-col items-center py-20 text-center md:py-28">
          <p className="t-label uppercase tracking-widest text-white/40">
            {mission.title}
          </p>
          <p className="mt-6 max-w-4xl t-title">{mission.text}</p>
        </div>
      </section>

      {/* ---------- PRODUCTS bento ---------- */}
      <section id="products" className="container py-20 md:py-28">
        <div className="section-head">
          <h2 className="t-title">{products.title}</h2>
          <p className="mt-5 t-body text-[var(--color-muted)]">
            {products.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {/* Широкая плитка — первый продукт */}
          <a
            href={featured.href}
            className="tile tile-hover group overflow-hidden md:col-span-2 md:grid md:grid-cols-2"
          >
            <ProductImage p={featured} className="min-h-[240px]" />
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="t-label" style={{ color: featured.accent }}>
                {featured.tagline}
              </span>
              <h3 className="mt-2 t-title">{featured.name}</h3>
              <p className="mt-4 max-w-md t-body text-[var(--color-muted)]">
                {featured.text}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 font-medium underline-offset-4 group-hover:underline">
                Подробнее
                <ArrowRight
                  className="text-lg transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </a>

          {/* Остальные плитки */}
          {rest.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="tile tile-hover group flex flex-col overflow-hidden"
            >
              <ProductImage p={p} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-8">
                <span className="t-label" style={{ color: p.accent }}>
                  {p.tagline}
                </span>
                <h3 className="mt-2 t-heading">{p.name}</h3>
                <p className="mt-3 t-body text-[var(--color-muted)]">{p.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-medium underline-offset-4 group-hover:underline">
                  Подробнее
                  <ArrowRight
                    className="text-lg transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- VACANCIES ---------- */}
      <section id="team" className="border-t border-[var(--color-ink)]/10 bg-[var(--color-surface)]">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">{team.title}</h2>
            <p className="mt-5 t-body text-[var(--color-muted)]">
              {team.subtitle}
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {team.roles.map((role) => {
              const Icon = Icons[role.icon];
              return (
                <div key={role.title} className="tile p-8">
                  {Icon && <Icon className="text-2xl" aria-hidden="true" />}
                  <h3 className="mt-6 t-heading">{role.title}</h3>
                  <p className="mt-3 text-[var(--color-muted)]">{role.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}

// Плитка с изображением или цветным заглушкой (для продуктов без мокапа).
function ProductImage({ p, className = "" }) {
  if (p.image) {
    return (
      <div className={`overflow-hidden bg-white ${className}`}>
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: p.accent }}
    >
      <span
        className="t-display select-none opacity-20"
        style={{ color: "#fff", fontSize: "clamp(3rem, 10vw, 7rem)" }}
      >
        {p.name.split(".")[0]}
      </span>
    </div>
  );
}
