import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Clock, ShieldCheck, BarChart3, Zap, AlertTriangle } from "lucide-react";
import operationsImg from "@/assets/fulfillment-operations.jpg";

export const Route = createFileRoute("/ecommerce")({
  head: () => ({
    meta: [
      { title: "Фулфилмент для интернет-магазинов — Алгоритмы, СПб" },
      { name: "description", content: "Аутсорс складской логистики для интернет-магазинов. Полный цикл: от приёмки до доставки." },
    ],
  }),
  component: EcommercePage,
});

function EcommercePage() {
  const pains = [
    "Аренда склада съедает маржу",
    "Ошибки в сборке → жалобы → возвраты",
    "В сезон не хватает рук",
    "Складская команда — постоянная нагрузка",
    "Нет прозрачного учёта",
    "Возвраты копятся",
  ];

  const benefits = [
    { icon: TrendingUp, title: "Масштабируемость", desc: "Растёте — мы растём вместе. Сезонные пики без найма." },
    { icon: Clock, title: "Скорость обработки", desc: "Заказы обрабатываются в день поступления." },
    { icon: ShieldCheck, title: "Надёжность", desc: "Ответственное хранение, WMS-контроль, минимум ошибок." },
    { icon: BarChart3, title: "Прозрачность", desc: "Остатки, движения, статусы — всё в WMS." },
    { icon: Zap, title: "Быстрый старт", desc: "Тестовая партия за 3–5 дней." },
  ];

  return (
    <>
      <PageHero
        badge="Интернет-магазины"
        title="Фулфилмент для"
        titleAccent="интернет-магазинов"
        subtitle="Передайте складскую логистику нам. Вы — продажи и маркетинг, мы — обработка и отгрузка заказов."
        image={operationsImg}
      >
        <Link to="/pricing" className="btn-primary">Обсудить запуск <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      {/* Pains */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label">Знакомо?</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Боли, которые мы закрываем</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pains.map((pain, i) => (
              <div key={i} className="premium-card flex items-start gap-3.5 rounded-xl p-6">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "hsl(0 72% 51%)" }} />
                <span className="text-sm leading-relaxed text-foreground">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objections — dark */}
      <section className="section-dark section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label-dark">Частые сомнения</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "hsl(0 0% 100%)" }}>«Мы не уверены, что готовы»</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { objection: "У нас уже есть свой склад", answer: "Можно передать часть операций или сезонные объёмы." },
              { objection: "Мы не готовы к полному переходу", answer: "Начните с тестовой партии. Никаких обязательств." },
              { objection: "Боимся потерять контроль", answer: "WMS даёт полную видимость: остатки, движения, статусы." },
              { objection: "Нужна только часть операций", answer: "Работаем гибко: хранение, сборка, частичный аутсорс." },
            ].map((item, i) => (
              <div key={i} className="dark-card rounded-xl p-7">
                <div className="mb-3 flex items-center gap-2.5">
                  <AlertTriangle className="h-4 w-4 shrink-0" style={{ color: "hsl(43 96% 56%)" }} />
                  <span className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>«{item.objection}»</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "hsl(168 60% 50%)" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "hsl(220 15% 62%)" }}>{item.answer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-warm section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label">Решение</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Что вы получаете</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="premium-card group rounded-2xl p-7">
                <div className="icon-box mb-5 h-11 w-11">
                  <b.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" style={{ color: "hsl(222 80% 45%)" }} />
                </div>
                <h3 className="text-[0.94rem] font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Как начать работу</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            {[
              { step: "01", title: "Оставляете заявку", desc: "Через форму, Telegram или WhatsApp." },
              { step: "02", title: "Получаете предложение", desc: "Анализируем задачу и считаем стоимость." },
              { step: "03", title: "Запускаем тестовую партию", desc: "Небольшой объём для проверки." },
              { step: "04", title: "Масштабируете", desc: "Убедились — переводите основные объёмы." },
            ].map((item) => (
              <div key={item.step} className="premium-card rounded-xl p-7">
                <div className="flex items-start gap-5">
                  <div className="step-number">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Управляете интернет-магазином?"
        subtitle="Передайте операционку — покажем, как это может работать."
        buttonText="Обсудить запуск"
        microcopy="Обсудим тестовую партию и формат работы."
      />
    </>
  );
}
