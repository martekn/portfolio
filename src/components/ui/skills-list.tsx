import React from "react";
import skills from "@/lib/data/skills.json";
import Image from "next/image";
import { Image as TImage } from "@/lib/data/types";

export const SkillsList = () => {
  return (
    <ul className="flex flex-wrap gap-2 justify-start items-start">
      {skills.map((item, index) => (
        <li key={index} className="h-min">
          <SkillCard image={item.image} title={item.name} />
        </li>
      ))}
    </ul>
  );
};

export const SkillCard = ({ image, title }: { image: TImage; title: string }) => {
  return (
    <div className="flex rounded-sm items-center gap-2 p-2 bg-primary-500/20 font-accent backdrop-blur-xl text-base">
      <Image src={image.src} alt={image.alt} width={100} height={100} className="size-6" />
      <span>{title}</span>
    </div>
  );
};
