'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dark');
  }, [router]);

  return (
    <main style={{ padding: 24 }}>
      <p>
        Redirecting to <a href="/dark">/dark</a>…
      </p>
    </main>
  );
}
