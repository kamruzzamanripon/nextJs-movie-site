import {
  BadgeCheckIcon,
  CollectionIcon, HomeIcon,
  LightningBoltIcon, SearchIcon,
  UserIcon
} from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';
import logo from '/public/logo.png';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="HOME" Icon={LightningBoltIcon} />
            <HeaderItem title="HOME" Icon={BadgeCheckIcon} />
            <HeaderItem title="HOME" Icon={CollectionIcon} />
            <HeaderItem title="HOME" Icon={SearchIcon} />
            <HeaderItem title="HOME" Icon={UserIcon} />
        </div>
        <Image 
            className = 'object-contain'
            src = {logo}
            width={200}
            height={100}
        />
    </header>
  );
 
}

export default Header;
