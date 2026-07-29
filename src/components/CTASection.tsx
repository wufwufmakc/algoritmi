import { Link } from "@tanstack/react-router";
import { Send, MessageCircle, MessagesSquare, ArrowRight, ShieldCheck } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  microcopy?: string;
  buttonText?: string;
  buttonLink?: string;
  showMessengers?: boolean;
}

export function CTASection({
  title = "Готовы обсудить задачу?",
  subtitle = "Расскажите о вашем товаре и объёмах — подготовим индивидуальное предложение и план запуска.",
  microcopy,
  buttonText = "Получить расчёт",
  buttonLink = "/pricing",
  showMessengers = true,
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16"
          style={{ background: "linear-gradient(160deg, hsl(222 47% 9%), hsl(222 35% 16%))" }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full" style={{ background: "radial-gradient(circle, hsl(222 80% 55% / 0.15), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full" style={{ background: "radial-gradient(circle, hsl(168 60% 40% / 0.1), transparent 70%)" }} />

          <div className="relative text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem]" style={{ color: "hsl(0 0% 100%)" }}>{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: "hsl(220 15% 62%)" }}>{subtitle}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={buttonLink as "/"} className="btn-white text-base">
                {buttonText} <ArrowRight className="h-4 w-4" />
              </Link>
              {showMessengers && (
                <>
                  <a href="https://t.me/Algoritmi_FF_Bot" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                    <Send className="h-4 w-4" /> Telegram
                  </a>
                  <a href="https://wa.me/78127406604" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a href="https://max.ru/u/f9LHodD0cOII2k93wFHTeiNgRFNp3TVwQ8Mt-3nvVXxES8JQMDKdFrTqk6k" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                    <MessagesSquare className="h-4 w-4" /> MAX
                  </a>
                </>
              )}
            </div>
            {microcopy && (
              <div className="mt-6 flex items-center justify-center gap-2 text-xs" style={{ color: "hsl(220 15% 50%)" }}>
                <ShieldCheck className="h-3.5 w-3.5" style={{ color: "hsl(168 60% 50%)" }} />
                <span>{microcopy}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
