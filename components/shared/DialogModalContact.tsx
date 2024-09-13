import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PrimaryButton from './PrimaryButton';
import { Button } from '../ui/button';
import { ChatForm } from './ChatForm';

type Props = {};

const DialogModalContact = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="border-2 border-purple-100 text-purple-100 font-bold tracking-widest py-3 px-5 rounded-lg mt-10  transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,1)]">
        Contact Me
      </DialogTrigger>
      <DialogContent className="p-10 bg-black-100">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl">Contact Me</DialogTitle>
          <DialogDescription>
            <ChatForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModalContact;
