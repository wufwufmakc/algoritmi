export function WildberriesLogo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M4 8L8.5 24H11L14 14L17 24H19.5L24 8H21L18.2 19L15.2 8H12.8L9.8 19L7 8H4Z" fill="#CB11AB" />
    </svg>
  );
}

export function OzonLogo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="10" stroke="#005BFF" strokeWidth="3" fill="none" />
      <circle cx="16" cy="16" r="4" fill="#005BFF" />
    </svg>
  );
}

export function YandexMarketLogo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M18 4H15C11.134 4 8 7.134 8 11C8 13.8 9.6 16.2 12 17.4V28H15V18H16.5L21 28H24.5L19.5 17.5C22 16.2 24 13.8 24 11C24 7.134 20.866 4 18 4ZM15 15V7H18C19.657 7 21 8.343 21 11C21 13.657 19.657 15 18 15H15Z" fill="#FC3F1D" />
    </svg>
  );
}

export function MarketplaceLogo({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  if (name === "Wildberries") return <WildberriesLogo size={size} className={className} />;
  if (name === "Ozon") return <OzonLogo size={size} className={className} />;
  if (name === "Яндекс Маркет") return <YandexMarketLogo size={size} className={className} />;
  return null;
}
