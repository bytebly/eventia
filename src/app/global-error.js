'use client';

/** Last-resort boundary (replaces the root layout), so it carries its own minimal styling. */
export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', color: '#2a2e37', display: 'grid', placeItems: 'center', minHeight: '100vh', textAlign: 'center', padding: 24 }}>
        <div>
          <h1 style={{ fontSize: 32, margin: 0 }}>Something went wrong</h1>
          <p style={{ color: '#566070' }}>Please try again.</p>
          <button
            onClick={() => reset()}
            style={{ background: '#074ea2', color: '#fff', border: 0, borderRadius: 999, padding: '14px 28px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
