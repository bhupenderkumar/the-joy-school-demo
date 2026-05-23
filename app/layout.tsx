import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Joy School',
  description: 'The Joy School is a private school in Houston, TX, dedicated to providing a supportive and inclusive learning environment for students with learning differences. Our experienced staff and small class sizes enable us to tailor our curriculum to meet the individual needs of each student.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="demo-banner">
          This is a demo website built for The Joy School by EduConnect.
          Want this for your school? Call +91-9717267473
        </div>
        <nav className="navbar">
          <a href="/" className="logo">The Joy School</a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/programs">Programs</a>
            <a href="/contact">Contact</a>
            <a href="/download" className="cta-btn">Get Parent App</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; 2026 The Joy School. Demo by EduConnect.</p>
        </footer>
      </body>
    </html>
  );
}
