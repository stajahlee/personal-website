import React, { FC } from "react";
import Image from "next/image";

type Props = {
  setter: () => void;
};

const MenuBarMobile: FC<Props> = ({ setter }) => {
  return (
    <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-black flex [&>*]:my-auto px-2">
      <button className="text-4xl flex text-white" onClick={() => setter()}>
        <Image
          priority
          src="/images/hamburger.svg"
          height={32}
          width={32}
          alt="Menu button hamburger"
        />
      </button>
    </nav>
  );
};

export default MenuBarMobile;
