import Image from 'next/image';
import { Header } from '../header';

export default function CampPage() {
  const project = {
    title: 'Youth camp website',
    description:
      'Collaboration with camp management to present options for a better and more accessible way to make regular website updates.',
  };
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
      <article className="flex flex-col items-center py-12 px-12">
        <a
          className="flex items-end flex-col gap-2 mb-5"
          target="blank"
          href="https://www.forthillcyc.org/"
        >
          <Image
            src="/images/camp.png"
            alt="Camp websiet"
            height={800}
            width={800}
          />
          <p className="text-slate-500 text-sm text-right w-100">
            Click here to see what camp management has been able to add to the
            website over the past 2 years.
          </p>
        </a>

        <div className="mx-auto max-w-xl lg:mx-0 mt-5 mb-14">
          <h4 className="text-2xl font-bold sm:text-3xl font-display">
            Options presented
          </h4>

          <ul className="list-decimal p-5 text-slate-700 text-sm">
            <li className="font-semibold">Custom made deployed website</li>
            <div className="list-none ms-2 my-2 border-b-2 border-slate-200">
              Since I work as a software developer professionally the first
              option I presented was a custom made deployed website.
            </div>
            <div className="list-none ps-2 my-2">
              Pros &#8594; the site would be custom, efficient, and the UI/UX
              would be high quality.
            </div>
            <div className="list-none ps-2 my-2">
              Cons &#8594; it would be expensive and harder to maintain and it
              would depend on me or another professional technologist to
              maintain, which was the problem with the prior website.
            </div>

            <li className="font-semibold">Wordpress site</li>
            <div className="list-none ps-2 my-2">
              Pros &#8594; can be maintained and added to by non technical folks
              and have a lot of beauitiful and modern templates.
            </div>
            <div className="list-none ps-2 my-2">
              Cons &#8594; there is more effort to set it up and it would likely
              be a bit more expensive.
            </div>

            <li className="font-semibold">
              Wix (or similar) drag and drop site
            </li>
            <div className="list-none ms-2 my-2 border-b-2 border-slate-200">
              My recommendation!
            </div>
            <div className="list-none ps-2 my-2">
              Pros &#8594; this would be easiest to add to and maintain for the
              camp leadership.
            </div>
            <div className="list-none ps-2 my-2">
              Cons &#8594; harder to transfer off the platform and less
              customizable.
            </div>
          </ul>
        </div>
      </article>
    </div>
  );
}
