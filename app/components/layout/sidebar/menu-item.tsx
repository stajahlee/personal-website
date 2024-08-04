import { FC, ReactNode } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  name: string
  route: string
  setter: () => void
}
    
const MenuItem: FC<Props> = ({ name, route, setter }) => {
  const pathname = usePathname();
  const colorClass = pathname === route ? 'text-white' : 'text-white/50 hover:text-white';

  return (
    <Link
      href={route}
      onClick={() => setter()}
      className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
    >
      <div>{name}</div>
    </Link>
  )
}

export default MenuItem;