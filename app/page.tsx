'use client';

export default function Page() {
  return (
    <main>
      <header className="container flex items-center gap-4" style={{paddingTop: '60px', paddingBottom: '40px'}}>
        <img src="/logo.png" alt="Klutch Logo" className="h-12 w-auto" />
        <div>
          <h1>Klutch Moments</h1>
          <h2>Moments Matter</h2>
          <p className="mt-3" style={{maxWidth: 720}}>
            Upload a clip, pay for a credit, and get your highlight instantly. Works with local files, Google Drive, or Dropbox.
          </p>
        </div>
      </header>
      <section className="container" style={{paddingBottom: '60px'}}>
        <p>This is your starter one-page site. Stripe checkout, file uploads, and backend integration can be added here.</p>
      </section>
      <footer className="container" style={{paddingBottom: '40px'}}>
        <small>© {new Date().getFullYear()} Klutch Moments</small>
      </footer>
    </main>
  );
}
