import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBand from "../components/CtaBand";
import { ArrowRight, Icons } from "../components/icons";
import { hero, mission, products, team } from "../content";

// Компактные сервисы (inline — не загрязняем content.js)
const SERVICES = [
  { icon: "globe",   title: "Веб-продукты",          text: "Сайты, порталы, SaaS-платформы" },
  { icon: "phone",   title: "Мобильные приложения",   text: "iOS и Android, нативно и кросс" },
  { icon: "cpu",     title: "ИИ и LLM",              text: "Модели, агенты, автоматизация" },
  { icon: "chart",   title: "Аналитика",              text: "Дашборды, метрики, инсайты" },
  { icon: "code",    title: "Разработка на заказ",    text: "Полный цикл: архитектура → релиз" },
  { icon: "layers",  title: "Геосервисы",             text: "Карты, геоданные, маршрутизация" },
];

export default function Home() {
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
          <a href="#products" className="btn-soft">Наши продукты</a>
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
          <p className="t-label uppercase tracking-widest text-white/40">{mission.title}</p>
          <p className="mt-6 max-w-4xl t-title">{mission.text}</p>
        </div>
      </section>

      {/* ---------- SERVICES bento ---------- */}
      <section className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">Чем мы занимаемся</h2>
            <p className="mt-5 t-body text-[var(--color-muted)]">
              Полный цикл создания цифровых продуктов
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = Icons[s.icon];
              return (
                <div key={s.title} className="tile p-8">
                  <div className="icon-box">
                    {Icon && <Icon aria-hidden="true" />}
                  </div>
                  <h3 className="mt-5 t-heading">{s.title}</h3>
                  <p className="mt-2 text-[var(--color-muted)]">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- PRODUCTS bento ---------- */}
      <section id="products" className="border-t border-[var(--color-ink)]/10">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">{products.title}</h2>
            <p className="mt-5 t-body text-[var(--color-muted)]">{products.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.items.map((p) => {
              const Icon = Icons[p.icon];
              return (
                <a
                  key={p.name}
                  href={p.href}
                  className="tile tile-hover group flex flex-col p-8"
                >
                  {/* Логотип */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: p.accent + "1a", color: p.accent }}
                  >
                    {Icon && <Icon style={{ fontSize: "1.35rem" }} aria-hidden="true" />}
                  </div>

                  {/* Тег */}
                  <span
                    className="mt-5 self-start rounded-full px-3 py-1 t-label"
                    style={{ background: p.accent + "18", color: p.accent }}
                  >
                    {p.tagline}
                  </span>

                  {/* Название */}
                  <h3 className="mt-3 t-heading">{p.name}</h3>

                  {/* Описание */}
                  <p className="mt-3 t-body text-[var(--color-muted)] flex-1">
                    {p.text}
                  </p>

                  {/* Кнопка */}
                  <div className="mt-7">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 t-label font-medium text-white transition-opacity group-hover:opacity-85"
                      style={{ background: p.accent }}
                    >
                      Подробнее
                      <ArrowRight className="text-base transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- VACANCIES ---------- */}
      <section id="team" className="border-t border-[var(--color-ink)]/10 bg-[var(--color-surface)]">
        <div className="container py-20 md:py-28">
          <div className="section-head">
            <h2 className="t-title">{team.title}</h2>
            <p className="mt-5 t-body text-[var(--color-muted)]">{team.subtitle}</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {team.roles.map((role) => {
              const Icon = Icons[role.icon];
              return (
                <div key={role.title} className="tile p-8">
                  <div className="icon-box">
                    {Icon && <Icon aria-hidden="true" />}
                  </div>
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

