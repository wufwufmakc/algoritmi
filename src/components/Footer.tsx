import { Link } from "@tanstack/react-router";
import { Send, MessageCircle, MessagesSquare, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { LEGAL } from "@/lib/legal";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer style={{ background: "linear-gradient(160deg, hsl(222 47% 9%), hsl(222 40% 14%))" }}>
      <div className="section-container py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoImg} alt="Алгоритмы" className="h-8 w-8 brightness-0 invert" width={32} height={32} />
              <span className="text-[1.1rem] font-bold" style={{ color: "hsl(0 0% 100%)" }}>Алгоритмы</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed" style={{ color: "hsl(220 15% 55%)" }}>
              Фулфилмент-оператор класса&nbsp;А в&nbsp;Санкт-Петербурге. Системный подход к&nbsp;хранению, обработке и&nbsp;отгрузке товаров.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a href="https://t.me/Algoritmi_FF_Bot" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105" style={{ background: "hsl(222 25% 18%)", border: "1px solid hsl(222 25% 24%)" }}>
                <Send className="h-4 w-4" style={{ color: "hsl(210 20% 80%)" }} />
              </a>
              <a href="https://wa.me/78127406604" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105" style={{ background: "hsl(222 25% 18%)", border: "1px solid hsl(222 25% 24%)" }}>
                <MessageCircle className="h-4 w-4" style={{ color: "hsl(210 20% 80%)" }} />
              </a>
              <a href="https://max.ru/u/f9LHodD0cOII2k93wFHTeiNgRFNp3TVwQ8Mt-3nvVXxES8JQMDKdFrTqk6k" target="_blank" rel="noopener noreferrer" aria-label="MAX" className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105" style={{ background: "hsl(222 25% 18%)", border: "1px solid hsl(222 25% 24%)" }}>
                <MessagesSquare className="h-4 w-4" style={{ color: "hsl(210 20% 80%)" }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "hsl(220 15% 45%)" }}>Услуги</h4>
            <div className="mt-5 flex flex-col gap-3">
              {[
                { to: "/services" as const, label: "Все услуги" },
                { to: "/marketplaces" as const, label: "Маркетплейсы" },
                { to: "/ecommerce" as const, label: "E-commerce" },
                { to: "/kgt" as const, label: "КГТ" },
                { to: "/wms" as const, label: "WMS" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="group flex items-center gap-1 text-sm transition-colors hover:text-white" style={{ color: "hsl(220 15% 55%)" }}>
                  {item.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "hsl(220 15% 45%)" }}>Компания</h4>
            <div className="mt-5 flex flex-col gap-3">
              {[
                { to: "/about" as const, label: "О компании" },
                { to: "/pricing" as const, label: "Цены" },
                { to: "/faq" as const, label: "FAQ" },
                { to: "/contacts" as const, label: "Контакты" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="group flex items-center gap-1 text-sm transition-colors hover:text-white" style={{ color: "hsl(220 15% 55%)" }}>
                  {item.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "hsl(220 15% 45%)" }}>Контакты</h4>
            <div className="mt-5 flex flex-col gap-4">
              <a href={`tel:${LEGAL.phoneTel}`} className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: "hsl(220 15% 55%)" }}>
                <Phone className="h-4 w-4 shrink-0" />
                {LEGAL.phoneDisplay}
              </a>
              <a href={`mailto:${LEGAL.email}`} className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: "hsl(220 15% 55%)" }}>
                <Mail className="h-4 w-4 shrink-0" />
                {LEGAL.email}
              </a>
              <a href={LEGAL.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm transition-colors hover:text-white" style={{ color: "hsl(220 15% 55%)" }}>
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{LEGAL.warehouseAddressShort}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16" style={{ height: 1, background: "linear-gradient(90deg, transparent, hsl(222 25% 20%), transparent)" }} />
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl space-y-1.5 text-xs leading-relaxed" style={{ color: "hsl(220 15% 40%)" }}>
            <div>&copy; {YEAR} {LEGAL.brandName}. Фулфилмент-оператор в Санкт-Петербурге.</div>
            <div>
              {LEGAL.entityName} · ИНН {LEGAL.inn} · ОГРНИП {LEGAL.ogrnip}
            </div>
            <div>Юр. адрес: {LEGAL.legalAddress}</div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy" className="text-xs transition-colors hover:text-white" style={{ color: "hsl(220 15% 55%)" }}>
              Политика конфиденциальности
            </Link>
            <div className="trust-strip-dark">
              <span>Склад класса А</span>
              <span className="dot" />
              <span>WMS-система</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
