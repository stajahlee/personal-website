"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };
};

export const Header: React.FC<Props> = ({ project }) => {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
      <div className="fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 lg:bg-transparent">
        <div className="container flex flex-row items-start justify-between p-6 mx-auto">
          <Link
            href="/work"
            className="duration-200 hover:font-medium text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
