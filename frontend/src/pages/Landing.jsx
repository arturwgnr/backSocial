import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className="landing-container">
      <header>
        <h1 className="logo">ᨒ backSocial</h1>
      </header>

      <main className="content">
        <h2 className="headline">
          🌌 I have everything that I need in order to succeed
        </h2>
        <p className="subtext">
          Connect. Create. Inspire. A simple platform built with Express, Prisma
          and React.
        </p>
        <button onClick={() => nav("/profiles")} className="cta-button">
          Explore Profiles
        </button>
      </main>

      <footer>
        <p>© 2025 backSocial • Crafted by Artur Wagner</p>
      </footer>
    </div>
  );
}
