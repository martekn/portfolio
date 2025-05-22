import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, HeadingStyleProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const headingStyles = cva("text-primary-100 font-accent", {
  variants: {
    variant: {
      heading1: "text-3xl md:text-6xl",
      heading2: "text-2xl md:text-4xl",
      heading3: "text-xl md:text-3xl",
      heading4: "text-lg md:text-2xl",
      heading5: "text-base md:text-xl",
      heading6: "text-base",
    },
    decoration: {
      default: "",
      underline: "border-b border-primary-500/20 w-full pb-4",
    },
  },
  defaultVariants: {
    variant: "heading6",
    decoration: "default",
  },
});

type HeadingStyleProps = VariantProps<typeof headingStyles>;

const Heading = ({ tag: Tag = "h1", variant, decoration, className, ...props }: HeadingProps) => {
  return <Tag className={cn(headingStyles({ variant, decoration, className }))} {...props} />;
};

export { Heading, headingStyles, type HeadingProps };
