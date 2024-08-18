import { Header } from '@/app/work/header';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

export type Project = {
  title: string;
  description: string;
  image: {
    href: string;
    src: string;
    alt: string;
    caption: string;
  };
  subtitle: string;
};

type WorkDetailsPageProps = {
  project: Project;
};

const WorkDetailsPage: React.FC<PropsWithChildren & WorkDetailsPageProps> = ({
  children,
  project,
}) => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
      <article className="flex flex-col items-center py-12 px-12">
        <a
          className="flex items-end flex-col gap-2 mb-5"
          target="blank"
          href={project.image.href}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            height={800}
            width={800}
          />
          <p className="text-slate-500 text-sm text-right w-100">
            {project.image.caption}
          </p>
        </a>

        <div className="mx-auto max-w-xl lg:mx-0 mt-5 mb-14">
          <h4 className="text-2xl font-bold sm:text-3xl font-display">
            {project.subtitle}
          </h4>
          {children}
        </div>
      </article>
    </div>
  );
};

export default WorkDetailsPage;
