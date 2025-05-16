import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-accent transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-primary-100 focus-visible:ring-primary-100/90 focus-visible:ring-[3px] aria-invalid:ring-red-900/20 aria-invalid:border-red-900",
  {
    variants: {
      variant: {
        default: "bg-primary-500/30 text-primary-foreground shadow-xs hover:bg-primary-500/50 shadow-sm",
        ghost: "hover:bg-primary-500/50 hover:text-primary-100",
        link: "text-primary-200 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-10",
        inline: "text-primary underline-offset-4 hover:underline p-0 h-auto font-normal font-base",
      },
      rounded: {
        default: "rounded-sm",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, rounded, className }))} {...props} />;
}

export { Button, buttonVariants };
