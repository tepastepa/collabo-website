"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function VacancyTabs({ openCount, archiveCount }) {
  const pathname = usePathname();
  const isArchive = pathname.startsWith("/vacancies/archive");

  return (
    <nav className="tab-bar" aria-label="Разделы вакансий">
      <Link
        href="/vacancies"
        className={`tab${!isArchive ? " tab-active" : ""}`}
        aria-current={!isArchive ? "page" : undefined}
      >
        Открытые вакансии
        <span className="tab-count">{openCount}</span>
      </Link>
      <Link
        href="/vacancies/archive"
        className={`tab${isArchive ? " tab-active" : ""}`}
        aria-current={isArchive ? "page" : undefined}
      >
        Архив
        <span className="tab-count">{archiveCount}</span>
      </Link>
    </nav>
  );
}
