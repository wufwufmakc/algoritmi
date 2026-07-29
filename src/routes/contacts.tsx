import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Phone, Mail, MapPin, Send, MessageCircle, MessagesSquare, Clock, ShieldCheck, ArrowRight, Loader2, Building2 } from "lucide-react";
import { useState, useRef } from "react";
import { LEGAL } from "@/lib/legal";

const BITRIX_LEAD_ENDPOINT = "https://algff.bitrix24.ru/rest/171/byn2r62fvjj301yx/crm.lead.add.json";
const SUCCESS_MSG = "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.";
const ERROR_MSG = "Не удалось отправить заявку. Попробуйте ещё раз.";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — Алгоритмы, фулфилмент СПб" },
      { name: "description", content: "Свяжитесь с нами: телефон, email, Telegram, WhatsApp. Петро-Славянка, СПб." },
    ],
  }),
  component: ContactsPage,
});

function formatRuPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  let d = digits;
  if (d.length === 0) return "";
  if (d[0] === "8") d = "7" + d.slice(1);
  if (d[0] !== "7") d = "7" + d;
  d = d.slice(0, 11);
  const p1 = d.slice(1, 4);
  const p2 = d.slice(4, 7);
  const p3 = d.slice(7, 9);
  const p4 = d.slice(9, 11);
  let out = "+7";
  if (d.length > 1) out += " (" + p1;
  if (d.length >= 4) out += ")";
  if (p2) out += " " + p2;
  if (p3) out += "-" + p3;
  if (p4) out += "-" + p4;
  return out;
}

function ContactsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const lastSubmitRef = useRef(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const now = Date.now();
    if (now - lastSubmitRef.current < 3000) return;
    lastSubmitRef.current = now;

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus({ type: "error", text: "Укажите имя и телефон" });
      return;
    }
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 11) {
      setStatus({ type: "error", text: "Введите телефон полностью: +7 (___) ___-__-__" });
      return;
    }

    setLoading(true);
    setStatus(null);

    const name = formData.name.trim() || "Без имени";
    const phone = formData.phone.trim();
    const message = formData.message.trim();
    const PAGE_URL = "https://algff.ru/contacts";

    const payload = {
      fields: {
        TITLE: "Заявка с сайта Алгоритмы — обратный звонок",
        NAME: name,
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        COMMENTS: `Форма: contacts_callback_form\nСтраница: ${PAGE_URL}\nКомментарий: ${message || "Не указан"}`,
        SOURCE_ID: "1",
        SOURCE_DESCRIPTION: "Форма обратного звонка с сайта Алгоритмы",
      },
    };

    console.log("BITRIX PAYLOAD", payload);
    console.log("SOURCE_ID check:", payload.fields.SOURCE_ID === "1" ? "OK (1)" : "FAIL");

    try {
      const res = await fetch(BITRIX_LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      console.log("BITRIX RESPONSE", data);

      if (res.ok && data && !data.error && data.result) {
        setFormData({ name: "", phone: "", message: "" });
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

  return (
    <>
      <PageHero
        badge="Контакты"
        title="Свяжитесь"
        titleAccent="с нами"
        subtitle="Работаем с интернет-магазинами, продавцами маркетплейсов и B2B-клиентами. Свяжитесь с нами, чтобы обсудить хранение, комплектацию, маркировку и отгрузку товара."
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-14 lg:grid-cols-2">
            <div className="space-y-5">
              {[
                { icon: Phone, title: "Телефон", value: LEGAL.phoneDisplay, href: `tel:${LEGAL.phoneTel}` },
                { icon: Mail, title: "Email", value: LEGAL.email, href: `mailto:${LEGAL.email}` },
                { icon: MapPin, title: "Склад", value: LEGAL.warehouseAddressShort, href: LEGAL.mapsUrl },
                { icon: Clock, title: "Режим работы", value: "Пн–Пт: 09:00–18:00, Сб: 10:00–16:00", href: undefined },
              ].map((item) => (
                <div key={item.value} className="premium-card group flex items-start gap-5 rounded-xl p-6">
                  <div className="icon-box h-11 w-11">
                    <item.icon className="h-5 w-5" style={{ color: "hsl(222 80% 45%)" }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    {item.href ? (
                      <a href={item.href} className="mt-0.5 text-sm text-muted-foreground transition-colors hover:text-primary">{item.value}</a>
                    ) : (
                      <div className="mt-0.5 text-sm text-muted-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="premium-card rounded-xl p-6">
                <div className="flex items-start gap-5">
                  <div className="icon-box h-11 w-11">
                    <Building2 className="h-5 w-5" style={{ color: "hsl(222 80% 45%)" }} />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <div className="text-sm font-semibold text-foreground">Реквизиты</div>
                    <dl className="space-y-1.5 text-sm text-muted-foreground">
                      <div>
                        <dt className="sr-only">ИП</dt>
                        <dd>{LEGAL.entityName}</dd>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <div>
                          <dt className="inline text-muted-foreground/70">ИНН </dt>
                          <dd className="inline">{LEGAL.inn}</dd>
                        </div>
                        <div>
                          <dt className="inline text-muted-foreground/70">ОГРНИП </dt>
                          <dd className="inline">{LEGAL.ogrnip}</dd>
                        </div>
                      </div>
                      <div>
                        <dt className="text-muted-foreground/70">Юридический адрес</dt>
                        <dd className="mt-0.5">{LEGAL.legalAddress}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href="https://t.me/Algoritmi_FF_Bot" target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center">
                  <Send className="h-4 w-4" /> Telegram
                </a>
                <a href="https://wa.me/78127406604" target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href="https://max.ru/u/f9LHodD0cOII2k93wFHTeiNgRFNp3TVwQ8Mt-3nvVXxES8JQMDKdFrTqk6k" target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center">
                  <MessagesSquare className="h-4 w-4" /> MAX
                </a>
              </div>

              <div className="overflow-hidden rounded-xl" style={{ border: "1px solid hsl(220 13% 91%)" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=30.514%2C59.799&z=15&pt=30.514,59.799,pm2rdm&l=map"
                  title="Карта — склад Алгоритмы, Петро-Славянка"
                  loading="lazy"
                  className="block h-72 w-full border-0"
                />
                <a href="https://yandex.ru/maps/-/CPGJMAZY" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors hover:bg-muted/50" style={{ color: "hsl(222 80% 45%)", background: "hsl(0 0% 100%)" }}>
                  <MapPin className="h-4 w-4" /> Открыть на Яндекс.Картах
                </a>
              </div>
            </div>

            <div>
              <div className="elevated-card rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-foreground">Обратный звонок</h3>
                <p className="mt-2.5 text-sm text-muted-foreground">Оставьте номер — перезвоним и обсудим задачу.</p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
                  <input type="text" placeholder="Имя" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-input" required disabled={loading} maxLength={100} />
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatRuPhone(e.target.value) })}
                    onKeyDown={(e) => {
                      if (e.metaKey || e.ctrlKey || e.altKey) return;
                      if (e.key === "Backspace") {
                        e.preventDefault();
                        const digits = formData.phone.replace(/\D/g, "");
                        setFormData((f) => ({ ...f, phone: formatRuPhone(digits.slice(0, -1)) }));
                        return;
                      }
                      if (e.key === "Delete") {
                        e.preventDefault();
                        setFormData((f) => ({ ...f, phone: "" }));
                        return;
                      }
                      const navKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End", "Enter"];
                      if (navKeys.includes(e.key)) return;
                      if (!/^\d$/.test(e.key)) e.preventDefault();
                    }}
                    onPaste={(e) => {
                      e.preventDefault();
                      const text = e.clipboardData.getData("text");
                      setFormData((f) => ({ ...f, phone: formatRuPhone(text) }));
                    }}
                    className="form-input"
                    required
                    disabled={loading}
                    maxLength={18}
                  />
                  <textarea placeholder="Опишите задачу" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="form-input resize-none" disabled={loading} maxLength={2000} />
                  <button type="submit" className="btn-primary w-full justify-center" disabled={loading} aria-busy={loading}>
                    {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Отправка...</>) : (<>Перезвоните мне <ArrowRight className="h-4 w-4" /></>)}
                  </button>
                  {status && (
                    <div role="status" className={`rounded-lg px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                      {status.text}
                    </div>
                  )}
                </form>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 40%)" }} />
                  <span>Перезвоним в течение часа</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
