import React from 'react'
import Link from 'next/link'

const RegisterLink = () => {
  return (
    <section className='flex flex-col gap-4 md:w-[50%]'>
          <h2 className='text-xl m-[1rem_0]'>New Customer?</h2>
          <p>
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <Link href='/register'>
            <button
              type='submit'
              className='block bg-black text-white w-[100px] h-[35px]'
            >
              REGISTER
            </button>
          </Link>
        </section>
  )
}

export default RegisterLink