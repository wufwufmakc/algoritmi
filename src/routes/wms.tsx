import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ArrowRight, BarChart3, Eye, Activity, Database, Layers, Clock, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/wms")({
  head: () => ({
    meta: [
      { title: "WMS-система — управление складом | Алгоритмы, СПб" },
      { name: "description", content: "WMS-система с прозрачностью остатков, движений и статусов в реальном времени." },
    ],
  }),
  component: WMSPage,
});

function WMSPage() {
  return (
    <>
      <PageHero
        badge="WMS"
        title="Контроль склада"
        titleAccent="без присутствия на нём"
        subtitle="Наша WMS показывает точные остатки, историю движений и статусы операций в реальном времени."
        dark
      >
        <Link to="/pricing" className="btn-white">Посмотреть, как это работает <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      {/* Why WMS */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">Зачем это важно</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Склад без WMS — чёрный ящик</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Когда вы передаёте товар на внешний склад, главный страх — потеря контроля. WMS решает это: данные доступны в любой момент.
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 40%)" }} />
                <span>Доступ к WMS входит в стоимость обслуживания</span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-xl p-7" style={{ background: "hsl(0 72% 51% / 0.03)", border: "1px solid hsl(0 72% 51% / 0.12)" }}>
                <h3 className="text-base font-bold" style={{ color: "hsl(0 72% 51%)" }}>Без WMS</h3>
                <ul className="mt-4 space-y-2.5">
                  {["Остатки неточные — пересорт, дефицит", "Ошибки в сборке незаметны", "Потери обнаруживаются поздно", "Звонки вместо данных"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                      <XCircle className="h-4 w-4 shrink-0" style={{ color: "hsl(0 72% 51%)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-7" style={{ background: "hsl(168 60% 40% / 0.03)", border: "1px solid hsl(168 60% 40% / 0.12)" }}>
                <h3 className="text-base font-bold" style={{ color: "hsl(168 60% 40%)" }}>С нашей WMS</h3>
                <ul className="mt-4 space-y-2.5">
                  {["Точные остатки 24/7 — по каждому SKU", "Автоматический контроль сборки", "Полная прослеживаемость", "Данные в реальном времени"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "hsl(168 60% 40%)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-warm section-padding">
        <div className="section-container">
          <div className="mb-16 text-center">
            <span className="section-label">Возможности</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Что вы видите в WMS</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Eye} title="Остатки в реальном времени" description="Точное количество по каждому SKU." />
            <FeatureCard icon={Activity} title="История движений" description="Каждое перемещение зафиксировано." />
            <FeatureCard icon={BarChart3} title="Статусы операций" description="Приёмка, комплектация, отгрузка — каждый этап." />
            <FeatureCard icon={Database} title="Адресное хранение" description="Каждая единица привязана к ячейке." />
            <FeatureCard icon={Layers} title="Аналитика" description="Оборачиваемость, скорость, критические остатки." />
            <FeatureCard icon={Clock} title="Уведомления" description="Оповещения о критических остатках и отклонениях." />
          </div>
        </div>
      </section>

      {/* Dashboard mockup — dark */}
      <section className="section-dark section-padding">
        <div className="section-container">
          <div className="mb-16 text-center">
            <span className="section-label-dark">Интерфейс</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "hsl(0 0% 100%)" }}>Всё на одном экране</h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl" style={{ background: "hsl(222 35% 13%)", border: "1px solid hsl(222 25% 20%)", boxShadow: "0 24px 60px hsl(0 0% 0% / 0.3)" }}>
              <div className="rounded-t-xl p-5" style={{ background: "hsl(222 35% 10%)" }}>
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(0 72% 51%)" }} />
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(43 96% 56%)" }} />
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(168 60% 50%)" }} />
                  <span className="ml-3 text-xs" style={{ color: "hsl(220 15% 45%)" }}>WMS Dashboard — Алгоритмы</span>
                </div>
              </div>
              <div className="p-6" style={{ background: "hsl(222 40% 8%)" }}>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { value: "1,247", label: "Товаров на складе", color: "hsl(222 80% 55%)" },
                    { value: "98.7%", label: "Точность сборки", color: "hsl(168 60% 50%)" },
                    { value: "24ч", label: "Среднее время обработки", color: "hsl(43 96% 56%)" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl p-5" style={{ background: "hsl(222 35% 13%)", border: "1px solid hsl(222 25% 20%)" }}>
                      <div className="stat-number text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="mt-1.5 text-xs" style={{ color: "hsl(220 15% 48%)" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl p-5" style={{ background: "hsl(222 35% 13%)", border: "1px solid hsl(222 25% 20%)" }}>
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>Последние операции</h4>
                      <span className="text-[10px]" style={{ color: "hsl(220 15% 48%)" }}>Сегодня</span>
                    </div>
                    <div className="mt-4 space-y-2.5">
                      {[
                        { label: "Приёмка — 120 ед.", status: "Завершено" },
                        { label: "Комплектация — #4521", status: "В работе" },
                        { label: "Отгрузка WB — 45 коробов", status: "Готово" },
                      ].map((op) => (
                        <div key={op.label} className="flex items-center justify-between rounded-lg px-3.5 py-2.5" style={{ background: "hsl(222 40% 8%)" }}>
                          <span className="text-xs" style={{ color: "hsl(220 15% 58%)" }}>{op.label}</span>
                          <span className="status-pill">{op.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: "hsl(222 35% 13%)", border: "1px solid hsl(222 25% 20%)" }}>
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>Критические остатки</h4>
                      <span className="status-pill-warn">3</span>
                    </div>
                    <div className="mt-4 space-y-2.5">
                      {["SKU-0042 — осталось 12 ед.", "SKU-0118 — осталось 5 ед.", "SKU-0331 — осталось 8 ед."].map((item) => (
                        <div key={item} className="flex items-center gap-2.5 rounded-lg px-3.5 py-2.5" style={{ background: "hsl(0 72% 51% / 0.05)" }}>
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(0 72% 51%)" }} />
                          <span className="text-xs" style={{ color: "hsl(0 72% 58%)" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Хотите видеть свой склад в реальном времени?"
        subtitle="Покажем, как WMS работает на практике."
        buttonText="Посмотреть демо"
        microcopy="Доступ к WMS — с первого дня."
      />
    </>
  );
}
