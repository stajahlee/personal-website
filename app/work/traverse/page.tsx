import Image from 'next/image';
import { Header } from '../header';
import { Heading4 } from 'lucide-react';

export default function TraversePage() {
  const project = {
    title: 'Traverse',
    description:
      'Cloud-based, commercial off-the-shelf document management, forms management, and mobility software for human services agencies.',
  };
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
      <article className="flex flex-col items-center mt-12 px-12">
        <a
          className="flex items-end flex-col gap-2"
          target="blank"
          href="https://info.teamnorthwoods.com/traverse-overview-video"
        >
          <Image
            src="/images/traverse.gif"
            alt="Traverse"
            height={600}
            width={600}
          />
          <p className="text-slate-500 text-sm w-100">
            Image owned by Northwoods, click here to learn more about Traverse
            and Northwoods
          </p>
        </a>

        <div className="mx-auto max-w-xl lg:mx-0 mt-5 mb-14">
          <h4 className="text-2xl font-bold sm:text-3xl font-display">
            UI Refresh Project
          </h4>
          <p className="text-slate-700 text-sm w-100 my-4">
            The product development team created a fresh, modernized UI for
            customers to continue their social services work and enjoy a better
            experience.
          </p>
          <p className="text-slate-700 text-sm w-100 my-3">
            My work involved building Typescript React features with SCSS and
            Bootstrap to maintain graphic standards and branding throughout the
            product&apos;s interfaces while API and data modeling was done using
            Ruby on Rails.
          </p>

          <p className="text-slate-700 text-sm w-100 my-3">
            Collaboration with the UX, Product, and QA team was a vital part of
            the process.
          </p>
        </div>
      </article>
    </div>
  );
}
