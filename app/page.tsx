'use client';

import { useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const fileRef = useRef<HTMLInputElement>(null);

  function handleUploadClick() {
    fileRef.current?.click();
  }

  function handleFileChosen(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) alert(`Selected file: ${f.name}`);
  }

  function handleBuyCredit() {
    // placeholder – replace with your Stripe logic later
    alert('This would start Stripe checkout.');
  }

  return (
    <main style={{ padding: 32 }}>
      <header className="container" style={{ paddingBottom: '24px' }}>
        <img src="/logo.png" alt="Klutch Logo" style={{ height: 40 }} />
        <h1 style={{ marginTop: 12 }}>Klutch Moments</h1>
        <p>
          Upload a clip, pay for a credit, and get your highlight instantly. Works with local files,
          Google Drive, or Dropbox.
        </p>
      </header>

      <section className="container" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {/* Upload button */}
        <button onClick={handleUploadClick} style={{ padding: '10px 16px', cursor: 'pointer' }}>
          Upload a clip
        </button>
        <input
          type="file"
          ref={fileRef}
          onChange={handleFileChosen}
          accept="video/*"
          style={{ display: 'none' }}
        />

        {/* Buy credit (placeholder) */}
        <button onClick={handleBuyCredit} style={{ padding: '10px 16px', cursor: 'pointer' }}>
          Buy a credit
        </button>

        {/* Example navigation link */}
        <Link href="/checkout" style={{ padding: '10px 16px', border: '1px solid #ccc' }}>
          Go to checkout page
        </Link>
      </section>

      <footer className="container" style={{ marginTop: 40 }}>
        <small>© {new Date().getFullYear()} Klutch Moments</small>
      </footer>
    </main>
  );
}
