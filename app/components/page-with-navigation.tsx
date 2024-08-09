import { PropsWithChildren } from 'react';
import { Navigation } from './navigation';

const PageWithNavigation: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      {children}
    </div>
  )
}

export default PageWithNavigation