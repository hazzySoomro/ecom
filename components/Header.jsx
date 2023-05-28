import Link from 'next/link';
import React from 'react';
import img from '../public/logo.jpg';
import Image from 'next/image';

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image src={img} width={70} height={70} alt="logo" />
      </Link>

      {/* <div className="flex items-center space-x-2.5 text-sm">
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"></button>
      </div> */}
    </header>
  );
}

export default Header;
