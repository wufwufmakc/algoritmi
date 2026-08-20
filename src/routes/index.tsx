import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Send, MessageCircle, MessagesSquare, Warehouse, BarChart3, Package, Truck,
  Zap, Settings, Eye, CheckCircle2, HelpCircle,
  ShieldCheck, RefreshCcw, MapPin, Check, Activity, Building2, Rocket,
  Layers, Lock, LayoutDashboard, PackageCheck, Timer, Scan, Tag,
  ClipboardList, TrendingUp, Loader2, PhoneCall, Sparkles
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { MarketplaceLogo } from "@/components/MarketplaceLogos";
import { HomeCallbackSection } from "@/components/HomeCallbackSection";
import heroImg from "@/assets/hero-warehouse-premium.jpg";
import packingImg from "@/assets/packing-station.jpg";
import wmsImg from "@/assets/wms-screen.jpg";
import exteriorImg from "@/assets/warehouse-exterior-premium.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Алгоритмы — фулфилмент класса А в Санкт-Петербурге, Петро-Славянка" },
      { name: "description", content: "Фулфилмент-оператор в Шушарах. Склад класса А, WMS-система, работа с маркетплейсами и интернет-магазинами. 3PL логистика СПб." },
    ],
    links: [
      { rel: "preload", href: heroImg, as: "image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden" style={{ background: "hsl(222 47% 7%)" }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1080} fetchPriority="high" style={{ opacity: 0.3 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, hsl(222 47% 7% / 0.93) 0%, hsl(222 47% 7% / 0.55) 50%, hsl(222 47% 7% / 0.96) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 65%, hsl(222 47% 7%) 100%)" }} />
        </div>
        
        <div className="pointer-events-none absolute -top-48 right-0 h-[900px] w-[900px]" style={{ background: "radial-gradient(circle at 60% 30%, hsl(222 80% 50% / 0.12), transparent 55%)" }} />

        <div className="section-container relative flex min-h-[100dvh] items-center pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="grid w-full gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-5">
              <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-medium" style={{ background: "hsl(168 60% 45% / 0.1)", border: "1px solid hsl(168 60% 45% / 0.2)", color: "hsl(168 60% 58%)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" style={{ background: "hsl(168 60% 50%)" }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "hsl(168 60% 50%)" }} />
                </span>
                Запуск — май 2025 · Петро-Славянка, СПб
              </div>

              <h1 className="text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]" style={{ color: "hsl(0 0% 100%)" }}>
                Фулфилмент{" "}
                <span style={{ background: "linear-gradient(135deg, hsl(222 80% 65%), hsl(168 60% 55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>класса&nbsp;А</span>{" "}
                <span className="text-[0.82em]" style={{ color: "hsl(220 20% 82%)" }}>в&nbsp;Санкт&#8209;Петербурге</span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-[1.75] md:text-[1.0625rem]" style={{ color: "hsl(220 20% 68%)" }}>
                Склад 5 000 м² в&nbsp;Шушарах с&nbsp;WMS-системой полного цикла. Хранение, маркировка, сборка, упаковка, отгрузка — для&nbsp;маркетплейсов и&nbsp;интернет-магазинов.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {["WMS-система — полная прозрачность операций", "Тестовый запуск за 3–5 рабочих дней", "Wildberries, Ozon, Яндекс Маркет, D2C"].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm" style={{ color: "hsl(220 20% 76%)" }}>
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "hsl(168 60% 45% / 0.12)" }}>
                      <Check className="h-3 w-3" style={{ color: "hsl(168 60% 55%)" }} />
                    </div>
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link to="/pricing" className="group inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-300 hover:brightness-110" style={{ background: "linear-gradient(135deg, hsl(222 80% 50%), hsl(222 80% 40%))", color: "hsl(0 0% 100%)", boxShadow: "0 4px 24px hsl(222 80% 50% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.1)" }}>
                  Получить расчёт <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a href="https://t.me/algffspbbot" target="_blank" rel="noopener noreferrer" className="btn-outline-dark"><Send className="h-4 w-4" /> Telegram</a>
                <a href="https://wa.me/78127406604" target="_blank" rel="noopener noreferrer" className="btn-outline-dark"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                <a href="https://max.ru/u/f9LHodD0cOII2k93wFHTeiNgRFNp3TVwQ8Mt-3nvVXxES8JQMDKdFrTqk6k" target="_blank" rel="noopener noreferrer" className="btn-outline-dark"><MessagesSquare className="h-4 w-4" /> MAX</a>
              </div>
              <div className="mt-3.5 flex items-center gap-2 text-xs" style={{ color: "hsl(220 15% 48%)" }}>
                <ShieldCheck className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 50%)" }} />
                Ответим и предложим рабочую схему в течение дня
              </div>
            </div>

            {/* Right visual */}
            <div className="relative hidden lg:col-span-6 lg:flex lg:items-center xl:col-span-7">
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ border: "1px solid hsl(222 25% 18%)", boxShadow: "0 30px 80px hsl(222 50% 8% / 0.7)" }}>
                <img src={heroImg} alt="Склад класса А — Алгоритмы" className="w-full object-cover" style={{ height: 460 }} width={1920} height={1080} fetchPriority="high" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, hsl(222 47% 7% / 0.8) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3" style={{ background: "hsl(222 47% 7% / 0.7)", backdropFilter: "blur(16px)", borderTop: "1px solid hsl(222 25% 18%)" }}>
                  {[
                    { value: "5 000 м²", label: "Склад класса А", icon: Building2 },
                    { value: "24/7", label: "WMS-мониторинг", icon: Activity },
                    { value: "98.7%", label: "Точность сборки", icon: TrendingUp },
                  ].map((s, i) => (
                    <div key={s.label} className="flex items-center gap-3 px-5 py-4" style={i > 0 ? { borderLeft: "1px solid hsl(222 25% 18%)" } : undefined}>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(222 80% 55% / 0.12)" }}>
                        <s.icon className="h-4 w-4" style={{ color: "hsl(222 80% 65%)" }} />
                      </div>
                      <div>
                        <div className="stat-number text-sm font-bold" style={{ color: "hsl(0 0% 100%)" }}>{s.value}</div>
                        <div className="text-[11px]" style={{ color: "hsl(220 15% 52%)" }}>{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-3 -right-3 z-10 rounded-xl p-4" style={{ background: "hsl(0 0% 100%)", boxShadow: "0 16px 48px hsl(0 0% 0% / 0.25)", width: 195 }}>
                <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "hsl(222 80% 45%)" }}><LayoutDashboard className="h-4 w-4" /> WMS Dashboard</div>
                <div className="mt-3 space-y-2.5">
                  <div className="flex justify-between text-[11px]"><span style={{ color: "hsl(220 9% 50%)" }}>Товаров на складе</span><span className="font-semibold" style={{ color: "hsl(222 47% 11%)" }}>1,247</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full" style={{ background: "hsl(220 14% 93%)" }}><div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, hsl(222 80% 55%), hsl(222 80% 45%))", width: "72%" }} /></div>
                  <div className="flex justify-between text-[11px]"><span style={{ color: "hsl(220 9% 50%)" }}>Точность</span><span className="font-semibold" style={{ color: "hsl(168 60% 38%)" }}>98.7%</span></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 z-10 flex items-center gap-3 rounded-xl px-5 py-4" style={{ background: "hsl(222 30% 12% / 0.9)", backdropFilter: "blur(16px)", border: "1px solid hsl(222 25% 20%)", boxShadow: "0 16px 48px hsl(0 0% 0% / 0.35)" }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "hsl(168 60% 45% / 0.12)" }}><Rocket className="h-5 w-5" style={{ color: "hsl(168 60% 50%)" }} /></div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: "hsl(0 0% 100%)" }}>Тестовый запуск</div>
                  <div className="text-[11px]" style={{ color: "hsl(220 15% 52%)" }}>3–5 рабочих дней · без обязательств</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t" style={{ borderColor: "hsl(222 25% 14%)", background: "hsl(222 47% 7% / 0.9)" }}>
          <div className="section-container py-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs" style={{ color: "hsl(220 15% 48%)" }}>
              <div className="flex items-center gap-6">
                {["Wildberries", "Ozon", "Яндекс Маркет"].map((n) => (
                  <span key={n} className="flex items-center gap-2 font-medium"><MarketplaceLogo name={n} size={18} />{n}</span>
                ))}
                <span className="flex items-center gap-1.5 font-medium"><span className="h-1 w-1 rounded-full" style={{ background: "hsl(222 80% 55%)" }} />D2C / Интернет-магазины</span>
              </div>
              <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Петро-Славянка, СПб · Склад класса А</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST STRIP ═══════════════ */}
      <section style={{ borderBottom: "1px solid hsl(220 13% 93%)" }}>
        <div className="section-container py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {[
              { icon: Building2, label: "Склад класса А" },
              { icon: Eye, label: "WMS-контроль" },
              { icon: MapPin, label: "Петро-Славянка, СПб" },
              { icon: Zap, label: "Гибкий запуск" },
              { icon: Rocket, label: "Тестовая партия" },
              { icon: Package, label: "Маркетплейсы" },
              { icon: Layers, label: "Работа с КГТ" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2.5 text-xs font-medium text-muted-foreground">
                <t.icon className="h-4 w-4 shrink-0 text-primary" />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOMEPAGE CALLBACK CTA ═══════════════ */}
      <HomeCallbackSection />

      {/* ═══════════════ ПОЧЕМУ АЛГОРИТМЫ ═══════════════ */}
      <section className="section-padding relative" style={{ background: "hsl(220 20% 97%)" }}>
        <div className="section-container relative">
          <div className="mb-14">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">Почему мы</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">Что отличает Алгоритмы</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Не просто склад. Операционная платформа, спроектированная для e-commerce и маркетплейсов.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, title: "Удобная локация", desc: "Петро-Славянка — рядом с КАД и логистическими потоками WB и Ozon.", accent: "hsl(222 80% 45%)" },
              { icon: Zap, title: "Гибкий запуск", desc: "Начните с тестовой партии — масштабируйтесь по мере роста.", accent: "hsl(168 60% 40%)" },
              { icon: Eye, title: "WMS и прозрачность", desc: "Остатки, движения, статусы — всё в реальном времени.", accent: "hsl(222 80% 45%)" },
              { icon: Settings, title: "Адаптация под клиента", desc: "Модель хранения, процессы, оборудование — подстроим под вас.", accent: "hsl(168 60% 40%)" },
              { icon: Layers, title: "Дооснащение под проект", desc: "Для крупных клиентов адаптируем инфраструктуру.", accent: "hsl(222 80% 45%)" },
              { icon: Package, title: "Маркетплейсы", desc: "Стандарты WB, Ozon, Яндекс Маркет. Подготовим поставки.", accent: "hsl(168 60% 40%)" },
              { icon: Rocket, title: "Тестовая партия", desc: "Оцените качество до контракта. Запуск за 3–5 дней.", accent: "hsl(222 80% 45%)" },
              { icon: Truck, title: "Работа с КГТ", desc: "Крупногабаритные товары, особые условия, индивидуальная модель.", accent: "hsl(168 60% 40%)" },
            ].map((c) => (
              <div key={c.title} className="premium-card group h-full p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105" style={{ background: `${c.accent}09`, border: `1px solid ${c.accent}15` }}>
                  <c.icon className="h-5 w-5" style={{ color: c.accent }} />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ДЛЯ КОГО ═══════════════ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">Для кого</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Подходит для вашего бизнеса</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">Работаем с компаниями любого масштаба — от первой поставки до тысяч заказов в день.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Селлеры Wildberries", desc: "FBO-поставки по стандартам WB, близость к хабу.", marketplace: "Wildberries", color: "#CB11AB", bg: "linear-gradient(135deg, #F9E6F5 0%, #FCF0FA 100%)", border: "#CB11AB22" },
                { title: "Селлеры Ozon", desc: "FBO/FBS, мульти-товарные заказы, штрихкодирование.", marketplace: "Ozon", color: "#005BFF", bg: "linear-gradient(135deg, #E6EFFF 0%, #F0F5FF 100%)", border: "#005BFF22" },
                { title: "Яндекс Маркет", desc: "Отгрузки по регламенту ЯМ, маркировка и этикетирование.", marketplace: "Яндекс Маркет", color: "#FC3F1D", bg: "linear-gradient(135deg, #FFF0EC 0%, #FFF6F3 100%)", border: "#FC3F1D22" },
                { title: "Интернет-магазины", desc: "D2C фулфилмент: комплектация, упаковка, доставка.", marketplace: null, color: null, bg: undefined, border: undefined },
                { title: "Компании с КГТ", desc: "Крупногабаритные товары, индивидуальные процессы.", marketplace: null, color: null, bg: undefined, border: undefined },
                { title: "Бизнес в период роста", desc: "Гибкий старт, быстрое масштабирование мощностей.", marketplace: null, color: null, bg: undefined, border: undefined },
              ].map((c) => (
                <div key={c.title} className={`group relative flex h-full items-start gap-4 overflow-hidden rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${!c.marketplace ? 'premium-card' : ''}`} style={c.marketplace ? { background: c.bg, border: `1.5px solid ${c.border}` } : undefined}>
                  {c.marketplace && <div className="absolute top-0 right-0 h-24 w-24 opacity-[0.07]" style={{ background: `radial-gradient(circle at 100% 0%, ${c.color}, transparent 70%)` }} />}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm" style={c.marketplace ? { background: "white", border: `1px solid ${c.border}` } : { background: "hsl(168 60% 40% / 0.08)" }}>
                    {c.marketplace ? <MarketplaceLogo name={c.marketplace} size={24} /> : <CheckCircle2 className="h-4 w-4" style={{ color: "hsl(168 60% 40%)" }} />}
                  </div>
                  <div className="relative">
                    <h3 className="text-sm font-semibold" style={c.color ? { color: c.color } : undefined}>{c.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ УСЛУГИ — dark ═══════════════ */}
      <section className="relative section-padding overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(222 47% 11%), hsl(222 35% 16%))" }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="section-container relative">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid hsl(222 25% 20%)", boxShadow: "0 24px 64px hsl(0 0% 0% / 0.4)" }}>
              <img src={packingImg} alt="Фулфилмент-операции" className="w-full object-cover" style={{ height: 500 }} loading="lazy" width={1280} height={864} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, hsl(222 47% 11% / 0.8) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: "hsl(222 47% 11% / 0.6)", backdropFilter: "blur(12px)" }}>
                <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "hsl(220 15% 70%)" }}>
                  <PackageCheck className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 50%)" }} />
                  Комплектация и упаковка — полный цикл обработки заказов
                </div>
              </div>
            </div>

            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "hsl(222 80% 65%)" }}>Услуги</span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "hsl(0 0% 100%)" }}>Ключевые направления</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed" style={{ color: "hsl(220 15% 62%)" }}>Закрываем все операционные задачи — от приёмки до доставки.</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ClipboardList, title: "Приёмка", desc: "Проверка, пересчёт, размещение." },
                  { icon: Warehouse, title: "Хранение", desc: "Адресное хранение, контроль условий." },
                  { icon: Tag, title: "Маркировка", desc: "Штрихкоды, этикетки по стандартам." },
                  { icon: PackageCheck, title: "Комплектация", desc: "Сборка заказов по WMS." },
                  { icon: Package, title: "Упаковка", desc: "По требованиям площадки." },
                  { icon: Truck, title: "Отгрузка", desc: "FBO, FBS, D2C, ТК." },
                  { icon: RefreshCcw, title: "Возвраты", desc: "Приём, проверка, возврат в оборот." },
                  { icon: Scan, title: "Подготовка поставок", desc: "Для WB, Ozon, Яндекс Маркет." },
                ].map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(222 80% 55% / 0.1)" }}>
                      <s.icon className="h-4 w-4" style={{ color: "hsl(222 80% 65%)" }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>{s.title}</h4>
                      <p className="text-xs" style={{ color: "hsl(220 15% 55%)" }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/services" className="btn-white text-sm">Все услуги <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WMS ═══════════════ */}
      <section className="section-padding" style={{ background: "hsl(220 20% 97%)" }}>
        <div className="section-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">WMS-система</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Прозрачность вместо «чёрного ящика»</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">WMS-система даёт полную видимость: остатки, движения, статусы операций. Данные всегда доступны — без звонков и ожидания.</p>
              <div className="mt-8 space-y-5">
                {[
                  { icon: BarChart3, title: "Остатки в реальном времени", desc: "Точный баланс по каждому SKU и ячейке." },
                  { icon: Activity, title: "Движения товара", desc: "Полная история: приёмка, перемещения, отгрузки." },
                  { icon: Timer, title: "Статусы операций", desc: "Этапы обработки: от сборки до отгрузки." },
                  { icon: Lock, title: "Безопасность данных", desc: "Личный кабинет с разграничением доступа." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(222 80% 45% / 0.06)", border: "1px solid hsl(222 80% 45% / 0.1)" }}>
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10"><Link to="/wms" className="btn-primary text-sm">Подробнее о WMS <ArrowRight className="h-4 w-4" /></Link></div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ border: "1px solid hsl(220 13% 88%)" }}>
              <img src={wmsImg} alt="WMS-система Алгоритмы" className="w-full object-cover" style={{ height: 440 }} loading="lazy" width={1280} height={800} />
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium" style={{ background: "hsl(0 0% 100% / 0.9)", backdropFilter: "blur(8px)", color: "hsl(222 80% 45%)", boxShadow: "0 4px 12px hsl(0 0% 0% / 0.1)" }}>
                <LayoutDashboard className="h-3.5 w-3.5" /> Личный кабинет клиента
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ТЕСТОВЫЙ ЗАПУСК ═══════════════ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">Тестовый запуск</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Начните с&nbsp;тестовой партии — без&nbsp;рисков</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">Не нужно подписывать годовой контракт. Отправьте небольшую партию — мы примем, обработаем и отгрузим.</p>
              <ul className="mt-8 space-y-4">
                {["Запуск за 3–5 рабочих дней", "Минимум документов на старте", "Полная обработка: приёмка → хранение → отгрузка", "Доступ к WMS с первого дня", "Без долгосрочных обязательств"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "hsl(168 60% 40%)" }} />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/pricing" className="btn-primary">Запустить тестовую партию <ArrowRight className="h-4 w-4" /></Link>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 40%)" }} />Поможем рассчитать удобный формат запуска
                </div>
              </div>
            </div>
            <div className="premium-card rounded-2xl p-8" style={{ boxShadow: "0 8px 40px hsl(222 80% 45% / 0.06)" }}>
              <h3 className="text-lg font-bold text-foreground">Как это работает</h3>
              <div className="mt-7 space-y-6">
                {[
                  { step: "01", title: "Обсуждаем задачу", desc: "Вы описываете товар, объёмы — мы предлагаем модель." },
                  { step: "02", title: "Отправляете партию", desc: "Небольшой объём для проверки процессов." },
                  { step: "03", title: "Мы обрабатываем", desc: "Приёмка, размещение, маркировка, отгрузка." },
                  { step: "04", title: "Вы оцениваете", desc: "Качество, скорость, прозрачность через WMS." },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(222 80% 45% / 0.06)" }}>
                      <span className="stat-number text-sm font-bold text-primary">{s.step}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{s.title}</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PAIN / SOLUTION ═══════════════ */}
      <section className="relative section-padding overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(222 47% 11%), hsl(222 35% 16%))" }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="section-container relative">
          <div className="mb-14">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "hsl(222 80% 65%)" }}>Знакомо?</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "hsl(0 0% 100%)" }}>Если хотя бы один пункт — про вас</h2>
            <p className="mt-5 max-w-2xl text-base" style={{ color: "hsl(220 15% 62%)" }}>Мы решаем эти задачи каждый день. Расскажите о своей — предложим схему.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { pain: "Не хватает места на складе", solution: "Гибкая модель масштабирования — без переезда." },
              { pain: "Внутренний склад не справляется", solution: "Полный аутсорс или частичная передача операций." },
              { pain: "Нужна маркировка для маркетплейсов", solution: "Маркируем по стандартам WB, Ozon, ЯМ." },
              { pain: "Нет прозрачного учёта", solution: "WMS с точными остатками и историей движений." },
              { pain: "Есть КГТ или нестандартный товар", solution: "Адаптируем процессы под габариты." },
              { pain: "Нужен резервный подрядчик", solution: "Тестовая партия без обязательств." },
            ].map((item, i) => (
              <div key={i} className="dark-card h-full rounded-xl p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(12 76% 65%)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(12 76% 65%)" }} />{item.pain}
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "hsl(168 60% 50%)" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "hsl(210 20% 82%)" }}>{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ МАРКЕТПЛЕЙСЫ ═══════════════ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">Маркетплейсы</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">Знаем требования каждой площадки</h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">Подготовим поставки по стандартам — минимум отказов, максимум скорости.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Wildberries", desc: "Маркировка, упаковка, FBO-поставки. Близость к хабу WB.", color: "#CB11AB", bg: "linear-gradient(135deg, #F9E6F5 0%, #FCF0FA 100%)", border: "#CB11AB22", services: ["Маркировка", "Упаковка", "FBO", "Контроль"] },
              { name: "Ozon", desc: "FBO/FBS, штрихкодирование, мульти-товарные заказы.", color: "#005BFF", bg: "linear-gradient(135deg, #E6EFFF 0%, #F0F5FF 100%)", border: "#005BFF22", services: ["FBO/FBS", "Штрихкоды", "Комплектация", "Документы"] },
              { name: "Яндекс Маркет", desc: "Отгрузки по регламенту, маркировка, возвраты.", color: "#FC3F1D", bg: "linear-gradient(135deg, #FFF0EC 0%, #FFF6F3 100%)", border: "#FC3F1D22", services: ["Маркировка", "Отгрузки", "Возвраты", "Подготовка"] },
            ].map((mp) => (
              <div key={mp.name} className="group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ background: mp.bg, border: `1.5px solid ${mp.border}` }}>
                <div className="absolute top-0 right-0 h-32 w-32 opacity-[0.07]" style={{ background: `radial-gradient(circle at 100% 0%, ${mp.color}, transparent 70%)` }} />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm" style={{ background: "white", border: `1px solid ${mp.border}` }}>
                    <MarketplaceLogo name={mp.name} size={32} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold" style={{ color: mp.color }}>{mp.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(220 15% 35%)" }}>{mp.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {mp.services.map((s) => (
                      <span key={s} className="rounded-full px-3 py-1 text-[11px] font-medium" style={{ background: "hsl(0 0% 100% / 0.7)", color: mp.color, border: `1px solid ${mp.border}` }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/marketplaces" className="btn-primary">Подробнее о маркетплейсах <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ ЛОКАЦИЯ ═══════════════ */}
      <section className="section-padding" style={{ background: "hsl(220 20% 97%)" }}>
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ border: "1px solid hsl(220 13% 88%)" }}>
              <img src={exteriorImg} alt="Склад Алгоритмы — Петро-Славянка, СПб" className="w-full object-cover" style={{ height: 380 }} loading="lazy" width={1280} height={720} />
              <a href="https://yandex.ru/maps/-/CPGJMAZY" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-transform hover:scale-105" style={{ background: "hsl(0 0% 100% / 0.9)", backdropFilter: "blur(8px)", color: "hsl(222 47% 11%)", boxShadow: "0 4px 12px hsl(0 0% 0% / 0.08)" }}>
                <MapPin className="h-3.5 w-3.5 text-primary" /> Петро-Славянка, Санкт-Петербург
              </a>
            </div>
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">Локация</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Петро-Славянка — логистически удобно</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">Рядом с КАД, ключевыми магистралями и логистическими потоками крупных маркетплейсов.</p>
              <ul className="mt-6 space-y-3">
                {["Рядом с КАД и транспортными узлами", "Близость к хабам WB и Ozon", "Удобная доступность для ТК", "Без городских ограничений по грузовому транспорту"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "hsl(168 60% 40%)" }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-14">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Ответы на ключевые вопросы</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { q: "Когда запуск склада?", a: "Склад в Шушарах запускается в середине мая 2025. Уже принимаем заявки." },
              { q: "Можно начать с небольшого объёма?", a: "Да. Тестовая партия — стандартный формат старта без обязательств." },
              { q: "У нас уже есть подрядчик. Зачем менять?", a: "Попробуйте тестовую партию параллельно — сравните качество." },
              { q: "Нам нужна только часть операций", a: "Работаем гибко: хранение, сборка, частичный аутсорс или полный цикл." },
            ].map((faq, i) => (
              <div key={i} className="premium-card h-full rounded-xl p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(222 80% 45% / 0.06)" }}>
                    <HelpCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/faq" className="btn-outline">Все вопросы и ответы <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Готовы обсудить задачу?"
        subtitle="Расскажите о товаре и объёмах — мы подготовим конкретное предложение и план запуска под ваш процесс."
        microcopy="Ответим в течение дня. Без обязательств — просто обсудим задачу."
      />
    </>
  );
}
