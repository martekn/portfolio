import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import projects from "@/lib/data/projects.json";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import ProjectImage from "@/components/ui/project-image";

export const generateStaticParams = () => {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
  const resolvedParams = await params;
  const project = projects.find((project) => project.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: `${project.title} | MK projects`,
    description: project.description[0],
  };
};

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const project = projects.find((project) => project.id === resolvedParams.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, image, techStack, repoLink, demoLink, description } = project;

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-[75ch_1fr] lg:grid-rows-[auto_auto_1fr] mt-16 gap-8">
      <Heading tag="h1" variant={"heading2"}>
        {title}
      </Heading>
      <ProjectImage src={image.default.src} alt={image.default.alt} />
      <aside className="lg:pl-16 lg:ml-16 lg:border-l border-y lg:border-y-0 border-primary-500/20 lg:space-y-8 lg:col-start-2 lg:row-span-full max-lg:divide-primary-500/20 max-lg:divide-y">
        <section className="space-y-3 max-lg:py-8">
          <Heading tag="h2" variant={"heading5"}>
            Built with:
          </Heading>
          <ul className="space-y-2 list-disc list-inside">
            {techStack.map((stack, index) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
        </section>
        <section className="space-y-3 max-lg:py-8">
          <Heading tag="h2" variant={"heading5"}>
            Links
          </Heading>
          <ul className="space-y-2">
            <li>
              <Button className="w-full justify-start" asChild>
                <Link href={repoLink}>
                  <GitHubLogoIcon /> Repository
                </Link>
              </Button>
            </li>
            <li>
              <Button className="w-full justify-start" asChild>
                <Link href={demoLink}>
                  <ExternalLinkIcon /> Live demo
                </Link>
              </Button>
            </li>
          </ul>
        </section>
      </aside>
      <div className="space-y-4">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
