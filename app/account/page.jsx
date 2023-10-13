import LoginForm from '@/components/LoginForm';
import RegisterLink from '@/components/RegisterLink';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Account() {

  const session = await getServerSession(authOptions)

  if (session) redirect('/dashboard');

  return (
    <main>
      <h1 className='text-3xl text-center m-[1rem_0]'>Account</h1>
      <div className='flex flex-col md:flex-row gap-8 p-[2rem]'>
        <LoginForm />
        <RegisterLink />
      </div>
    </main>
  );
}
