import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display font-semibold transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-green text-green-ink shadow-[0_6px_24px_-8px_rgba(28,194,77,0.35)] hover:-translate-y-0.5 hover:bg-green-deep",
        ghost:
          "border border-line bg-fg/5 text-fg hover:-translate-y-0.5 hover:border-green-deep",
        light:
          "border border-paper-line bg-fg text-ink-text hover:-translate-y-0.5",
        dark: "bg-ink-text text-paper hover:bg-ink",
        outline:
          "border border-paper-line bg-fg text-ink-text hover:border-green-deep",
      },
      size: {
        md: "min-h-12 rounded-pill px-6 text-[0.95rem]",
        sm: "min-h-10 rounded-pill px-4 text-sm",
        pill: "min-h-9 rounded-pill px-4 text-xs tracking-wide",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
