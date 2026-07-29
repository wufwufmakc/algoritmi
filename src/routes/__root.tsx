import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="stat-number text-8xl font-bold text-foreground/10">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Страница не найдена</h2>
        <p className="mt-3 text-sm text-muted-foreground">Запрашиваемая страница не существует или была перемещена.</p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">На главную</Link>
        </div>
      </div>
    </div>
  );
}

const YM_ID = 109922477;
const YM_SCRIPT = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}", "ym");
ym(${YM_ID}, "init", {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Алгоритмы — фулфилмент-оператор в Санкт-Петербурге" },
      { name: "description", content: "Фулфилмент класса А в Шушарах. Хранение, обработка, отгрузка для маркетплейсов и интернет-магазинов. WMS, 3PL, КГТ." },
      { name: "author", content: "Алгоритмы" },
      { property: "og:title", content: "Алгоритмы — фулфилмент-оператор в Санкт-Петербурге" },
      { property: "og:description", content: "Фулфилмент класса А в Шушарах. Хранение, обработка, отгрузка для маркетплейсов и интернет-магазинов. WMS, 3PL, КГТ." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Алгоритмы — фулфилмент-оператор в Санкт-Петербурге" },
      { name: "twitter:description", content: "Фулфилмент класса А в Шушарах. Хранение, обработка, отгрузка для маркетплейсов и интернет-магазинов. WMS, 3PL, КГТ." },
      { property: "og:image", content: "/icon-512.png" },
      { name: "twitter:image", content: "/icon-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", href: appCss, as: "style" },
      { rel: "icon", href: "/favicon.ico?v=algff6", type: "image/x-icon", sizes: "any" },
      { rel: "shortcut icon", href: "/favicon.ico?v=algff6", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png?v=algff6", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/icon-192.png?v=algff6", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/icon-512.png?v=algff6", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/icon-512.png?v=algff6", sizes: "512x512" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      { children: YM_SCRIPT },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript><div><img src={`https://mc.yandex.ru/watch/${YM_ID}`} style={{position:'absolute',left:'-9999px'}} alt="" /></div></noscript>
        {children}
        <Scripts />
      </body>

    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
