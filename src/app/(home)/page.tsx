import type { Metadata } from "next";
import projects from "@/lib/data/projects.json";
import aboutMe from "@/lib/data/about-me.json";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { SkillsList } from "@/components/ui/skills-list";
import Link from "next/link";
import Section from "@/components/ui/section";
import ProjectCard from "@/components/ui/project-card";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title: "Frontend developer | MK projects",
  description: "Placeholder description",
};

const HomePage = () => {
  return (
    <div>
      <Hero />

      <Section variant="disabled" className="space-y-8 scroll-mt-8" id="projects">
        <Heading tag="h2" decoration={"underline"} variant={"heading3"}>
          Projects
        </Heading>
        <ul className="grid md:grid-cols-2 gap-16 ">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <li key={project.id} className={isFeatured ? "col-span-full row-start-1" : ""}>
                <ProjectCard project={project} size={isFeatured ? "wide" : "default"} />
              </li>
            );
          })}
        </ul>
      </Section>

      <Section variant="lg" className="grid lg:grid-cols-5 gap-y-8 gap-x-20 ">
        <Heading tag="h2" decoration={"underline"} variant={"heading3"} className="col-span-full">
          About me
        </Heading>
        <Section variant="disabled" className="lg:col-span-2 lg:col-start-4 space-y-6 scroll-mt-26" id="skills">
          <Heading tag="h3" variant={"heading4"}>
            Skills
          </Heading>
          <SkillsList />
        </Section>
        <Section
          variant="disabled"
          className="lg:col-span-3 lg:col-start-1 lg:row-start-2 space-y-6 scroll-mt-8 lg:scroll-mt-26"
          id="about"
        >
          <Heading tag="h3" variant={"heading4"}>
            Who am I?
          </Heading>
          <div className="space-y-4">
            {aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Section>
      </Section>

      <Section variant="lg" className="grid lg:grid-cols-5 gap-y-8 gap-x-20 scroll-mt-8" id="contact">
        <Heading tag="h2" decoration={"underline"} variant={"heading3"} className="col-span-full">
          Contact me
        </Heading>
        <p className="lg:col-span-3 ">
          If you want to get in touch with me please send me an email at{" "}
          <Button asChild variant={"link"} size={"inline"}>
            <Link href="mailto:marte.mk@hotmail.com">marte.mk@hotmail.com</Link>
          </Button>{" "}
          or reach out to me on{" "}
          <Button asChild variant={"link"} size={"inline"}>
            <Link href="https://www.linkedin.com/in/martekn/">linkedin</Link>
          </Button>
        </p>
      </Section>
    </div>
  );
};

export default HomePage;
