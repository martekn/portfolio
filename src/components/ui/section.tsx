import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { cva, VariantProps } from "class-variance-authority";

const sectionStyles = cva("", {
  variants: {
    variant: {
      disabled: "",
      xs: "my-6",
      sm: "my-16",
      lg: "my-16 md:my-32",
    },
    innerSpacing: { disabled: "", xs: "py-6", sm: "py-16", lg: "py-16 md:py-32" },
  },
  defaultVariants: {
    variant: "sm",
    innerSpacing: "disabled",
  },
});

type SectionStylesProps = VariantProps<typeof sectionStyles>;

type SectionProps = SectionStylesProps & {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

const Section = ({ variant, innerSpacing, children, className, asChild, ...props }: SectionProps) => {
  const Comp = asChild ? Slot : "section";

  return (
    <Comp className={cn(sectionStyles({ variant, innerSpacing }), className)} {...props}>
      {children}
    </Comp>
  );
};

export default Section;
