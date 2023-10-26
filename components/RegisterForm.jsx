'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are necessary.');
      return;
    }

    try {
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError('User already exists.');
        return;
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push('/');
      } else {
        console.log('User registration failed.');
      }
    } catch (error) {
      console.log('Error during registration: ', error);
    }
  };

  return (
    <section className='flex justify-center items-center'>
      <div>
        <h2 className='text-xl m-[1rem_0]'>Register</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              placeholder='full name*'
              required
              className='border border-slate-500 outline-black mb-4 p-2 w-full'
            />
          </div>
          <div>
            <input
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='email*'
              required
              className='border border-slate-500 outline-black mb-4 p-2 w-full'
            />
          </div>
          <div>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password*'
              required
              className='border border-slate-500 outline-black mb-4 p-2 w-full'
            />
          </div>
          <button
            type='submit'
            className='block bg-black text-white w-full h-[40px]'
          >
            REGISTER
          </button>
          {error && (
            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
              {error}
            </div>
          )}
        </form>
        <span>
          Already have an account? Go to <Link href={'/account'}>login</Link>
        </span>
      </div>
    </section>
  );
}
