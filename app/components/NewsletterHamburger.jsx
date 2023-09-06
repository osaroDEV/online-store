import React from 'react'

const NewsletterHamburger = ({handleNewsletter}) => {
  return (
    <main className='group absolute flex justify-center items-center right-2 top-1 h-[40px] w-[40px] bg-white rounded-full cursor-pointer' onClick={handleNewsletter}>
        <div className='absolute bg-black w-[15px] sm:w-[20px] h-[1px] sm:h-[2px] rotate-45 group-hover:rotate-0 transition-all duration-200 ease-out'></div>
        <div className='absolute bg-black w-[15px] sm:w-[20px] h-[1px] sm:h-[2px] -rotate-45 group-hover:rotate-0 transition-all duration-200 ease-out'></div>
    </main>
  )
}

export default NewsletterHamburger