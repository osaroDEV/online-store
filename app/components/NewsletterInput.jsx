import React from 'react';
import { MdEmail } from 'react-icons/md';

const NewsletterInput = () => {
  return (
    <div className='flex flex-nowrap justify-between items-end'>
      <input type='text' placeholder='Your email...' className='border-b-2 outline-0 border-black w-[85%] p-2' />
      <MdEmail className='inline-block text-4xl border-b-2 border-black cursor-pointer pb-2' />
    </div>
  );
};

export default NewsletterInput;
