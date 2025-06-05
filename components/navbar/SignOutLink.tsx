'use client';
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const SignOutLink = () => {
    const router = useRouter();
    const { user } = useUser();

    return (
        <>
            {user ? (
                <SignOutButton>
                    <button 
                        className='w-full text-left'
                    >
                        Sign Out
                    </button>
                </SignOutButton>
            ) : (
                <SignInButton>
                    <button 
                        className='w-full text-left'
                    >
                        Sign In
                    </button>
                </SignInButton>
            )}
        </>
    );
}

export default SignOutLink;
