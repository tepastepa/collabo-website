import VacancyCard from "../../components/VacancyCard";
import CtaBand from "../../components/CtaBand";
import { vacancies } from "../../content";

export default function VacanciesPage() {
  const { open, applyForm } = vacancies;

  return (
    <>
      {open.length === 0 ? (
        <div className="mx-auto max-w-lg py-8 text-center">
          <p className="t-heading">Сейчас нет открытых позиций</p>
          <p className="mt-3 t-body text-[var(--color-muted)]">
            Загляните в архив — всегда рады познакомиться с сильными
            специалистами.
          </p>
        </div>
      ) : (
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {open.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              vacancy={vacancy}
              formCopy={applyForm}
            />
          ))}
        </div>
      )}

      <div className="mt-8">
        <CtaBand />
      </div>
    </>
  );
}
