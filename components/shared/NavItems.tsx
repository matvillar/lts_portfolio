'use client';
import React from 'react';
import { headerLinks } from '@/public/links/headerLinks';
import Link from 'next/link';
import { PiNumberCircleOne } from 'react-icons/pi';

const NavItems = () => {
  return (
    <ul className="md:flex-between flex w-full gap-5">
      {headerLinks.map((link: any) => {
        return (
          <li
            key={link.href}
            className={`tracking-wide cursor-pointer flex-center whitespace-nowrap hover:text-purple-100 transition-all`}
          >
            <Link
              className="flex items-center justify-center over:text-white-200"
              href={link.href}
            >
              <span className="pt-1 pr-1 text-sm text-purple-100">
                {link.num}.
              </span>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
