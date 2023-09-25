'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/Link';

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      alert(JSON.stringify(data));
      // Redirect user to dashboard
      router.push('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main>
      <h1 className='text-3xl text-center m-[1rem_0]'>Account</h1>
      <div className='flex flex-col md:flex-row gap-8 p-[2rem]'>
        <section className='md:w-[50%]'>
          <h2 className='text-xl m-[1rem_0]'>Sign In</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='email*'
                required
                className='border border-slate-500 outline-black mb-4 p-2 w-full'
              />
            </div>
            <div>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='password*'
                required
                className='border border-slate-500 outline-black mb-4 p-2 w-full'
              />
            </div>
            <button
              type='submit'
              className='block bg-black text-white w-full h-[40px]'
            >
              SIGN IN
            </button>
          </form>
        </section>
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
      </div>
    </main>
  );
}
