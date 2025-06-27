// src/app/page.tsx
"use client";
import { useState } from "react";
import Link from 'next/link';
// This is our CSS. We are writing it directly inside our file.
const styles = `
  /* --- Global Styles & Font Imports --- */
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap');

  :root {
    /* --- The "Warm & Elegant" Palette --- */
    --bg-color: #f5f2ed;         /* A more prominent, warm beige */
    --surface-color: #FFFFFF;     /* Clean white for cards */
    --text-color: #3D3D3D;      /* Soft, dark charcoal */
    --heading-color: #000000;     /* Black for headings */
    --accent-color: #e5a9b4;      /* A slightly more saturated, warm pink */
    --highlight-color: #009B77;  /* Emerald Green */
    --border-color: #EAEAEA;
    --illustration-bg: #e9e9e9; /* Grey for the background illustrations */
  }

  body {
    background-color: var(--bg-color);
    font-family: 'Lora', serif; /* Lora font for everything */
    color: var(--text-color);
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* --- Navbar Styles --- */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(245, 242, 237, 0.85);
    backdrop-filter: blur(8px);
    z-index: 50;
    border-bottom: 1px solid var(--border-color);
  }
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }
  .nav-logo {
    font-size: 30px;
    font-weight: 700;
    color: var(--heading-color);
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .nav-link {
    font-weight: 600;
    font-size: 15px;
    color: var(--text-color);
    text-decoration: none;
  }
  .nav-button {
    background-color: var(--accent-color);
    color: white;
    font-weight: bold;
    font-size: 14px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .nav-button:hover {
    filter: brightness(1.1);
  }

  /* --- Main Content & Hero Section --- */
  .main-content {
    padding-top: 80px;
  }
  .hero-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 3rem 1.5rem;
    overflow: hidden;
  }
  .hero-text-content {
    position: relative;
    z-index: 10;
  }
  .hero-title {
    font-size: 52px;
    font-weight: 600;
    color: var(--heading-color);
    margin: 0;
  }
  .hero-subtitle {
    font-size: 17px;
    max-width: 500px;
    margin-top: 12px;
  }

  /* --- Background illustrations container --- */
  .illustrations-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .illustration {
    position: absolute;
    background-color: var(--illustration-bg);
    border-radius: 12px;
    opacity: 0.7;
  }
  .illustration-1 { top: -20%; left: 15%; transform: rotate(-15deg); width: 200px; height: 250px; }
  .illustration-2 { top: 10%; right: 10%; transform: rotate(10deg); width: 250px; height: 180px; }
  .illustration-3 { bottom: -30%; left: 25%; transform: rotate(5deg); width: 180px; height: 220px; }
  .illustration-4 { bottom: -10%; right: 20%; transform: rotate(-8deg); width: 200px; height: 250px; }


  /* --- Cards Section --- */
  .cards-section {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem 1.5rem 4rem 1.5rem;
  }
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .card {
    background-color: var(--surface-color);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    text-align: left;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  }
  .card-icon {
    font-size: 24px;
    color: var(--highlight-color);
    margin-bottom: 12px;
  }
  .card-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--heading-color);
    margin: 0 0 12px 0;
  }
  .card-link {
    font-weight: bold;
    color: var(--highlight-color);
    text-decoration: none;
    margin-top: auto;
  }

  /* --- Footer Styles --- */
  .footer {
    display: none; 
  }

  /* Responsive styles for mobile */
  @media (max-width: 768px) {
    .cards-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 36px; }
    .nav-links { display: none; }
    .illustration { display: none; }
    .footer { display: block; }
  }
  /* Add this CSS at the end of your 'styles' variable, before the last */

  /* --- Customization Options Panel --- */
    .options-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .options-panel {
    background-color: var(--surface-color);
    padding: 32px;
    border-radius: 16px;
    width: 90%;
    max-width: 500px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border: 1px solid var(--border-color);
  }
  .options-close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--text-color);
  }
  .options-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--heading-color);
    margin: 0 0 24px 0;
    text-align: center;
  }
  .options-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .option-button {
    width: 100%;
    text-align: left;
    padding: 16px;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .option-button:hover {
    background-color: #e9e9e9;
    border-color: var(--accent-color);
  }
  .option-button strong {
    color: var(--highlight-color);
    display: block;
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export default function PrototypePage() {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  return (
    <>
      <style>{styles}</style>

      <header className="navbar">
        <nav className="nav-container">
          <a href="/" className="nav-logo">ReVibe</a>
          <div className="nav-links">
            <a href="#" className="nav-link">Reviews</a>
            <button className="nav-button">Add to Closet</button>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="illustrations-container">
            <div className="illustration illustration-1"></div>
            <div className="illustration illustration-2"></div>
            <div className="illustration illustration-3"></div>
            <div className="illustration illustration-4"></div>
          </div>
          <div className="hero-text-content">
            <h1 className="hero-title">Your Endless Wardrobe.</h1>
            <p className="hero-subtitle">Rent, customize, and give your pre-loved items a new life.</p>
          </div>
        </section>

        <section className="cards-section">
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🛍️</div>
              <h3 className="card-title">Book & Wear</h3>
              <a href="/rent" className="card-link">Start Renting →</a>
            </div>
            <div className="card">
              <div className="card-icon">✂️</div>
              <h3 className="card-title">Customize</h3>
               {/* We replaced the <a> tag with this button */}
              <button onClick={() => setIsOptionsVisible(true)} className="card-link">
               Start Customizing →
              </button>
            </div>
            <div className="card">
              <div className="card-icon">🏷️</div>
              <h3 className="card-title">Resell</h3>
              <a href="#" className="card-link">Become a Partner →</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} ReVibe. All Rights Reserved.</p>
      </footer>

    {isOptionsVisible && (
  <div className="options-overlay">
    <div className="options-panel">
      <button
        onClick={() => setIsOptionsVisible(false)}
        className="options-close-button"
      >
        ×
      </button>
      <h3 className="options-title">What would you like to do?</h3>
      <ul className="options-list">
        <li>
          <Link href="/alteration">
            <button className="option-button">
              <strong>Alteration</strong>
              Adjust the fit of your garment.
            </button>
          </Link>
        </li>
        <li>
          <Link href="/repair">
            <button className="option-button">
              <strong>Repair</strong>
              Fix a zip, tear, or replace a button.
            </button>
          </Link>
        </li>
        <li>
          <Link href="/customize">
            <button className="option-button">
              <strong>Customization</strong>
              Add embroidery, tie-dye, or bandhani.
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)}

</>
  );
}