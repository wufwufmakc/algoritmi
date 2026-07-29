interface SectionBlockProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionBlock({ badge, title, subtitle, children, className = "", id, centered = false, dark = false }: SectionBlockProps) {
  return (
    <section className={`section-padding ${dark ? "section-dark" : ""} ${className}`} id={id}>
      <div className="section-container">
        <div className={`mb-16 ${centered ? "text-center" : ""}`}>
          {badge && (
            <span className={dark ? "section-label-dark" : "section-label"}>
              {badge}
            </span>
          )}
          <h2 className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] ${dark ? "" : "text-foreground"}`}
            style={dark ? { color: "hsl(0 0% 100%)" } : undefined}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-5 text-base leading-relaxed ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
              style={dark ? { color: "hsl(220 15% 58%)" } : { color: "hsl(220 9% 46%)" }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
