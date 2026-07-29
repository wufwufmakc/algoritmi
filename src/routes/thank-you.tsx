import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Clock, Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Спасибо за заявку — Алгоритмы, фулфилмент СПб" },
      { name: "description", content: "Ваша заявка принята. Наш менеджер свяжется с вами в ближайшее время." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <>
      {/* Hero confirmation */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(222 47% 9%), hsl(222 35% 16%))" }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }} />
        <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px]" style={{ background: "radial-gradient(circle, hsl(222 80% 50% / 0.1), transparent 60%)" }} />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px]" style={{ background: "radial-gradient(circle, hsl(168 60% 45% / 0.1), transparent 60%)" }} />

        <div className="section-container flex min-h-[60vh] flex-col items-center justify-center pt-36 pb-24 text-center md:pt-44 md:pb-32">
          {/* Success icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl" style={{
            background: "linear-gradient(135deg, hsl(168 60% 45% / 0.12), hsl(168 60% 45% / 0.06))",
            border: "1px solid hsl(168 60% 45% / 0.3)",
            boxShadow: "0 8px 32px hsl(168 60% 45% / 0.15)"
          }}>
            <CheckCircle2 className="h-10 w-10" style={{ color: "hsl(168 60% 55%)" }} />
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem]" style={{ color: "hsl(0 0% 100%)" }}>
            Спасибо за заявку!
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "hsl(220 15% 62%)" }}>
            Наш фулфилмент-менеджер уже просчитывает стоимость под ваш бизнес и свяжется с вами в течение 15 минут.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="group inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:brightness-110" style={{
              background: "linear-gradient(135deg, hsl(222 80% 50%), hsl(222 80% 40%))",
              color: "hsl(0 0% 100%)",
              boxShadow: "0 4px 24px hsl(222 80% 50% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.1)"
            }}>
              На главную <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/services" className="btn-outline-dark">
              Наши услуги
            </Link>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section-padding" style={{ background: "hsl(220 20% 97%)" }}>
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-premium mb-6 inline-flex">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(222 80% 45%)" }} />
              Что дальше
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Следующие шаги
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Связь с менеджером",
                desc: "Перезвоним в течение 15 минут в рабочее время, уточним детали задачи."
              },
              {
                step: "02",
                title: "Расчёт стоимости",
                desc: "Подготовим индивидуальное предложение под ваш товар, объёмы и процессы."
              },
              {
                step: "03",
                title: "Тестовая партия",
                desc: "Запуск за 3–5 дней. Оцените качество до подписания долгосрочного договора."
              },
            ].map((item) => (
              <div key={item.step} className="premium-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold" style={{
                  background: "hsl(222 80% 45% / 0.06)",
                  border: "1px solid hsl(222 80% 45% / 0.1)",
                  color: "hsl(222 80% 45%)"
                }}>
                  {item.step}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick contacts */}
      <section className="section-padding" style={{ borderTop: "1px solid hsl(220 13% 91%)" }}>
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              Нужна срочная связь?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Если вопрос не может ждать — свяжитесь с нами напрямую.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a href="tel:+78127406604" className="premium-card flex items-center gap-3 p-4 transition-all hover:border-primary/20">
                <div className="icon-box h-10 w-10">
                  <Phone className="h-4 w-4" style={{ color: "hsl(222 80% 45%)" }} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Телефон</div>
                  <div className="text-sm font-semibold text-foreground">8 (812) 740-66-04</div>
                </div>
              </a>

              <a href="mailto:info@algff.ru" className="premium-card flex items-center gap-3 p-4 transition-all hover:border-primary/20">
                <div className="icon-box h-10 w-10">
                  <Mail className="h-4 w-4" style={{ color: "hsl(222 80% 45%)" }} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-semibold text-foreground">info@algff.ru</div>
                </div>
              </a>

              <a href="https://t.me/Algoritmi_FF_Bot" target="_blank" rel="noopener noreferrer" className="premium-card flex items-center gap-3 p-4 transition-all hover:border-primary/20">
                <div className="icon-box h-10 w-10">
                  <Send className="h-4 w-4" style={{ color: "hsl(222 80% 45%)" }} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Telegram</div>
                  <div className="text-sm font-semibold text-foreground">@Algoritmi_FF_Bot</div>
                </div>
              </a>

              <a href="https://yandex.ru/maps/-/CPGJMAZY" target="_blank" rel="noopener noreferrer" className="premium-card flex items-center gap-3 p-4 transition-all hover:border-primary/20">
                <div className="icon-box h-10 w-10">
                  <MapPin className="h-4 w-4" style={{ color: "hsl(222 80% 45%)" }} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Адрес</div>
                  <div className="text-sm font-semibold text-foreground">СПб, Петро-Славянка</div>
                </div>
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 40%)" }} />
              <span>Пн–Пт: 09:00–18:00, Сб: 10:00–16:00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
