export type Project = {
  image: { lg: string; sm: string };
  id: number;
  title: string;
  techStack: string[];
  repoLink: string;
  demoLink: string;
  description: string;
};

export type Skill = {
  name: string;
  image: string;
};

export type AboutMe = {
  aboutMe: string[];
};
