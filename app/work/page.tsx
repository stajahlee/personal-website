'use client';
import { Card } from '../components/card';
import PageWithNavigation from '../components/page-with-navigation';

export default function WorkPage() {
  return (
    <PageWithNavigation>
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <Card>
          <div className="m-4 text-center duration-1000 text-zinc-200 group-hover:text-purple-200">
            Many projects to add
          </div>
          <div className="m-4 text-sm text-center duration-1000 text-zinc-200 group-hover:text-purple-200">
            Check back soon ⺌∅‿∅⺌
          </div>
          <div className="m-4 text-sm text-center duration-1000 text-zinc-200 group-hover:text-purple-200">
            In the meantime, please checkout the Contact page to link to my
            LinkedIn and GitHub accounts
          </div>
        </Card>
      </div>
    </PageWithNavigation>
  );
}
