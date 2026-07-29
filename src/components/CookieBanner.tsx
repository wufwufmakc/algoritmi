import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "algff-cookie-consent";
export const YM_ID = 109922477;

type YmFn = ((...args: unknown[]) => void) & {
  a?: unknown[][];
  l?: number;
};

declare global {
  interface Window {
    ym?: YmFn;
  }
}

function loadYandexMetrika() {
  if (typeof window === "undefined") return;
  if (document.getElementById("yandex-metrika")) return;

  const ym: YmFn = function (...args: unknown[]) {
    (ym.a = ym.a || []).push(args);
  };
  ym.l = Date.now();
  window.ym = ym;

  const script = document.createElement("script");
  script.id = "yandex-metrika";
  script.async = true;
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}`;
  document.head.appendChild(script);

  window.ym(YM_ID, "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    accurateTrackBounce: true,
    trackLinks: true,
  });
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted") {
      loadYandexMetrika();
      return;
    }
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    loadYandexMetrika();
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-50 max-w-md sm:inset-x-auto sm:left-6 sm:right-auto sm:bottom-6"
      role="dialog"
      aria-label="Согласие на использование cookie"
    >
      <div
        className="relative overflow-hidden rounded-2xl p-5 sm:p-6"
        style={{
          background: "linear-gradient(180deg, hsl(222 30% 13% / 0.96), hsl(222 35% 9% / 0.98))",
          border: "1px solid hsl(222 25% 22%)",
          boxShadow: "0 24px 64px hsl(222 50% 4% / 0.55), inset 0 1px 0 hsl(0 0% 100% / 0.06)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="absolute top-0 left-5 right-5 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(222 80% 60% / 0.55), hsl(168 60% 50% / 0.45), transparent)",
          }}
        />

        <div className="flex items-start gap-3.5">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              background: "linear-gradient(135deg, hsl(222 80% 50%), hsl(222 80% 38%))",
              boxShadow: "0 8px 20px hsl(222 80% 50% / 0.3)",
            }}
          >
            <Cookie className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>
              Мы используем cookie
            </div>
            <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "hsl(220 15% 62%)" }}>
              Файлы cookie и аналитика (Яндекс.Метрика) помогают улучшать сайт. Подробности — в{" "}
              <Link
                to="/privacy"
                className="underline underline-offset-2 transition-colors hover:text-white"
                style={{ color: "hsl(222 80% 72%)" }}
              >
                Политике конфиденциальности
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={accept}
            className="btn-primary !rounded-xl !px-5 !py-2.5 text-xs sm:flex-1 justify-center"
          >
            Принять
          </button>
          <button
            type="button"
            onClick={decline}
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-xs font-medium transition-colors sm:flex-1"
            style={{
              color: "hsl(220 15% 70%)",
              background: "hsl(222 25% 16%)",
              border: "1px solid hsl(222 25% 24%)",
            }}
          >
            Только необходимые
          </button>
        </div>
      </div>
    </div>
  );
}
