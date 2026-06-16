import { cta } from "../content";
import { ArrowRight } from "./icons";

// Тёмная закрывающая плашка с призывом к действию (по центру).
export default function CtaBand() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-bg)]">
      <div className="container flex flex-col items-center py-20 text-center md:py-28">
        <h2 className="max-w-3xl t-title">
          {cta.title}
        </h2>
        <p className="mt-5 max-w-md text-white/60">{cta.text}</p>
        <a href={cta.href} className="btn btn-light mt-9">
          {cta.label}
          <ArrowRight className="t-body" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
