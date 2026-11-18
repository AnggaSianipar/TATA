import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "white";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
} & (
  | {
      href: string;
      onClick?: MouseEventHandler<HTMLAnchorElement>;
    }
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      href?: undefined;
    })
);

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-toba text-white hover:bg-deep focus-visible:outline-toba",
  secondary:
    "border border-slate-300 bg-white text-ink hover:bg-mist focus-visible:outline-toba",
  danger: "bg-ulos text-white hover:bg-red-900 focus-visible:outline-ulos",
  ghost: "bg-transparent px-3 text-ink hover:bg-toba/10 focus-visible:outline-toba",
  white: "bg-white text-toba hover:bg-teal-50 focus-visible:outline-white",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2.5 text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    const anchorProps = props as {
      onClick?: MouseEventHandler<HTMLAnchorElement>;
    };

    return (
      <a className={classes} href={href} onClick={anchorProps.onClick}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
