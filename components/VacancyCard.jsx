import VacancyApplyForm from "./VacancyApplyForm";
import { Clock, Icons } from "./icons";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function VacancyList({ title, items, accent }) {
  if (!items?.length) return null;

  return (
    <div className="mt-8">
      <h3 className="t-label uppercase tracking-widest text-[var(--color-muted)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[var(--color-muted)]">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full"
              style={{ background: accent }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function VacancyCard({ vacancy, formCopy, archived = false }) {
  const Icon = Icons[vacancy.icon];

  return (
    <article
      className={`tile flex flex-col p-8 md:p-10 ${
        archived ? "opacity-75" : ""
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
            style={{
              background: vacancy.accent + (archived ? "12" : "1a"),
              color: vacancy.accent,
            }}
          >
            {Icon && <Icon style={{ fontSize: "1.35rem" }} aria-hidden="true" />}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-full px-3 py-1 t-label"
                style={{
                  background: vacancy.accent + "14",
                  color: vacancy.accent,
                }}
              >
                {vacancy.department}
              </span>
              {archived && (
                <span className="rounded-full bg-[var(--color-ink)]/8 px-3 py-1 t-label text-[var(--color-muted)]">
                  Закрыта
                </span>
              )}
            </div>
            <h2 className="mt-3 t-heading">{vacancy.title}</h2>
            <p className="mt-1 t-label text-[var(--color-muted)]">{vacancy.product}</p>
          </div>
        </div>

        <div className="text-right t-label text-[var(--color-muted)]">
          {archived ? (
            <>
              <p>Закрыта {formatDate(vacancy.closedAt)}</p>
              <p className="mt-1 opacity-70">Опубликована {formatDate(vacancy.postedAt)}</p>
            </>
          ) : (
            <p className="flex items-center justify-end gap-1.5">
              <Clock className="text-base" aria-hidden="true" />
              {formatDate(vacancy.postedAt)}
            </p>
          )}
        </div>
      </div>

      {vacancy.about && (
        <p className="mt-6 t-body text-[var(--color-muted)]">{vacancy.about}</p>
      )}

      {vacancy.workStyle && (
        <p className="mt-4 rounded-2xl bg-[var(--color-ink)]/[0.04] px-5 py-4 t-body text-[var(--color-muted)]">
          {vacancy.workStyle}
        </p>
      )}

      {vacancy.description && !vacancy.about && (
        <p className="mt-6 t-body text-[var(--color-muted)]">{vacancy.description}</p>
      )}

      {!archived && (
        <>
          <VacancyList
            title="Чем ты будешь заниматься"
            items={vacancy.responsibilities}
            accent={vacancy.accent}
          />
          <VacancyList
            title="Кого мы ищем"
            items={vacancy.requirements}
            accent={vacancy.accent}
          />
          <VacancyList
            title="Что мы предлагаем"
            items={vacancy.benefits}
            accent={vacancy.accent}
          />
        </>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[var(--color-ink)]/[0.06] px-3.5 py-1.5 t-label">
          {vacancy.location}
        </span>
        <span className="rounded-full bg-[var(--color-ink)]/[0.06] px-3.5 py-1.5 t-label">
          {vacancy.format}
        </span>
        {vacancy.experience && (
          <span className="rounded-full bg-[var(--color-ink)]/[0.06] px-3.5 py-1.5 t-label">
            Опыт {vacancy.experience}
          </span>
        )}
        {vacancy.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-3.5 py-1.5 t-label"
            style={{
              background: vacancy.accent + "10",
              color: archived ? "var(--color-muted)" : vacancy.accent,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {!archived && formCopy && (
        <VacancyApplyForm vacancy={vacancy} formCopy={formCopy} />
      )}
    </article>
  );
}
