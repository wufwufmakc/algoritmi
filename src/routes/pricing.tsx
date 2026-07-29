import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Send, MessageCircle, MessagesSquare, ArrowRight, CheckCircle2, ShieldCheck, Zap, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { submitBitrixLead, LEAD_SUCCESS, LEAD_ERROR } from "@/lib/bitrix-lead";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Цены на фулфилмент — Алгоритмы, Санкт-Петербург" },
      { name: "description", content: "Прозрачная система ценообразования. Хранение + операции. Тестовая партия." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "", message: "" });
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

    setLoading(true);
    setStatus(null);
    try {
      const extra = [
        formData.company && `Компания: ${formData.company}`,
        formData.email && `Email: ${formData.email}`,
        formData.message,
      ].filter(Boolean).join("\n");
      const res = await submitBitrixLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        message: extra,
        formCode: "callback_form_generic",
      });
      if (res.ok) {
        setFormData({ name: "", company: "", phone: "", email: "", message: "" });
        navigate({ to: "/thank-you" });
        return;
      } else {
        setStatus({ type: "error", text: LEAD_ERROR });
      }
    } catch {
      setStatus({ type: "error", text: LEAD_ERROR });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        badge="Цены"
        title="Прозрачное"
        titleAccent="ценообразование"
        subtitle="Стоимость — хранение + операции. Без скрытых платежей. Начните с тестовой партии."
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Как формируется стоимость</h2>
              <p className="mt-4 text-base text-muted-foreground">Два компонента. Финальная цена зависит от объёмов и специфики.</p>
              <div className="mt-8 space-y-6">
                {[
                  { title: "Хранение", desc: "Оплата за паллето-место или объём." },
                  { title: "Операции", desc: "Каждая операция тарифицируется прозрачно." },
                  { title: "Тестовая партия", desc: "Специальные условия для первой партии." },
                  { title: "Индивидуальный расчёт", desc: "Персональное предложение под ваш объём." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="icon-box h-9 w-9">
                      <CheckCircle2 className="h-4 w-4" style={{ color: "hsl(222 80% 45%)" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl p-6" style={{ background: "hsl(168 60% 40% / 0.03)", border: "1px solid hsl(168 60% 40% / 0.12)" }}>
                <div className="flex items-center gap-2.5 text-sm font-semibold" style={{ color: "hsl(168 60% 40%)" }}>
                  <Zap className="h-4 w-4" />
                  Предпочитаете мессенджер?
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Напишите в Telegram или WhatsApp.</p>
                <div className="mt-4 flex gap-3">
                  <a href="https://t.me/Algoritmi_FF_Bot" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                    <Send className="h-3.5 w-3.5" /> Telegram
                  </a>
                  <a href="https://wa.me/78127406604" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                  <a href="https://max.ru/u/f9LHodD0cOII2k93wFHTeiNgRFNp3TVwQ8Mt-3nvVXxES8JQMDKdFrTqk6k" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                    <MessagesSquare className="h-3.5 w-3.5" /> MAX
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="elevated-card rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-foreground">Получить расчёт</h3>
                <p className="mt-2.5 text-sm text-muted-foreground">Заполните форму — подготовим предложение.</p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
                  <input type="text" placeholder="Имя" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-input" required disabled={loading} maxLength={100} />
                  <input type="text" placeholder="Компания" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="form-input" disabled={loading} maxLength={150} />
                  <input type="tel" placeholder="Телефон" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input" required disabled={loading} maxLength={30} />
                  <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-input" disabled={loading} maxLength={150} />
                  <textarea placeholder="Опишите товар, объёмы и задачу" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="form-input resize-none" disabled={loading} maxLength={2000} />
                  <button type="submit" className="btn-primary w-full justify-center" disabled={loading} aria-busy={loading}>
                    {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Отправка...</>) : (<>Получить расчёт <ArrowRight className="h-4 w-4" /></>)}
                  </button>
                  {status && (
                    <div role="status" className={`rounded-lg px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                      {status.text}
                    </div>
                  )}
                </form>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 40%)" }} />
                  <span>Ответим в течение дня</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Предпочитаете обсудить лично?"
        subtitle="Напишите в мессенджер — обсудим и рассчитаем."
        microcopy="Ответим в течение часа в рабочее время."
      />
    </>
  );
}
