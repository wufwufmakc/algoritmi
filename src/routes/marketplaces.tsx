import { MarketplaceLogo } from "@/components/MarketplaceLogos";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ArrowRight, CheckCircle2, Package, BarChart3, Zap, ShieldCheck, Repeat, Truck } from "lucide-react";
import warehouseImg from "@/assets/warehouse-interior.jpg";

export const Route = createFileRoute("/marketplaces")({
  head: () => ({
    meta: [
      { title: "Фулфилмент для маркетплейсов — Wildberries, Ozon, Яндекс Маркет | Алгоритмы" },
      { name: "description", content: "Подготовка поставок для Wildberries, Ozon и Яндекс Маркет. Маркировка, упаковка, отгрузка по стандартам." },
    ],
  }),
  component: MarketplacesPage,
});

function MarketplacesPage() {
  return (
    <>
      <PageHero
        badge="Маркетплейсы"
        title="Фулфилмент для"
        titleAccent="маркетплейсов"
        subtitle="Вы занимаетесь продажами. Мы — приёмкой, хранением, маркировкой, сборкой и отгрузкой по стандартам каждой площадки."
        image={warehouseImg}
      >
        <Link to="/pricing" className="btn-primary">Обсудить поставки <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      {/* Problems */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label">Что мы решаем</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Проблемы, с которыми приходят селлеры</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { pain: "Отказы при приёмке на складе маркетплейса", solution: "Готовим поставки строго по регламентам — маркировка, штрихкоды, упаковка." },
              { pain: "Штрафы за неправильную маркировку", solution: "Знаем актуальные требования WB, Ozon и ЯМ. Контролируем через WMS." },
              { pain: "Не хватает скорости в сезон", solution: "Масштабируем мощности без найма и обучения." },
              { pain: "Нет прозрачности: что на складе, что отгружено", solution: "WMS с остатками и статусами в реальном времени." },
            ].map((item, i) => (
              <div key={i} className="premium-card rounded-xl p-7">
                <div className="mb-4 flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(12 76% 50%)" }}>
                  <span className="pain-dot" />
                  {item.pain}
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "hsl(168 60% 40%)" }} />
                  <span className="text-sm leading-relaxed text-foreground">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages — dark */}
      <section className="section-dark section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label-dark">Преимущества</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "hsl(0 0% 100%)" }}>Почему селлеры выбирают нас</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Package} title="Точная подготовка поставок" description="Регламенты каждой площадки — в процессе. Минимум отказов." dark />
            <FeatureCard icon={BarChart3} title="Прозрачность через WMS" description="Остатки и движения в реальном времени." dark />
            <FeatureCard icon={Zap} title="Тестовая партия за 3–5 дней" description="Оцените качество до долгосрочного контракта." dark />
            <FeatureCard icon={ShieldCheck} title="Снижение штрафов" description="Правильная маркировка и упаковка." dark />
            <FeatureCard icon={Repeat} title="Обработка возвратов" description="Принимаем, проверяем, возвращаем в оборот." dark />
            <FeatureCard icon={Truck} title="Рядом с хабами" description="Петро-Славянка — удобная логистическая точка рядом с КАД." dark />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-16 text-center">
            <span className="section-label">Процесс</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Как выглядит работа с нами</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            {[
              { step: "01", title: "Обсуждаем задачу", desc: "Товар, объёмы, площадки — формируем план и стоимость." },
              { step: "02", title: "Принимаем товар", desc: "Приёмка с проверкой, размещение в адресной системе." },
              { step: "03", title: "Обрабатываем и отгружаем", desc: "Маркировка, комплектация, упаковка, формирование поставок." },
              { step: "04", title: "Контролируете через WMS", desc: "Остатки, статусы, история — всё в личном кабинете." },
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

      {/* Platforms */}
      <section className="section-warm section-padding">
        <div className="section-container">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Площадки</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Wildberries", items: ["Маркировка по стандартам WB", "FBO поставки", "Фирменная упаковка", "Близость к хабу"], color: "#CB11AB", bg: "linear-gradient(135deg, #F9E6F5 0%, #FCF0FA 100%)", border: "#CB11AB22", accent: "#CB11AB" },
              { name: "Ozon", items: ["FBO и FBS поставки", "Штрихкодирование", "Мульти-товарные заказы", "Обработка возвратов"], color: "#005BFF", bg: "linear-gradient(135deg, #E6EFFF 0%, #F0F5FF 100%)", border: "#005BFF22", accent: "#005BFF" },
              { name: "Яндекс Маркет", items: ["Отгрузки по регламенту ЯМ", "Маркировка и этикетирование", "Обработка возвратов", "Контроль качества"], color: "#FC3F1D", bg: "linear-gradient(135deg, #FFF0EC 0%, #FFF6F3 100%)", border: "#FC3F1D22", accent: "#FC3F1D" },
            ].map((mp) => (
              <div key={mp.name} className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ background: mp.bg, border: `1.5px solid ${mp.border}` }}>
                <div className="absolute top-0 right-0 h-32 w-32 opacity-[0.07]" style={{ background: `radial-gradient(circle at 100% 0%, ${mp.color}, transparent 70%)` }} />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm" style={{ background: "white", border: `1px solid ${mp.border}` }}>
                    <MarketplaceLogo name={mp.name} size={32} />
                  </div>
                  <h3 className="mb-5 text-xl font-bold" style={{ color: mp.color }}>{mp.name}</h3>
                  <ul className="space-y-3">
                    {mp.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(220 15% 35%)" }}>
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: mp.accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Продаёте на маркетплейсе?"
        subtitle="Расскажите о товаре и площадке — подготовим план запуска."
        buttonText="Обсудить поставки и отгрузку"
        microcopy="Покажем, как может выглядеть запуск."
      />
    </>
  );
}
