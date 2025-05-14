import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, HeadingStyleProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const headingStyles = cva("text-primary-100 font-accent font-medium", {
  variants: {
    variant: {
      heading1: "text-4xl md:text-6xl",
      heading2: "text-3xl md:text-4xl",
      heading3: "text-2xl md:text-3xl",
      heading4: "text-xl md:text-2xl",
      heading5: "text-lg md:text-xl",
      heading6: "text-base",
    },
  },
  defaultVariants: {
    variant: "heading6",
  },
});

type HeadingStyleProps = VariantProps<typeof headingStyles>;

const Heading = ({ tag: Tag = "h1", variant, className, ...props }: HeadingProps) => {
  return <Tag className={cn(headingStyles({ variant, className }))} {...props} />;
};

export { Heading, type HeadingProps };
