'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        router.push('/');
        return;
      }
      setIsSuccess(true);
    })();
  }, [router]);

  if (!isSuccess) {
    return <h1>Loading...</h1>;
  }

  return <main>{children}</main>;
};

async function getUser() {
  try {
    const response = await fetch('/api/auth/me'); // Use fetch to make the API request
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return {
      user: data,
      error: null,
    };
  } catch (e) {
    const error = e;

    return {
      user: null,
      error,
    };
  }
}

export default DashboardLayout;
