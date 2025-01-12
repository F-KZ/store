import { LuUser } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';

async function UserIcon() {
  { /* const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image 
      src={profileImage}
      alt='une image'
      className='w-6 h-6 rounded-full object-cover' />
    );
  }

  return <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />; */}
  return <div>nada</div>
}
export default UserIcon;