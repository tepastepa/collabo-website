import VacancyCard from "../../../components/VacancyCard";
import { vacancies } from "../../../content";

export const metadata = {
  title: "Архив вакансий — Collabo Team",
  description: "Ранее опубликованные вакансии Collabo Team.",
};

export default function VacanciesArchivePage() {
  const { archive } = vacancies;

  return (
    <>
      {archive.length === 0 ? (
        <div className="mx-auto max-w-lg py-8 text-center">
          <p className="t-heading">Архив пока пуст</p>
          <p className="mt-3 t-body text-[var(--color-muted)]">
            Закрытые вакансии появятся здесь после завершения набора.
          </p>
        </div>
      ) : (
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <p className="mb-2 text-center t-label text-[var(--color-muted)]">
            {archive.length}{" "}
            {archive.length === 1
              ? "закрытая позиция"
              : archive.length < 5
                ? "закрытые позиции"
                : "закрытых позиций"}
          </p>
          {archive.map((vacancy) => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} archived />
          ))}
        </div>
      )}
    </>
  );
}
