import { cta } from "../content";
import { ArrowRight } from "./icons";

// Закрывающая CTA-плашка — контейнер со скруглёнными углами.
export default function CtaBand() {
  return (
    <section className="container py-8 md:py-12">
      <div className="rounded-3xl bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="flex flex-col items-center px-8 py-16 text-center md:py-20">
          <h2 className="max-w-2xl t-title">{cta.title}</h2>
          <p className="mt-4 max-w-md text-white/60 t-body">{cta.text}</p>
          <a href={cta.href} className="btn btn-light mt-8">
            {cta.label}
            <ArrowRight className="text-lg" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
