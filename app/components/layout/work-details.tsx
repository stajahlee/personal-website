import { Header } from '@/app/work/header';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import type { WorkDetailsPageProps } from '../types';

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
          href={project.href}
        >
          <Image
            src={project.src}
            alt={project.alt}
            height={800}
            width={800}
            unoptimized={project.src.includes('.gif')}
          />
          <p className="text-slate-500 text-sm text-right w-100">
            {project.caption}
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
