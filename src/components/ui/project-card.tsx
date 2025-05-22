import { Project } from "@/lib/data/types";
import React from "react";
import { Button } from "@/components/ui/button";
import { headingStyles } from "@/components/ui/heading";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./aspect-ratio";

type ProjectCardProps = { project: Project; size: "default" | "wide" };
const ProjectCard = ({ project, size }: ProjectCardProps) => {
  const isWide = size === "wide";

  return (
    <div className=" space-y-6 ">
      {isWide && project.image.wide && (
        <div className="max-md:hidden">
          <AspectRatio ratio={5 / 2} className="bg-primary-500/20 rounded-sm  backdrop-blur-xl">
            <Image src={project.image.wide} alt="" className="object-contain w-full" fill />
          </AspectRatio>
        </div>
      )}

      <div className={isWide && project.image.wide ? "md:hidden" : ""}>
        <AspectRatio ratio={3 / 2} className="bg-primary-500/20 rounded-sm backdrop-blur-xl">
          <Image src={project.image.default} alt="" className="object-contain w-full" fill />
        </AspectRatio>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center gap-4">
          <Button asChild variant={"link"} size={"inline"} className={headingStyles({ variant: "heading4" })}>
            <Link href={`/project/${project.id}`}>{project.title}</Link>
          </Button>
          <div className="flex gap-2">
            <Button size="icon" asChild>
              <Link href={project.repoLink}>
                <GitHubLogoIcon />
              </Link>
            </Button>
            <Button size="icon" asChild>
              <Link href={project.demoLink}>
                <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 text-primary-300 text-base">
          {project.techStack.map((item, index) => (
            <li key={index}>
              {item}
              {project.techStack.length > index + 1 ? "," : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
