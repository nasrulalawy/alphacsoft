type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="Alphacsoft"
      className={`${sizeClass[size]} rounded-xl object-cover ${className}`}
    />
  );
}
