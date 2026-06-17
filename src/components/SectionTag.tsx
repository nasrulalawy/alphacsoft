type SectionTagProps = {
  label: string;
  tone?: "blue" | "cyan";
};

export default function SectionTag({ label, tone = "blue" }: SectionTagProps) {
  const toneClass =
    tone === "cyan" ? "bg-accent-500 text-white" : "bg-alpha-700 text-white";
  return (
    <div className="pointer-events-none absolute left-0 top-20 z-10 hidden lg:block">
      <span
        className={`${toneClass} inline-block rounded-r-lg px-2.5 py-4 text-[11px] font-bold uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180`}
      >
        {label}
      </span>
    </div>
  );
}
