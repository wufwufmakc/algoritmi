export type LeadFormCode =
  | "callback_form_homepage"
  | "callback_form_contacts"
  | "callback_form_generic"
  | string;

export type LeadPayload = {
  name: string;
  phone: string;
  message?: string;
  formCode: LeadFormCode;
};

export type LeadResponse = { ok: true; leadId?: number } | { ok: false; error: string };

export async function submitBitrixLead(payload: LeadPayload): Promise<LeadResponse> {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const res = await fetch("/api/bitrix-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, pageUrl }),
  });
  try {
    const data = (await res.json()) as LeadResponse;
    // eslint-disable-next-line no-console
    console.log("[bitrix-lead] response:", data);
    return data;
  } catch {
    return { ok: false, error: "Ошибка ответа сервера" };
  }
}

export const LEAD_SUCCESS = "Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.";
export const LEAD_ERROR =
  "Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону.";
