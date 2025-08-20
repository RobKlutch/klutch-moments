'use client';

export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <header className="container" style={{ paddingBottom: '40px' }}>
        <h1>Klutch Moments</h1>
        <p>
          Upload a clip, pay for a credit, and get your highlight instantly. Works with local
          files, Google Drive, or Dropbox.
        </p>
      </header>

      <section className="container" style={{ paddingBottom: '60px' }}>
        <p>
          This is your starter one-page site. Stripe checkout, file uploads, and backend integration
          can be added here.
        </p>
      </section>

      <footer className="container" style={{ paddingBottom: '40px' }}>
        <small>© {new Date().getFullYear()} Klutch Moments</small>
      </footer>
    </main>
  );
}
