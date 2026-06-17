type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeClass = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

const sizePx = {
  sm: 36,
  md: 44,
  lg: 56,
};

export default function Logo({ className = "", size = "md", priority = false }: LogoProps) {
  const px = sizePx[size];
  return (
    <img
      src="/images/logo.png"
      alt="Alphacsoft"
      width={px}
      height={px}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`${sizeClass[size]} rounded-xl object-cover ${className}`}
    />
  );
}
