import { Card } from "../components/card";
import PageWithNavigation from "../components/page-with-navigation";
import Link from "next/link";

export default async function WorkPage() {
  return (
    <PageWithNavigation>
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Work
          </h2>
          <p className="mt-4 mb-12 text-zinc-400">
            Some of the work is from professional employment and some is on my
            own time.
          </p>

          <Card>
            <article className="relative w-full p-2 md:p-3">
              <h4 className="mt-1 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-1xl font-display">
                This site!
              </h4>
              <p className="my-1 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                This website uses React with Typescript, NextJS, TailwindCSS,
                and is deployed with Vercel CI/CD
              </p>
            </article>
          </Card>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 pb-14">
          <Card>
            <Link href="/work/traverse">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-violet-300">
                    <time dateTime={new Date("12/07/2021").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("12/07/2021"))}
                    </time>
                    {"  —  "}
                    <time dateTime={new Date("07/31/2024").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("07/31/2024"))}
                    </time>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Traverse
                </h2>
                <p className="border-b border-purple-300 mt-4 pb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Cloud-based, commercial off-the-shelf document management,
                  forms management, and mobility software for human services
                  agencies.
                </p>
                <p className="mt-8 mb-16 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  As a developer working on this software, I built Typescript
                  React features with SCSS and Bootstrap to maintain graphic
                  standards and branding throughout the interfaces and used Ruby
                  on Rails for API and data modeling.
                </p>

                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-400 hover:text-purple-400 hover:animate-pulse lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            <Card>
              <Link href="/work/camp">
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-violet-300">Summer 2022</div>
                  </div>

                  <h2
                    id="second-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    Youth camp website
                  </h2>
                  <p className="mt-4 pb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    Created the camp&apos;s website using tools for better
                    collaboration and extensibility in light of website
                    ownership. Specifically, requiring technology skills limited
                    the camp leadership from taking over when needed.
                  </p>

                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-400 hover:text-purple-400 hover:animate-pulse lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-violet-300">In progress</div>
                </div>

                <h2
                  id="second-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Mapbox church finder
                </h2>
                <p className="mt-4 pb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A mapbox enabled app that I had wished existed when my family
                  and I were traveling. It doesn&apos;t (not the exact thing I
                  want) so I&apos;m going to build it!
                </p>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </PageWithNavigation>
  );
}
