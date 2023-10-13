'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className='md:w-[50%]'>
          <h2 className='text-xl m-[1rem_0]'>Sign In</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
              SIGN IN
            </button>
            {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          </form>
        </section>
  )
}

export default LoginForm