import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import NavItems from './NavItems';
import PrimaryButton from './PrimaryButton';

const Navbar = () => {
  return (
    <header className="w-full fixed z-50 backdrop-blur-md">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between">
        <div className="w-36 flex items-center gap-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Matias Logo" width={80} height={80} />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center justify-between gap-5">
          <NavItems />

          <PrimaryButton title="Resume" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
