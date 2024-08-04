import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import MenuItem from './menu-item';

type Props = {
    show: boolean
    setter: () => void
};

const Sidebar: FC<Props> = ({ show, setter }) => {
  const className = 'bg-black top-0 bottom-0 left-0 z-40';
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  const ModalOverlay = () => (
    <div
      className={'flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30'}
      onClick={() => setter()}
    />
  )

  const options = [
    { name: 'Home', route: '/' }
  ]

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex">
          <Link href="/">
            <Image
              priority
              src="/images/rocket.svg"
              height={100}
              width={100}
              alt="Stajah portfolio"
            />
          </Link>
        </div>
        <div className="flex flex-col">
          {options.map(optionData => 
            <MenuItem key={optionData.name} {...optionData} setter={setter} /> )
          }
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  )
};

export default Sidebar;