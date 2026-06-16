import PageShell from "./PageShell";

// Рендерит тело секции: абзацы, маркированные списки и подписанные группы списков.
function Body({ paragraphs, list, groups, note }) {
  return (
    <>
      {paragraphs &&
        paragraphs.map((p, i) => (
          <p key={i} className="mt-3 leading-relaxed text-[var(--color-muted)]">
            {p}
          </p>
        ))}

      {list && (
        <ul className="mt-3 space-y-2">
          {list.map((item, i) => (
            <li key={i} className="flex gap-3 text-[var(--color-muted)]">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-ink)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {groups &&
        groups.map((g, i) => (
          <div key={i} className="mt-5">
            <p className="font-medium text-[var(--color-ink)]">{g.label}</p>
            <ul className="mt-2 space-y-2">
              {g.list.map((item, j) => (
                <li key={j} className="flex gap-3 text-[var(--color-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-ink)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

      {note && (
        <p className="mt-4 border-l-2 border-[var(--color-ink)] bg-[var(--color-surface)] px-4 py-3 t-label text-[var(--color-ink)]">
          {note}
        </p>
      )}
    </>
  );
}

// Документ: заголовок + вступление + секции (с подсекциями любого уровня).
export default function DocPage({
  doc,
  back = { href: "/gradely", label: "← К продукту Грейдли" },
}) {
  return (
    <PageShell>
      <article className="container max-w-3xl py-16 md:py-20">
        <a
          href={back.href}
          className="t-label text-[var(--color-muted)] hover:underline"
        >
          {back.label}
        </a>
        <h1 className="mt-6 t-title">
          {doc.title}
        </h1>

        {doc.intro && (
          <p className="mt-6 t-body text-[var(--color-muted)]">
            {doc.intro}
          </p>
        )}

        <Body
          paragraphs={doc.paragraphs}
          list={doc.list}
          groups={doc.groups}
          note={doc.note}
        />

        {doc.sections &&
          doc.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="border-t border-[var(--color-ink)] pt-5 t-heading">
                {section.heading}
              </h2>
              <Body
                paragraphs={section.paragraphs}
                list={section.list}
                groups={section.groups}
                note={section.note}
              />

              {section.subsections &&
                section.subsections.map((sub) => (
                  <div key={sub.heading} className="mt-7">
                    <h3 className="t-heading">{sub.heading}</h3>
                    <Body
                      paragraphs={sub.paragraphs}
                      list={sub.list}
                      groups={sub.groups}
                      note={sub.note}
                    />
                  </div>
                ))}
            </section>
          ))}
      </article>
    </PageShell>
  );
}
