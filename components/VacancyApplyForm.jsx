"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

export default function VacancyApplyForm({ vacancy, formCopy }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/vacancy-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vacancyId: vacancy.id,
          vacancyTitle: vacancy.title,
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          resume: data.get("resume"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || formCopy.error);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message || formCopy.error);
    }
  }

  if (status === "success") {
    return (
      <div
        className="mt-10 rounded-2xl px-6 py-8 text-center"
        style={{ background: vacancy.accent + "12" }}
      >
        <p className="t-body" style={{ color: vacancy.accent }}>
          {formCopy.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 border-t border-[var(--color-ink)]/10 pt-10">
      <h3 className="t-heading">{formCopy.title}</h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="field-label t-label text-[var(--color-muted)]" htmlFor={`name-${vacancy.id}`}>
            {formCopy.fields.name}
          </label>
          <input
            id={`name-${vacancy.id}`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field"
          />
        </div>

        <div className="sm:col-span-1">
          <label className="field-label t-label text-[var(--color-muted)]" htmlFor={`email-${vacancy.id}`}>
            {formCopy.fields.email}
          </label>
          <input
            id={`email-${vacancy.id}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field"
          />
        </div>

        <div className="sm:col-span-1">
          <label className="field-label t-label text-[var(--color-muted)]" htmlFor={`phone-${vacancy.id}`}>
            {formCopy.fields.phone}
            <span className="ml-1 opacity-60">({formCopy.optional})</span>
          </label>
          <input
            id={`phone-${vacancy.id}`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field"
          />
        </div>

        <div className="sm:col-span-1">
          <label className="field-label t-label text-[var(--color-muted)]" htmlFor={`resume-${vacancy.id}`}>
            {formCopy.fields.resume}
            <span className="ml-1 opacity-60">({formCopy.optional})</span>
          </label>
          <input
            id={`resume-${vacancy.id}`}
            name="resume"
            type="url"
            placeholder="https://"
            className="field"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="field-label t-label text-[var(--color-muted)]" htmlFor={`message-${vacancy.id}`}>
            {formCopy.fields.message}
            <span className="ml-1 opacity-60">({formCopy.optional})</span>
          </label>
          <textarea
            id={`message-${vacancy.id}`}
            name="message"
            className="field"
          />
        </div>
      </div>

      {/* Honeypot — скрыто от людей, ловит ботов */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="mt-4 t-label text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn mt-6 disabled:opacity-60"
        style={{ background: vacancy.accent, color: "#fff" }}
      >
        {status === "sending" ? formCopy.sending : formCopy.submit}
        <ArrowRight className="text-lg" aria-hidden="true" />
      </button>
    </form>
  );
}
