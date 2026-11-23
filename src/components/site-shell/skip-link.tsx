export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-[var(--radius-medium)] bg-[var(--color-brand)] px-4 py-3 font-semibold text-[var(--color-foreground-inverse)] shadow-[var(--shadow-raised)] transition-transform duration-[var(--duration-fast)] focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
