export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Empowering Unique Minds in Houston</h1>
        <p>The Joy School is a private school in Houston, TX, dedicated to providing a personalized education for students with learning differences. Our experienced teachers and staff create a supportive environment that fosters academic, social, and emotional growth.</p>
        <a href="/download" className="cta-btn" style={{ padding: '14px 32px', fontSize: '18px' }}>
          Get the Parent App
        </a>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>📱 Parent App</h3>
          <p>Stay connected with real-time updates on homework, attendance, and school events.</p>
        </div>
        <div className="feature-card">
          <h3>📝 Homework Tracker</h3>
          <p>Never miss an assignment. Parents see homework posted by teachers instantly.</p>
        </div>
        <div className="feature-card">
          <h3>💳 Fee Payment</h3>
          <p>Pay school fees online securely. No more checks or cash.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Attendance</h3>
          <p>Real-time attendance tracking with instant notifications to parents.</p>
        </div>
      </section>
      <section className="section"><blockquote>"The Joy School has been a game-changer for our son, providing him with the support and accommodations he needs to succeed."<cite>— Sarah Johnson</cite></blockquote></section>
    </>
  );
}
