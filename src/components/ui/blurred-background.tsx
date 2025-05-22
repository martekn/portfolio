import type { ReactNode } from "react";
import Image from "next/image";

interface BlurredBackgroundProps {
  children: ReactNode;
}

const BlurredBackground = ({ children }: BlurredBackgroundProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary-850 ">
        <Image
          src="/bg.jpg"
          alt="Blurred cosmic background"
          fill
          priority
          className="object-cover scale-200 hidden supports-[filter:blur(1px)]:block"
          style={{
            filter: `blur(100px)`,
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlurredBackground;
