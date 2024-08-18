import WorkDetailsPage from '@/app/components/layout/work-details';

export default function CampPage() {
  const project = {
    title: 'Youth camp website',
    description:
      'Collaboration with camp management to present options for a better and more accessible way to make regular website updates.',
    image: {
      href: 'https://www.forthillcyc.org/',
      src: '/images/camp.png',
      alt: 'Camp website',
      caption:
        'Click here to see what camp management has been able to add to the website over the past 2 years.',
    },
    subtitle: 'Options presented',
  };

  const campOptions = [
    {
      li: 'Custom made deployed website',
      subtitle:
        'Since I work as a software developer professionally the first option I presented was a custom made deployed website.',
      pros: 'the site would be custom, efficient, and the UI/UX would be high quality.',
      cons: 'it would be expensive and harder to maintain and it would depend on me or another professional technologist to maintain, which was the problem with the prior website.',
    },
    {
      li: 'Wordpress site',
      pros: 'can be maintained and added to by non technical folks and have a lot of beauitiful and modern templates.',
      cons: 'compared to drag and drop sites there is more effort to set it up and it would likely be a bit more expensive.',
    },
    {
      li: 'Wix (or similar) drag and drop site',
      subtitle: 'My recommendation!',
      pros: 'this would be easiest to add to and maintain for the camp leadership.',
      cons: 'harder to transfer off the platform and less customizable.',
    },
  ];

  return (
    <WorkDetailsPage project={project}>
      <ul className="list-decimal p-5 text-slate-700 text-sm">
        {campOptions.map((opt) => (
          <div key={opt.li}>
            <li className="font-semibold">{opt.li}</li>
            {opt.subtitle && (
              <div className="list-none ms-2 my-2 border-b-2 border-slate-200">
                {opt.subtitle}
              </div>
            )}
            <div className="list-none ps-2 my-2">{`Pros: ${opt.pros}`}</div>
            <div className="list-none ps-2 my-2">{`Cons: ${opt.cons}`}</div>
          </div>
        ))}
      </ul>
    </WorkDetailsPage>
  );
}
