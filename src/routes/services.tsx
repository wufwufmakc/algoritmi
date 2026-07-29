import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, PackageCheck, Warehouse, Tag, Boxes, PackageOpen, Truck, RotateCcw, Shield, Globe, Box, ClipboardList } from "lucide-react";
import operationsImg from "@/assets/fulfillment-operations.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги фулфилмента — Алгоритмы, Санкт-Петербург" },
      { name: "description", content: "Полный спектр складских услуг: приёмка, хранение, маркировка, комплектация, упаковка, отгрузка, возвраты, 3PL, КГТ." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: PackageCheck, title: "Приёмка товара", intro: "Контролируемый приём с проверкой количества, качества и документов.", value: "Минимизация расхождений с первого этапа.", audience: "Все клиенты." },
  { icon: Warehouse, title: "Хранение", intro: "Адресное хранение в зоне класса А с WMS-учётом каждой единицы.", value: "Точные остатки в любой момент.", audience: "E-commerce, селлеры, оптовики." },
  { icon: Tag, title: "Маркировка", intro: "Штрихкоды, этикетки по стандартам маркетплейсов и законодательства.", value: "Меньше штрафов от площадок.", audience: "Продавцы на WB, Ozon, ЯМ." },
  { icon: Boxes, title: "Комплектация", intro: "Сборка заказов: моно-товары, наборы, подарочные комплекты.", value: "Точная сборка — основа рейтинга.", audience: "Интернет-магазины, селлеры." },
  { icon: PackageOpen, title: "Упаковка", intro: "По стандартам площадок или индивидуальным требованиям бренда.", value: "Защита товара без переупаковки.", audience: "Бренды, селлеры." },
  { icon: Truck, title: "Отгрузка", intro: "Формирование и отправка поставок в ТК и на склады маркетплейсов.", value: "Своевременная отгрузка.", audience: "Все клиенты." },
  { icon: RotateCcw, title: "Возвраты", intro: "Приём, проверка и повторная обработка возвращённых товаров.", value: "Быстрый возврат в оборот.", audience: "Селлеры с возвратами." },
  { icon: Shield, title: "Ответственное хранение", intro: "По договору с полной материальной ответственностью.", value: "Юридическая защита товара.", audience: "Компании на внешнем хранении." },
  { icon: Globe, title: "3PL логистика", intro: "Полный аутсорс: вы — продажи, мы — операции.", value: "Фокус на росте бизнеса.", audience: "Компании без склада." },
  { icon: Box, title: "Работа с КГТ", intro: "Приём, хранение и обработка крупногабаритных товаров.", value: "Решение для нестандарта.", audience: "Мебель, техника." },
  { icon: ClipboardList, title: "Подготовка поставок", intro: "Формирование поставок по регламентам WB, Ozon, ЯМ.", value: "Минимум отказов.", audience: "Продавцы на МП." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Услуги"
        title="Полный цикл"
        titleAccent="складских операций"
        subtitle="От приёмки до отгрузки — каждый этап контролируется и оптимизируется. Передайте одну операцию или весь цикл."
        image={operationsImg}
      >
        <Link to="/pricing" className="btn-primary">Подобрать схему работы <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      <section className="section-padding">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label">Каталог услуг</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">11 направлений для вашего бизнеса</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Каждая услуга — отлаженный процесс с WMS-контролем и прозрачной отчётностью.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="premium-card group rounded-2xl p-7">
                <div className="flex items-start gap-5">
                  <div className="icon-box h-11 w-11">
                    <s.icon className="h-5 w-5" style={{ color: "hsl(222 80% 45%)" }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl p-3" style={{ background: "hsl(222 80% 45% / 0.03)", border: "1px solid hsl(222 80% 45% / 0.08)" }}>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "hsl(222 80% 45%)" }}>Ценность</span>
                        <p className="mt-1 text-xs leading-relaxed text-foreground">{s.value}</p>
                      </div>
                      <div className="rounded-xl p-3" style={{ background: "hsl(168 60% 40% / 0.03)", border: "1px solid hsl(168 60% 40% / 0.08)" }}>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "hsl(168 60% 40%)" }}>Для кого</span>
                        <p className="mt-1 text-xs leading-relaxed text-foreground">{s.audience}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Нужна конкретная услуга?"
        subtitle="Расскажите, какие операции хотите передать — подберём рабочую схему."
        buttonText="Подобрать схему работы"
        microcopy="Ответим и предложим конкретный план."
      />
    </>
  );
}
