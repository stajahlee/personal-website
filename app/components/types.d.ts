type Image = {
  href: string;
  src: string;
  alt: string;
  caption: string;
};
export type Project = Image & {
  title: string;
  description: string;
  subtitle: string;
};

export type WorkDetailsPageProps = {
  project: Project;
};

export type ProjectRaw = Omit<Project, 'image'> & Image;
