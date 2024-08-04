import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import MenuItem from './menu-item';

type Props = {
    show: boolean
    setter: () => void
};

const Sidebar: FC<Props> = ({ show, setter }) => {
  const className = 'bg-neutral-950 top-0 bottom-0 left-0 z-40';
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  const ModalOverlay = () => (
    <div
      className={'flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30'}
      onClick={() => setter()}
    />
  )

  const options = [
    { name: 'About', route: '/about' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contact', route: '/contact' }
  ]

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <Link href="/">
          <Image
            priority
            src="/images/squares.png"
            height={150}
            width={150}
            alt="Stajah portfolio"
          />
        </Link>
        <div className="flex flex-col">
          {options.map(optionData => 
            <span key={optionData.name} className='px-3 min-w-6'>
              <MenuItem {...optionData} setter={setter} />
            </span>
          )}
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  )
};

export default Sidebar;