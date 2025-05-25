import { Project } from "@/lib/data/types";
import React from "react";
import { Button } from "@/components/ui/button";
import { headingStyles } from "@/components/ui/heading";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ProjectImage from "./project-image";
import { cn } from "@/lib/utils";

type ProjectCardProps = { project: Project; size: "default" | "wide" };

const ProjectCard = ({ project, size }: ProjectCardProps) => {
  const { image, title, id, repoLink, demoLink, techStack } = project;
  const isWide = size === "wide";

  return (
    <div className=" space-y-6 ">
      {isWide && image.wide && (
        <Link href={`/project/${id}`} className="max-md:hidden block">
          <span className="sr-only">{title}</span>
          <ProjectImage src={image.wide.src} alt={image.wide.alt} ratio="wide" hoverEffect />
        </Link>
      )}

      <Link href={`/project/${id}`} className={cn("block", isWide && image.wide ? "md:hidden" : "")}>
        <span className="sr-only">{title}</span>
        <ProjectImage src={image.default.src} alt={image.default.alt} hoverEffect />
      </Link>

      <div className="space-y-1">
        <div className="flex justify-between items-center gap-4">
          <Button asChild variant={"link"} size={"inline"} className={headingStyles({ variant: "heading4" })}>
            <Link href={`/project/${id}`}>{title}</Link>
          </Button>
          <div className="flex gap-2">
            <Button size="icon" asChild>
              <Link href={repoLink}>
                <span className="sr-only">Github repository</span>
                <GitHubLogoIcon />
              </Link>
            </Button>
            <Button size="icon" asChild>
              <Link href={demoLink}>
                <span className="sr-only">Live demo</span>
                <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 text-primary-300 text-base">
          {techStack.map((item, index) => (
            <li key={index}>
              {item}
              {techStack.length > index + 1 ? "," : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
