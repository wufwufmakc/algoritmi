import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Loader2, PhoneCall, ShieldCheck, Sparkles, Building2, Eye, Rocket } from "lucide-react";
import { PhoneInput } from "@/components/PhoneInput";
import { ConsentCheckbox, CONSENT_REQUIRED_MSG } from "@/components/ConsentCheckbox";
import { isCompleteRuPhone, PHONE_INCOMPLETE_MSG } from "@/lib/phone";

const BITRIX_LEAD_ENDPOINT = "https://algff.bitrix24.ru/rest/171/byn2r62fvjj301yx/crm.lead.add.json";
const ERROR_MSG = "Не удалось отправить заявку. Попробуйте ещё раз.";

export function HomeCallbackSection() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const lastSubmitRef = useRef(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const now = Date.now();
    if (now - lastSubmitRef.current < 3000) return;
    lastSubmitRef.current = now;

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus({ type: "error", text: "Укажите имя и телефон" });
      return;
    }
    if (!isCompleteRuPhone(form.phone)) {
      setStatus({ type: "error", text: PHONE_INCOMPLETE_MSG });
      return;
    }
    if (!consent) {
      setStatus({ type: "error", text: CONSENT_REQUIRED_MSG });
      return;
    }

    setLoading(true);
    setStatus(null);

    const name = form.name.trim() || "Без имени";
    const phone = form.phone.trim();
    const message = form.message.trim();
    const PRODUCTION_URL = "https://algff.ru/";

    const payload = {
      fields: {
        TITLE: "Заявка с сайта Алгоритмы — обратный звонок",
        NAME: name,
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        COMMENTS: `Форма: callback_form_homepage\nСтраница: ${PRODUCTION_URL}\nКомментарий: ${message || "Не указан"}`,
        SOURCE_ID: "1",
        SOURCE_DESCRIPTION: "Форма обратного звонка с сайта Алгоритмы",
      },
    };

    try {
      const res = await fetch(BITRIX_LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data && !data.error && data.result) {
        setForm({ name: "", phone: "", message: "" });
        setConsent(false);
        navigate({ to: "/thank-you" });
        return;
      } else {
        setStatus({ type: "error", text: ERROR_MSG });
      }
    } catch (err) {
      console.error("[bitrix-lead] request failed:", err);
      setStatus({ type: "error", text: ERROR_MSG });
    } finally {
      setLoading(false);
    }
  };

  const trustPoints = [
    { icon: Building2, text: "Склад класса А в Шушарах" },
    { icon: Eye, text: "Прозрачная WMS-система" },
    { icon: Rocket, text: "Тестовый запуск без сложного старта" },
  ];

  const fieldStyle = {
    background: "hsl(222 35% 9%)",
    border: "1px solid hsl(222 25% 22%)",
    color: "hsl(0 0% 100%)",
  } as const;

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "hsl(222 47% 7%)" }}>
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px]" style={{ background: "radial-gradient(circle, hsl(222 80% 50% / 0.18), transparent 60%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px]" style={{ background: "radial-gradient(circle, hsl(168 60% 45% / 0.14), transparent 60%)" }} />

      <div className="section-container relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-6 xl:col-span-7 lg:-mt-12">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-medium" style={{ background: "hsl(222 80% 55% / 0.1)", border: "1px solid hsl(222 80% 55% / 0.22)", color: "hsl(222 80% 72%)" }}>
              <Sparkles className="h-3.5 w-3.5" />
              Обратный звонок · бесплатно
            </div>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]" style={{ color: "hsl(0 0% 100%)" }}>
              Обсудим ваш{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(222 80% 65%), hsl(168 60% 55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                фулфилмент
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-[1.75] md:text-[1.0625rem]" style={{ color: "hsl(220 20% 72%)" }}>
              Оставьте заявку — свяжемся с&nbsp;вами, уточним задачу и&nbsp;предложим оптимальный формат работы.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-1 max-w-md">
              {trustPoints.map((t) => (
                <div key={t.text} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "hsl(222 30% 12% / 0.6)", border: "1px solid hsl(222 25% 18%)", backdropFilter: "blur(8px)" }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(168 60% 45% / 0.12)", border: "1px solid hsl(168 60% 45% / 0.18)" }}>
                    <t.icon className="h-4 w-4" style={{ color: "hsl(168 60% 55%)" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "hsl(220 20% 88%)" }}>{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-2xl p-7 md:p-9" style={{ background: "linear-gradient(180deg, hsl(222 30% 13% / 0.85), hsl(222 35% 9% / 0.92))", border: "1px solid hsl(222 25% 22%)", boxShadow: "0 30px 80px hsl(222 50% 4% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.06)", backdropFilter: "blur(16px)" }}>
              <div className="absolute top-0 left-7 right-7 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(222 80% 60% / 0.6), hsl(168 60% 50% / 0.6), transparent)" }} />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, hsl(222 80% 50%), hsl(222 80% 38%))", boxShadow: "0 8px 24px hsl(222 80% 50% / 0.35)" }}>
                  <PhoneCall className="h-5 w-5" style={{ color: "hsl(0 0% 100%)" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: "hsl(0 0% 100%)" }}>Заявка на звонок</h3>
                  <p className="text-xs" style={{ color: "hsl(220 15% 60%)" }}>Заполните 3 поля — это займёт минуту</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-3.5" noValidate>
                <div>
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider" style={{ color: "hsl(220 15% 60%)" }}>Имя</label>
                  <input
                    type="text"
                    placeholder="Как к вам обращаться"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    disabled={loading}
                    required
                    maxLength={100}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={fieldStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "hsl(222 80% 55%)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(222 25% 22%)")}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider" style={{ color: "hsl(220 15% 60%)" }}>Телефон</label>
                  <PhoneInput
                    value={form.phone}
                    onValueChange={(phone) => setForm((f) => ({ ...f, phone }))}
                    disabled={loading}
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={fieldStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "hsl(222 80% 55%)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(222 25% 22%)")}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider" style={{ color: "hsl(220 15% 60%)" }}>Кратко опишите задачу</label>
                  <textarea
                    placeholder="Маркетплейс, объём, особые требования…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    disabled={loading}
                    maxLength={2000}
                    className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={fieldStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "hsl(222 80% 55%)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(222 25% 22%)")}
                  />
                </div>

                <ConsentCheckbox
                  id="home-privacy-consent"
                  checked={consent}
                  onCheckedChange={setConsent}
                  disabled={loading}
                  dark
                />

                <button
                  type="submit"
                  disabled={loading || !consent}
                  aria-busy={loading}
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-sm font-semibold transition-all duration-300 hover:brightness-110 disabled:opacity-70"
                  style={{ background: "linear-gradient(135deg, hsl(222 80% 50%), hsl(222 80% 40%))", color: "hsl(0 0% 100%)", boxShadow: "0 10px 30px hsl(222 80% 50% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.12)" }}
                >
                  {loading ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Отправка…</>
                  ) : (
                    <>Получить обратный звонок <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>
                  )}
                </button>

                {status && (
                  <div
                    role="status"
                    className="rounded-xl px-4 py-3 text-sm"
                    style={
                      status.type === "success"
                        ? { background: "hsl(168 60% 45% / 0.1)", border: "1px solid hsl(168 60% 45% / 0.3)", color: "hsl(168 60% 70%)" }
                        : { background: "hsl(0 70% 50% / 0.08)", border: "1px solid hsl(0 70% 55% / 0.3)", color: "hsl(0 80% 78%)" }
                    }
                  >
                    {status.text}
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 pt-1 text-xs" style={{ color: "hsl(220 15% 55%)" }}>
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 50%)" }} />
                  Свяжемся с вами в течение рабочего часа
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
