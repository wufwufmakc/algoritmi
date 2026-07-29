import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ArrowRight, Box, Settings, Truck, Ruler, ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";
import kgtImg from "@/assets/kgt-handling.jpg";

export const Route = createFileRoute("/kgt")({
  head: () => ({
    meta: [
      { title: "КГТ и нестандартные задачи — фулфилмент Алгоритмы, СПб" },
      { name: "description", content: "Хранение и обработка крупногабаритных товаров. Гибкая адаптация под задачу." },
    ],
  }),
  component: KGTPage,
});

function KGTPage() {
  return (
    <>
      <PageHero
        badge="КГТ"
        title="Крупногабаритные товары и"
        titleAccent="нестандартные задачи"
        subtitle="Стандартные операторы работают по шаблону. Мы проектируем процессы под габариты и специфику вашего товара."
        image={kgtImg}
      >
        <Link to="/pricing" className="btn-primary">Обсудить задачу <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      {/* Who this is for */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">Для кого</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Если ваш товар «не помещается» в стандартный фулфилмент</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Мебель, бытовая техника, спортивное оборудование — товары, которые обычные операторы не берут.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Продавцы мебели и крупной техники",
                  "Поставщики спортинвентаря",
                  "Строительные материалы",
                  "Любой товар нестандартных габаритов",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "hsl(168 60% 40%)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <FeatureCard icon={Box} title="Крупногабаритные товары" description="Принимаем КГТ любых размеров." />
              <FeatureCard icon={Ruler} title="Нестандартные размеры" description="Адаптируем зоны хранения." />
              <FeatureCard icon={ShieldCheck} title="Бережное обращение" description="Условия для хрупких и тяжёлых товаров." />
              <FeatureCard icon={Wrench} title="Спецоборудование" description="Закупка оборудования под задачу." />
            </div>
          </div>
        </div>
      </section>

      {/* Process — dark */}
      <section className="section-dark section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label-dark">Подход</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "hsl(0 0% 100%)" }}>Не шаблон, а проект под задачу</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { step: "01", title: "Анализ", desc: "Изучаем товар, габариты, требования к обработке." },
              { step: "02", title: "Проектирование", desc: "Зоны, процессы, оборудование, логистика." },
              { step: "03", title: "Запуск", desc: "Тестовая партия, доработка, рабочий режим." },
            ].map((item) => (
              <div key={item.step} className="dark-card rounded-xl p-7">
                <div className="step-number-dark mb-4 w-fit">{item.step}</div>
                <h3 className="text-lg font-semibold" style={{ color: "hsl(0 0% 100%)" }}>{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "hsl(220 15% 58%)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-warm section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label">Возможности</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Что мы обеспечиваем</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Settings} title="Индивидуальные процессы" description="Кастомная модель хранения и обработки." />
            <FeatureCard icon={Truck} title="Организация отгрузки" description="Поставки с учётом габаритов и требований ТК." />
            <FeatureCard icon={Wrench} title="Дополнительное оборудование" description="Специализированное оборудование под задачу." />
          </div>
        </div>
      </section>

      <CTASection
        title="Есть нестандартная задача?"
        subtitle="Расскажите о товаре — предложим модель работы."
        buttonText="Обсудить нестандартную задачу"
        microcopy="Без шаблонных ответов."
      />
    </>
  );
}
