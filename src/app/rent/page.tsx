// src/app/rent/page.tsx

// This is the CSS for our new, compact categories page.
const styles = `
  /* --- Global Styles & Font Imports --- */
    @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap');

  :root {
    /* --- Re-declaring the palette for consistency --- */
    --bg-color: #f5f2ed;
    --surface-color: #FFFFFF;
    --text-color: #3D3D3D;
    --heading-color: #000000;
    --accent-color: #e5a9b4;
    --highlight-color: #009B77; /* Emerald Green */
    --border-color: #EAEAEA;
  }

  /* --- Navbar Styles (copied for consistency) --- */
  .navbar {
    position: fixed; top: 0; left: 0; width: 100%;
    background-color: rgba(245, 242, 237, 0.85); backdrop-filter: blur(8px);
    z-index: 50; border-bottom: 1px solid var(--border-color);
  }
  .nav-container {
    max-width: 1200px; margin: 0 auto; padding: 0 24px;
    display: flex; align-items: center; justify-content: space-between; height: 80px;
  }
  .nav-logo {
    font-size: 30px; font-weight: 700; color: var(--heading-color); text-decoration: none;
  }
  .nav-links { display: flex; align-items: center; gap: 32px; }
  .nav-link { font-family: font-weight: 600; font-size: 15px; color: var(--text-color); text-decoration: none; }
  .nav-button {
    background-color: var(--accent-color); color: white; font-family: font-weight: bold; font-size: 14px;
    padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer;
  }

  /* --- Main Content & Categories Section --- */
  .main-content {
    padding-top: 80px;
    background-color: var(--bg-color);
    min-height: calc(100vh - 160px); /* Ensures content area is tall enough */
    display: flex;
    align-items: center; /* Vertically center the container */
  }
  .categories-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }
  .page-title {
    font-family: 'Lora', serif;
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    color: var(--heading-color);
    margin: 0 0 3rem 0;
  }
  /* NEW: 4-column grid for a compact row */
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  /* NEW: Simplified card styling */
  .category-card {
    background-color: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem 1.5rem;
    text-decoration: none;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease;
    aspect-ratio: 1 / 1; /* Makes cards perfectly square */
  }
  .category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
    border-color: var(--highlight-color);
  }
  .category-icon {
    /* Styles for the SVG icons */
    width: 60px;
    height: 60px;
    color: var(--highlight-color); /* Emerald Green for the icon */
    margin-bottom: 1.5rem;
  }
  .category-title {
    font-family: 'Lora', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--heading-color);
  }

  /* --- Footer Styles (copied for consistency) --- */
  .footer {
    background-color: #fdf5e6;
    padding: 32px 24px;
    text-align: center;
    border-top: 1px solid var(--border-color);
  }
  .footer-text {
    font-family: 
    color: #888888;
  }
  
  /* Responsive styles */
  @media (max-width: 900px) {
    .categories-grid {
      grid-template-columns: repeat(2, 1fr); /* 2x2 grid on tablets */
    }
  }
  @media (max-width: 600px) {
    .categories-grid {
      grid-template-columns: 1fr; /* Single column on mobile */
    }
    .page-title {
      font-size: 32px;
    }
  }
`;

// These are placeholders. You can find beautiful, minimalist SVG icons on sites like Tabler Icons or Feather Icons.
// For simplicity, we are defining them directly in the code.
const EthnicWearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M12 10v12" />
    <path d="M7.5 13l-1.5 8" />
    <path d="M16.5 13l1.5 8" />
  </svg>
);

const GownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 4v3" />
    <path d="M15.053 5.3l-2.053 4.7" />
    <path d="M8.947 5.3l2.053 4.7" />
    <path d="M12 20l-3.5 -10h7z" />
  </svg>
);

const TopBottomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 4l-1.5 8h11l-1.5 -8" />
    <path d="M6.5 12h11" />
    <path d="M8 12v8" />
    <path d="M16 12v8" />
    <path d="M11 12v8" />
  </svg>
);

const SuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
    <path d="M15 20h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2z" />
    <path d="M15 10l-3 3l-3 -3" />
  </svg>
);


const categories = [
  { name: 'Ethnic Wear', href: '/rent/ethnic', Icon: EthnicWearIcon },
  { name: 'Gowns & Dresses', href: '/rent/dresses', Icon: GownIcon },
  { name: 'Tops & Bottoms', href: '/rent/tops', Icon: TopBottomIcon },
  { name: 'Suits & Tuxedos', href: '/rent/suits', Icon: SuitIcon },
];

export default function RentPage() {
  return (
    <>
      <style>{styles}</style>

      <header className="navbar">
        <nav className="nav-container">
          <a href="/" className="nav-logo">ReVibe</a>
          <div className="nav-links">
            <a href="/" className="nav-link">Reviews</a>
            <button className="nav-button">Add to Closet</button>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="categories-container">
          <h1 className="page-title">Select a Category</h1>
          <div className="categories-grid">
            {categories.map((category) => (
              <a key={category.name} href={category.href} className="category-card">
                <category.Icon />
                <h2 className="category-title">{category.name}</h2>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} ReVibe. All Rights Reserved.</p>
      </footer>
    </>
  );
}