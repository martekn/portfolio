import React from "react";
import { AspectRatio } from "./aspect-ratio";
import Image from "next/image";

const ProjectImage = ({
  src,
  alt = "",
  ratio = "default",
  hoverEffect = false,
}: {
  src: string;
  alt?: string;
  ratio?: "wide" | "default";
  hoverEffect?: boolean;
}) => {
  return (
    <AspectRatio ratio={ratio === "wide" ? 5 / 2 : 3 / 2} className="bg-primary-500/20 backdrop-blur-xl rounded-sm">
      <div className="m-8 absolute inset-0">
        <Image src={src} alt={alt} className="object-contain w-full" fill />
      </div>
      {hoverEffect && <div className="bg-primary-500/10 hover:bg-transparent transition-colors inset-0 absolute" />}
    </AspectRatio>
  );
};

export default ProjectImage;
