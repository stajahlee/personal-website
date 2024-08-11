import React from 'react';
import Link from 'next/link';
import { NAVIGATION } from '@/util/constants';

export default function Home() {
  return (
    <div className="overflow-hidden bg-neutral-950">
      <div className="body-background flex flex-col items-center justify-center w-screen h-screen">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {NAVIGATION.filter((nav) => nav.href !== '/').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="duration-500 text-zinc-400 hover:text-purple-400 hover:animate-pulse"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3.5 px-0.5 z-10 text-3xl text-transparent bg-white cursor-default font-display sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text ">
          stajah lee hoeflich
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-300 ">
            {'It\'s not a bug - it\'s an undocumented feature.'}
          </h2>
        </div>
      </div>
    </div>
  );
}
