const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  if (clean(body.company)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const resume = clean(body.resume);
  const message = clean(body.message);
  const vacancyTitle = clean(body.vacancyTitle);
  const vacancyId = clean(body.vacancyId);

  if (!name || !email || !vacancyTitle || !vacancyId) {
    return Response.json({ error: "Заполните обязательные поля" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Укажите корректный email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.VACANCY_APPLY_TO;

  if (!apiKey || !from || !to) {
    console.error("Vacancy apply: missing RESEND_API_KEY, RESEND_FROM or VACANCY_APPLY_TO");
    return Response.json({ error: "Сервис временно недоступен" }, { status: 503 });
  }

  const text = [
    `Вакансия: ${vacancyTitle}`,
    `ID: ${vacancyId}`,
    "",
    `Имя: ${name}`,
    `Email: ${email}`,
    phone ? `Телефон: ${phone}` : null,
    resume ? `Резюме: ${resume}` : null,
    "",
    message ? `Сопроводительное письмо:\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Отклик: ${vacancyTitle}`,
      text,
    }),
  });

  if (!response.ok) {
    console.error("Resend error:", response.status, await response.text());
    return Response.json({ error: "Не удалось отправить отклик" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
