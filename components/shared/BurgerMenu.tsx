'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import Link from 'next/link';
import { headerLinks } from '@/public/links/headerLinks';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Close } from '@radix-ui/react-dialog';
import { useState } from 'react';
import Footer from './Footer';
import SocialLinksBM from './SocialLinksBM';
import PrimaryButton from './PrimaryButton';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const onButtonClicked = () => {
    fetch('/images/MEV_CV.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileUrl;
        alink.target = '_blank';
        alink.click();
      });
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <HiMenuAlt3 size={28} />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center justify-center gap-10">
        <SheetHeader>
          <SheetDescription className="flex flex-col items-center justify-center gap-10 mb-20">
            {headerLinks.map((link) => (
              <Link
                className="font-semibold tracking-wider text-xl"
                href={link.href}
                key={link.href}
                onClick={handleClose}
              >
                <span className="text-purple-100">{link.num}.</span>{' '}
                {link.label}
              </Link>
            ))}

            <PrimaryButton
              title="Resume"
              padding="m-10"
              handleClick={onButtonClicked}
            />
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="text-white-200 absolute bottom-4">
          <SocialLinksBM />
          <Footer />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
