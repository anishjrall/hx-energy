import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#ff6a1f] text-white hover:bg-[#e95b12] focus-visible:bg-[#e95b12]",
  secondary:
    "bg-white text-[#0a1630] border border-steel-300 hover:border-[#ff6a1f] hover:bg-copper-50 hover:text-[#0a1630]",
  ghost:
    "bg-transparent text-[#0a1630] border border-steel-300 hover:border-[#ff6a1f] hover:bg-copper-50 hover:text-[#0a1630]",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-medium tracking-wide transition-all duration-300 ease-out";

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
}

interface ButtonAsLink
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", showArrow = true, children, className = "", ...props }, ref) => {
    const classes = `${base} ${variantClasses[variant]} ${className}`;

    if ("href" in props && props.href) {
      const { href, ...rest } = props as ButtonAsLink;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        >
          {children}
          {showArrow && (
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          )}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonAsButton)}
      >
        {children}
        {showArrow && (
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
