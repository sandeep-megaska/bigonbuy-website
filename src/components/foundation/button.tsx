import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "standard" | "large";

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-medium)] border font-semibold no-underline transition-[background-color,border-color,color,box-shadow,transform] duration-[var(--duration-fast)] ease-[var(--easing-standard)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 active:translate-y-px motion-reduce:hover:translate-y-0";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--color-brand)] bg-[var(--color-brand)] text-[var(--color-foreground-inverse)] shadow-[var(--shadow-subtle)] hover:border-[var(--color-brand-hover)] hover:bg-[var(--color-brand-hover)]",
  secondary:
    "border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-foreground)] hover:bg-[var(--color-canvas-subtle)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-brand-soft)]",
  inverse:
    "button-inverse border-[var(--color-border-strong)] bg-[var(--color-foreground-inverse)] hover:bg-[var(--color-accent-soft)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  standard: "px-5 py-2.5 text-sm",
  large: "min-h-13 px-6 py-3 text-base",
};

interface SharedButtonProps {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
}

export type ButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedButtonProps>;

export function Button({
  variant = "primary",
  size = "standard",
  className = "",
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} disabled:cursor-not-allowed disabled:opacity-50 disabled:active:translate-y-0 ${className}`}
      {...props}
    />
  );
}

export type ButtonLinkProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedButtonProps | "href"> & {
    readonly href: string;
  };

export function ButtonLink({
  variant = "primary",
  size = "standard",
  className = "",
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  return (
    <a
      target={target}
      rel={safeRel}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
