'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Use a hard navigation so the /dark page loads as the entry point.
    // This avoids flashes of interim UI and ensures scripts/init logic run reliably.
    window.location.replace('/dark');
  }, []);

  // Render nothing to avoid any "Redirecting..." flash.
  return null;
}
