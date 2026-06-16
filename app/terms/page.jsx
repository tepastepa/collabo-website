import PageShell from "../../components/PageShell";
import { company, contacts } from "../../content";

export const metadata = { title: "Условия использования — Collabo Team" };

export default function Terms() {
  return (
    <PageShell>
      <article className="container max-w-3xl py-16">
        <a href="/" className="t-label text-[var(--color-muted)] hover:underline">
          ← На главную
        </a>
        <h1 className="mt-6 t-title">
          Условия использования
        </h1>
        <div className="mt-8 space-y-4 text-[var(--color-muted)]">
          <p>
            Используя сайт {company.legalName}, вы соглашаетесь с настоящими
            условиями. Весь контент сайта предоставляется в информационных целях.
          </p>
          <p>
            Все материалы сайта являются собственностью компании. Копирование и
            использование материалов без согласия правообладателя не допускается.
          </p>
          <p>
            Компания вправе изменять содержание сайта и настоящие условия в любое
            время без предварительного уведомления.
          </p>
          <p>
            По всем вопросам свяжитесь с нами:{" "}
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
