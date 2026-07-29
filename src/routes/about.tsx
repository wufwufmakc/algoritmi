import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, Warehouse, Target, Users, Cog, CheckCircle2 } from "lucide-react";
import exteriorImg from "@/assets/warehouse-exterior.jpg";
import interiorImg from "@/assets/warehouse-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О компании Алгоритмы — фулфилмент в Санкт-Петербурге" },
      { name: "description", content: "Фулфилмент-оператор класса А в Шушарах. Системный подход, гибкость, прозрачность." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        badge="О компании"
        title="Алгоритмы —"
        titleAccent="системный фулфилмент"
        subtitle="Не просто склад — операционная платформа. Каждый процесс выстроен, измерим и адаптируется."
        image={exteriorImg}
      >
        <Link to="/pricing" className="btn-primary">Обсудить задачу <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      {/* Who we are */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="section-label">Кто мы</span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Почему «Алгоритмы»</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Название отражает подход: складские процессы как алгоритмы — последовательные, предсказуемые, оптимизированные.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Работаем с маркетплейс-селлерами, интернет-магазинами и компаниями, которым нужен надёжный логистический партнёр.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Warehouse, title: "Класс А", desc: "Современный склад в Шушарах." },
                { icon: Target, title: "Системность", desc: "Каждый процесс — алгоритм." },
                { icon: Users, title: "Гибкость", desc: "Адаптируемся под задачу." },
                { icon: Cog, title: "Технологичность", desc: "WMS, автоматизация, прозрачность." },
              ].map((item) => (
                <div key={item.title} className="premium-card group rounded-xl p-6">
                  <div className="icon-box mb-4 h-10 w-10">
                    <item.icon className="h-5 w-5" style={{ color: "hsl(222 80% 45%)" }} />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location — dark with image */}
      <section className="section-dark section-padding">
        <div className="section-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="image-frame-dark">
              <img src={interiorImg} alt="Склад Алгоритмы" className="w-full object-cover" style={{ height: 400 }} loading="lazy" width={1920} height={1080} />
            </div>
            <div>
              <span className="section-label-dark">Локация</span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "hsl(0 0% 100%)" }}>Петро-Славянка — логистически удобно</h2>
              <p className="mt-6 text-base leading-relaxed" style={{ color: "hsl(220 15% 58%)" }}>
                Южная промышленная зона Петербурга — рядом с КАД и потоками маркетплейсов.
              </p>
              <ul className="mt-6 space-y-3">
                {["Рядом с КАД и транспортными узлами", "Близость к хабам WB и Ozon", "Удобная доступность для ТК", "Без городских ограничений"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "hsl(210 20% 82%)" }}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "hsl(168 60% 50%)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibility */}
      <section className="section-warm section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label">Гибкость</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Адаптируемся под задачу</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Модель хранения", desc: "Паллетное, стеллажное, напольное." },
              { title: "Формат запуска", desc: "Тестовая партия, поэтапный переход, полный аутсорс." },
              { title: "Структура процессов", desc: "Маркировка, комплектация, упаковка." },
              { title: "Оборудование", desc: "Возможность закупки спецоборудования." },
            ].map((item) => (
              <div key={item.title} className="premium-card rounded-xl p-6">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding">
        <div className="section-container text-center">
          <span className="section-label">Принципы</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Операционная философия</h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-3 text-left">
            {[
              "Каждый процесс задокументирован и измерим",
              "Гибкость в подходе, системность в исполнении",
              "Прозрачность данных — основа доверия",
              "Тестовый формат — стандарт начала",
              "Масштабирование без потери качества",
            ].map((item, i) => (
              <div key={i} className="premium-card flex items-center gap-4 rounded-xl px-6 py-5">
                <span className="step-number !h-7 !w-7 !text-xs">{i + 1}</span>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Хотите узнать больше?"
        subtitle="Расскажите о задаче — обсудим, как Алгоритмы могут быть полезны."
        microcopy="Без обязательств."
      />
    </>
  );
}
