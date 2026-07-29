import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  dark?: boolean;
}

export function FeatureCard({ icon: Icon, title, description, dark = false }: FeatureCardProps) {
  return (
    <div className={`group rounded-2xl p-7 ${dark ? "dark-card" : "premium-card"}`}>
      <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${dark ? "icon-box-dark" : "icon-box"}`}>
        <Icon className="h-5 w-5" style={{ color: dark ? "hsl(222 80% 65%)" : "hsl(222 80% 45%)" }} />
      </div>
      <h3 className="text-[0.94rem] font-semibold" style={{ color: dark ? "hsl(0 0% 100%)" : "hsl(222 47% 11%)" }}>{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed" style={{ color: dark ? "hsl(220 15% 58%)" : "hsl(220 9% 46%)" }}>{description}</p>
    </div>
  );
}
