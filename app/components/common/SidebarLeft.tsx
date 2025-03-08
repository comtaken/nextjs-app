// app/components/common/SidebarLeft.tsx
import Link from 'next/link';
import Image from 'next/image';
const SidebarLeft = () => {
  return (
    <div className='sidebar'>
      <ul className='menu'>
        <li>
          <Link href='/'>
            <Image src='/images/kinmugi.gif' alt='' width={40} height={40} />
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <Image src='/images/kakuhiball.gif' alt='' width={40} height={40} />
          </Link>
        </li>
        <li>
          <Link href='/services'>
            <Image
              src='/images/coffie-comeda.gif'
              alt=''
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            {' '}
            <Image src='/images/chikin.gif' alt='' width={40} height={40} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLeft;
