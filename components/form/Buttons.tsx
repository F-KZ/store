'use client';

import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignInButton } from '@clerk/nextjs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { LuTrash2 } from 'react-icons/lu';
import { Pencil } from 'lucide-react';

type btnSize = 'default' | 'lg' | 'sm';

export function SubmitButton({
  text,
  className,
  size = 'default',
}: {
  text: string;
  className?: string;
  size?: btnSize;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      className={cn('capitalize', className)}
      disabled={pending}
      size={size}
    >
      {pending ? <ReloadIcon className='mr-2 h-4 w-4 animate-spin' /> : null}
      {text}
    </Button>
  );
}

export function ProductSignInButton() {
  return (
    <SignInButton mode='modal'>
      <Button className='w-fit capitalize'>sign in to add to cart</Button>
    </SignInButton>
  );
}

export function CardSignInButton() {
  return (
    <SignInButton mode='modal'>
      <Button variant='outline' className='w-full capitalize'>
        sign in to add to favorites
      </Button>
    </SignInButton>
  );
}

export function FavoriteIcon({ isFavorite }: { isFavorite: boolean }) {
  return isFavorite ? <FaHeart className='w-5 h-5' /> : <FaRegHeart className='w-5 h-5' />;
}

export function DeleteIcon() {
  return <LuTrash2 className='w-5 h-5' />;
}

export function EditIcon() {
  return <Pencil className='w-5 h-5' />;
}

export function CardSubmitButton({ isFavorite }: { isFavorite: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className='p-2 cursor-pointer'
    >
      {pending ? (
        <ReloadIcon className='animate-spin' />
      ) : (
        <FavoriteIcon isFavorite={isFavorite} />
      )}
    </Button>
  );
}