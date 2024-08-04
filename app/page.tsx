'use client';
import React, { useState } from 'react';
import MenuBarMobile from './components/layout/mobile/menu-bar-mobile';
import Sidebar from './components/layout/sidebar/sidebar';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex min-h-screen">
      <MenuBarMobile setter={() => setShowSidebar(!showSidebar)} />
      <Sidebar show={showSidebar} setter={() => setShowSidebar(!showSidebar)} />
      <div className="flex flex-col justify-center ms-5 flex-grow md:w-full min-h-screen mr-[40px]">
        <div className="hidden h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h5 className="pb-4 text-4xl text-transparent duration-800 bg-white cursor-default animate-title font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text ">
          stajah lee hoeflich
        </h5>
        <div className="hidden h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>
    </div>
  );
}
