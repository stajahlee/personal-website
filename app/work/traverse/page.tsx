import WorkDetailsPage from '@/app/components/layout/work-details';

export default function TraversePage() {
  const project = {
    title: 'Traverse',
    description:
      'Cloud-based, commercial off-the-shelf document management, forms management, and mobility software for human services agencies.',
    href: 'https://info.teamnorthwoods.com/traverse-overview-video',
    src: '/images/traverse.png',
    alt: 'Traverse',
    caption:
      'Image owned by Northwoods, click here to learn more about Traverse and Northwoods',
    subtitle: 'UI Refresh Project',
  };

  return (
    <WorkDetailsPage project={project}>
      <ul className="list-decimal p-5 text-slate-700 text-sm">
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
      </ul>
    </WorkDetailsPage>
  );
}
