import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const PreHeader = () => {
  return (
    <div className='hidden md:block w-full p-[12px_24px] text-slate-400 font-extralight bg-[#F0F0F0]'>
      <div className='flex justify-center lg:justify-start gap-3'>
        <a href='tel:+234-703-103-6340' className='flex items-center gap-2'>
          <BsTelephone /> <span>+234-703-103-6340</span>
        </a>{' '}
        |{' '}
        <a
          href='mailto:osaronaiwu@yahoo.com'
          className='flex items-center gap-2'
        >
          <MdEmail /> <span>osaronaiwu@yahoo.com</span>
        </a>
      </div>
    </div>
  );
};

export default PreHeader;
