'use client';
import { Github, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../components/card';
import PageWithNavigation from '../components/page-with-navigation';
import { FC, ReactNode } from 'react';

type SocialContact = {
  icon: ReactNode,
  href?: string,
  label: string,
  handle: string
}

const socialIconClasses = 'relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange'
const socials: SocialContact[] = [
  {
    icon: <Linkedin size={20} />,
    href: 'https://linkedin.com/in/stajah',
    label: 'LinkedIn',
    handle: 'stajah',
  },
  {
    icon: <Github size={20} />,
    href: 'https://github.com/stajahlee',
    label: 'Github',
    handle: 'stajahlee',
  },
];

const SocialCard: FC<SocialContact> = (props: SocialContact) => {
  return <Card>
    <Link
      href={props.href || ''}
      target="_blank"
      className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
    >
      <span
        className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
        aria-hidden="true"
      />
      <span role='img' className={socialIconClasses}>
        {props.icon}
      </span>{' '}
      <div className="z-10 flex flex-col items-center">
        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
          {props.handle}
        </span>
        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {props.label}
        </span>
      </div>
    </Link>
  </Card>
}

export default function ContactPage() {
  return (
    <PageWithNavigation>
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <SocialCard key={s.label} {...s} />
          ))}
          <SocialCard
            label='Email'
            handle='stajah@stajahlee.com'
            icon={<Mail size={20} />}
          />
        </div>
      </div>
    </PageWithNavigation>
  );
}