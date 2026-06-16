import PageShell from "../../components/PageShell";
import { company, contacts } from "../../content";

export const metadata = { title: "Политика конфиденциальности — Collabo Team" };

export default function Privacy() {
  return (
    <PageShell>
      <article className="container max-w-3xl py-16">
        <a href="/" className="t-label text-[var(--color-muted)] hover:underline">
          ← На главную
        </a>
        <h1 className="mt-6 t-title">
          Политика конфиденциальности
        </h1>
        <div className="mt-8 space-y-4 text-[var(--color-muted)]">
          <p>
            Настоящая Политика описывает, как {company.legalName} обрабатывает и
            защищает персональные данные пользователей сайта.
          </p>
          <p>
            Мы собираем только те данные, которые вы добровольно предоставляете
            при обращении к нам (например, имя и контактные данные), и используем
            их исключительно для связи и оказания услуг.
          </p>
          <p>
            Мы не передаём ваши данные третьим лицам, кроме случаев,
            предусмотренных законодательством Российской Федерации.
          </p>
          <p>
            По вопросам обработки персональных данных пишите на{" "}
            <a
              href={`mailto:${contacts.email}`}
              className="text-[var(--color-accent)] hover:underline"
            >
              {contacts.email}
            </a>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
