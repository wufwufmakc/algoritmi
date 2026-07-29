import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — частые вопросы | Алгоритмы, фулфилмент СПб" },
      { name: "description", content: "Ответы на частые вопросы о фулфилменте." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Когда запускается склад?", a: "Склад в Шушарах запускается в середине мая 2025 года. Уже принимаем заявки." },
  { q: "Можно начать с тестовой партии?", a: "Да, это наш стандартный формат старта. Без долгосрочных обязательств." },
  { q: "У нас уже есть подрядчик. Зачем рассматривать вас?", a: "Попробуйте тестовую партию параллельно — сравните качество." },
  { q: "Можно передать только часть операций?", a: "Да, гибко подходим к формату: хранение, комплектация, сезонные объёмы или весь цикл." },
  { q: "У нас свой склад. Чем внешний фулфилмент лучше?", a: "Зависит от задачи. Полезен для сезонных пиков и масштабирования без капвложений." },
  { q: "Мы боимся потерять контроль над товаром", a: "WMS даёт больше контроля, чем на многих собственных складах." },
  { q: "Работаете с КГТ?", a: "Да, адаптируем зоны и процессы под габариты и вес." },
  { q: "Как работает WMS?", a: "Личный кабинет с остатками, движениями, статусами в реальном времени." },
  { q: "С какими маркетплейсами работаете?", a: "Wildberries, Ozon, Яндекс Маркет. Знаем требования каждой площадки." },
  { q: "Можете адаптировать процессы?", a: "Да. Модель хранения, операции, отчётность — проектируем под клиента." },
  { q: "Где расположен склад?", a: "Санкт-Петербург, Колпинский район, посёлок Петро-Славянка, Софийская улица, 118к5с2, 196642. Рядом с КАД и магистралями." },
  { q: "Как рассчитывается стоимость?", a: "Хранение + операции. Финальная стоимость индивидуальная." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b transition-colors" style={{ borderColor: "hsl(220 13% 91%)" }}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-6 text-left">
        <span className="pr-6 text-sm font-semibold text-foreground md:text-base">{q}</span>
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300"
          style={{ background: open ? "hsl(222 80% 45% / 0.06)" : "hsl(220 14% 96%)" }}
        >
          {open ? <Minus className="h-3.5 w-3.5 text-primary" /> : <Plus className="h-3.5 w-3.5 text-muted-foreground" />}
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="pb-6 text-sm leading-relaxed text-muted-foreground">{a}</div>
      </div>
    </div>
  );
}

function FAQPage() {
  return (
    <>
      <PageHero
        badge="FAQ"
        title="Частые"
        titleAccent="вопросы"
        subtitle="Ответы на вопросы, которые задают чаще всего."
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Остались вопросы?"
        subtitle="Напишите — ответим в течение часа."
        microcopy="Без обязательств."
      />
    </>
  );
}
