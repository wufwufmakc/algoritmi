interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  children?: React.ReactNode;
  image?: string;
  dark?: boolean;
}

export function PageHero({ badge, title, titleAccent, subtitle, children, image, dark = false }: PageHeroProps) {
  if (dark) {
    return (
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32" style={{ background: "linear-gradient(160deg, hsl(222 47% 9%), hsl(222 35% 16%))" }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }} />
        <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px]" style={{ background: "radial-gradient(circle, hsl(222 80% 50% / 0.1), transparent 60%)" }} />

        <div className="section-container relative">
          <div className={`grid gap-12 ${image ? "lg:grid-cols-2 lg:items-center" : ""}`}>
            <div className="max-w-3xl">
              {badge && (
                <span className="badge-premium-dark mb-6 inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(222 80% 65%)" }} />
                  {badge}
                </span>
              )}
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.5rem]" style={{ color: "hsl(0 0% 100%)" }}>
                {title}
                {titleAccent && <span className="gradient-text-accent"> {titleAccent}</span>}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "hsl(220 15% 62%)" }}>
                {subtitle}
              </p>
              {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
            </div>

            {image && (
              <div className="image-frame-dark">
                <img src={image} alt="" className="w-full object-cover" style={{ maxHeight: 420 }} loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32" style={{ background: "hsl(220 20% 97%)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{
        backgroundImage: "linear-gradient(hsl(220 13% 91% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(220 13% 91% / 0.6) 1px, transparent 1px)",
        backgroundSize: "72px 72px"
      }} />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px]" style={{ background: "radial-gradient(circle, hsl(222 80% 45% / 0.05), transparent 60%)" }} />

      <div className="section-container relative">
        <div className={`grid gap-12 ${image ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          <div className="max-w-3xl">
            {badge && (
              <span className="badge-premium mb-6 inline-flex">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(222 80% 45%)" }} />
                {badge}
              </span>
            )}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
              {title}
              {titleAccent && <span className="gradient-text"> {titleAccent}</span>}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
            {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
          </div>

          {image && (
            <div className="image-frame">
              <img src={image} alt="" className="w-full object-cover" style={{ maxHeight: 420 }} loading="lazy" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
