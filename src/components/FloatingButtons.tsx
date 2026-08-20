import { Send, MessageCircle, MessagesSquare, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", pointerEvents: visible ? "auto" : "none" }}
    >
      <a
        href="tel:+78127406604"
        className="floating-btn group"
        style={{ background: "hsl(222 80% 45%)" }}
        title="Позвонить 8 (812) 740-66-04"
      >
        <Phone className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
      </a>
      <a
        href="https://t.me/algffspbbot"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn group"
        style={{ background: "hsl(200 80% 50%)" }}
        title="Telegram"
      >
        <Send className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
      </a>
      <a
        href="https://wa.me/78127406604"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn group"
        style={{ background: "hsl(142 70% 45%)" }}
        title="WhatsApp"
      >
        <MessageCircle className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
      </a>
      <a
        href="https://max.ru/u/f9LHodD0cOII2k93wFHTeiNgRFNp3TVwQ8Mt-3nvVXxES8JQMDKdFrTqk6k"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn group"
        style={{ background: "hsl(260 75% 55%)" }}
        title="MAX"
      >
        <MessagesSquare className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
}
