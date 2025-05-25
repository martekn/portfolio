export type Image = { alt: string; src: string };

export type Project = {
  image: { wide?: Image; default: Image };
  id: string;
  title: string;
  techStack: string[];
  repoLink: string;
  demoLink: string;
  description: string[];
};

export type Skill = {
  name: string;
  image: Image;
};

export type AboutMe = string[];
