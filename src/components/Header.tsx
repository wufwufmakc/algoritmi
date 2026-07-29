import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Send, MessageCircle, MessagesSquare, ArrowRight, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Главная" },
  { to: "/services", label: "Услуги" },
  { to: "/marketplaces", label: "Маркетплейсы" },
  { to: "/ecommerce", label: "E-commerce" },
  { to: "/kgt", label: "КГТ" },
  { to: "/wms", label: "WMS" },
  { to: "/pricing", label: "Цены" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
] as const;

/** Pages whose first viewport is a dark hero — header chrome goes light until scroll. */
const DARK_HERO_PATHS = new Set(["/", "/wms", "/thank-you"]);

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isDarkHero = DARK_HERO_PATHS.has(pathname);
  // White logo/nav only over dark heroes; force dark chrome when scrolled or mobile drawer open.
  const light = isDarkHero && !scrolled && !mobileOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const brandColor = light ? "hsl(0 0% 100%)" : "hsl(222 47% 11%)";
  const mutedColor = light ? "hsl(0 0% 100% / 0.75)" : "hsl(220 9% 46%)";
  const iconHover = light ? "hover:bg-white/10" : "hover:bg-muted/60 hover:text-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen ? "shadow-sm" : ""
      }`}
      style={{
        background: scrolled || mobileOpen ? "hsl(0 0% 100% / 0.92)" : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(20px) saturate(1.2)" : "none",
        borderBottom:
          scrolled || mobileOpen
            ? "1px solid hsl(220 13% 91% / 0.8)"
            : "1px solid transparent",
      }}
    >
      <div className="section-container flex h-[72px] items-center gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src={logoImg}
            alt="Алгоритмы"
            className="h-8 w-8 transition-all duration-500"
            style={{ filter: light ? "brightness(0) invert(1)" : "none" }}
            width={32}
            height={32}
          />
          <span
            className="text-[1.1rem] font-bold tracking-tight transition-colors duration-500"
            style={{ color: brandColor }}
          >
            Алгоритмы
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors duration-200"
              style={{ color: mutedColor }}
              activeProps={{ className: "!text-primary !bg-primary/5" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
          <a
            href="https://t.me/Algoritmi_FF_Bot"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${iconHover}`}
            style={{ color: mutedColor }}
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/78127406604"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${iconHover}`}
            style={{ color: mutedColor }}
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOII2k93wFHTeiNgRFNp3TVwQ8Mt-3nvVXxES8JQMDKdFrTqk6k"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${iconHover}`}
            style={{ color: mutedColor }}
          >
            <MessagesSquare className="h-4 w-4" />
          </a>
          <div
            className="mx-1 h-5 w-px transition-colors duration-500"
            style={{ background: light ? "hsl(0 0% 100% / 0.2)" : "hsl(220 13% 88%)" }}
          />
          <Link to="/pricing" className="btn-primary !rounded-lg !px-4 !py-2.5 text-xs whitespace-nowrap">
            Получить расчёт <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="ml-auto xl:hidden" />

        <a
          href="tel:+78127406604"
          className="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-semibold transition-colors hover:text-primary"
          style={{ color: brandColor }}
        >
          <Phone className="h-3.5 w-3.5" /> 8 (812) 740-66-04
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors xl:hidden"
          style={{ color: brandColor }}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="overflow-hidden border-t xl:hidden"
          style={{
            borderColor: "hsl(220 13% 91%)",
            background: "hsl(0 0% 100% / 0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          <nav className="section-container flex flex-col gap-0.5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "!text-primary bg-primary/5" }}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2.5 border-t pt-4" style={{ borderColor: "hsl(220 13% 91%)" }}>
              <a
                href="tel:+78127406604"
                className="flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-foreground bg-muted/60 hover:bg-muted transition-colors"
              >
                <Phone className="h-4 w-4" /> 8 (812) 740-66-04
              </a>
              <div className="flex gap-2">
                <a
                  href="https://t.me/Algoritmi_FF_Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center !py-3 text-xs"
                >
                  <Send className="h-3.5 w-3.5" /> Telegram
                </a>
                <a
                  href="https://wa.me/78127406604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center !py-3 text-xs"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </div>
              <a
                href="https://max.ru/u/f9LHodD0cOII2k93wFHTeiNgRFNp3TVwQ8Mt-3nvVXxES8JQMDKdFrTqk6k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center !py-3 text-xs"
              >
                <MessagesSquare className="h-3.5 w-3.5" /> MAX
              </a>
              <Link to="/pricing" className="btn-primary justify-center text-sm" onClick={() => setMobileOpen(false)}>
                Получить расчёт <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
