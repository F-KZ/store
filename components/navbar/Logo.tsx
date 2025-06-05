import Link from 'next/link';
import { Button } from '../ui/button';
import { VscCode } from 'react-icons/vsc';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
function Logo() {
  return (
    
      <Link href='/'>
        <Image src={logo} alt='logo' width={150} height={150} />
      </Link>
   
  );
}
export default Logo;