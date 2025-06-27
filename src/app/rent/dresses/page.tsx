// src/app/rent/dresses/page.tsx
import Link from 'next/link';

// Mock product data for THIS category
const mockProducts = [
  {
    id: 5,
    name: 'Black Slit Dress',
    description: 'Silk, floor-length',
    price: "xxx",
    imageUrl: 'https://plus.unsplash.com/premium_vector-1733480234999-1faf6d738191?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Re-using the same styles as the other page
const styles = `
    /* --- Re-using styles from our previous pages for consistency --- */
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap');

  :root {
    --bg-color: #f5f2ed;
    --surface-color: #FFFFFF;
    --text-color: #3D3D3D;
    --heading-color: #000000;
    --accent-color: #e5a9b4;
    --highlight-color: #009B77;
    --border-color: #EAEAEA;
  }
  .navbar { /* ... navbar styles ... */ }
  .nav-container { /* ... nav-container styles ... */ }
  .nav-logo { /* ... nav-logo styles ... */ }
  .nav-links { /* ... nav-links styles ... */ }
  .nav-link { /* ... nav-link styles ... */ }
  .nav-button { /* ... nav-button styles ... */ }
  .footer { /* ... footer styles ... */ }
  .footer-text { /* ... footer-text styles ... */ }

  /* --- Styles specific to THIS page --- */
  .main-content {
    padding-top: 80px;
    background-color: var(--bg-color);
  }
  .products-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
  }
  .page-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  .page-title {
    font-family: 'Lora', serif;
    font-size: 42px;
    font-weight: 600;
    color: var(--heading-color);
    margin: 0;
  }
  .page-subtitle {
    font-family: 'Lora', serif;
    font-size: 18px;
    color: var(--text-color);
    margin-top: 0.5rem;
  }
  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns on desktop */
    gap: 2rem;
  }
  .product-card {
    background-color: var(--surface-color);
    border-radius: 12px;
    text-decoration: none;
    color: var(--text-color);
    transition: all 0.3s ease;
    overflow: hidden; /* Ensures image corners are rounded */
    border: 1px solid var(--border-color);
  }
  .product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  }
  .product-image-container {
    width: 100%;
    aspect-ratio: 3 / 4; /* Common aspect ratio for fashion */
    background-color: #f0f0f0;
  }
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .product-info {
    padding: 1rem;
  }
  .product-name {
    font-family: 'Lora', serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--heading-color);
    margin: 0 0 0.25rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product-description {
    font-family: 'Lora', serif;
    font-size: 15px;
    color: var(--text-color);
    margin: 0 0 0.75rem 0;
  }
  .product-price {
    font-family: 'Lora', serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--heading-color);
  }
  .price-span {
    font-weight: 400;
    font-size: 14px;
    color: var(--text-color);
  }
  
  /* Responsive styles */
  @media (max-width: 1024px) {
    .products-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default function DressesProductsPage() {
  return (
    <>
      {/* PASTE THE FULL <style> and <header> and <main> block here */}
      {/* I will only show the part that changes */}
      <style>{`
        ${styles}
        /* You can copy the full navbar and footer styles here if they were separate */
        .navbar { position: fixed; top: 0; left: 0; width: 100%; background-color: rgba(245, 242, 237, 0.85); backdrop-filter: blur(8px); z-index: 50; border-bottom: 1px solid var(--border-color); } .nav-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 80px; } .nav-logo { font-size: 30px; font-weight: 700; color: var(--heading-color); text-decoration: none; } .nav-links { display: flex; align-items: center; gap: 32px; } .nav-link { font-family: 'Lora', serif; font-weight: 600; font-size: 15px; color: var(--text-color); text-decoration: none; } .nav-button { background-color: var(--accent-color); color: white; font-family: 'Lora', serif; font-weight: bold; font-size: 14px; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; } .footer { background-color: #fdf5e6; padding: 32px 24px; text-align: center; border-top: 1px solid var(--border-color); } .footer-text { font-family: 'Lora', serif; color: #888888; }
      `}</style>

      <header className="navbar">
        <nav className="nav-container">
          <Link href="/" className="nav-logo">ReVibe</Link>
          <div className="nav-links">
            <a href="#" className="nav-link">Reviews</a>
            <button className="nav-button">Add to Closet</button>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="products-container">
          <div className="page-header">
            {/* THIS IS THE ONLY PART THAT REALLY CHANGES */}
            <h1 className="page-title">Gowns & Dresses</h1>
            <p className="page-subtitle">For moments that matter.</p>
          </div>
          <div className="products-grid">
            {mockProducts.map((product) => (
              <Link key={product.id} href={`/rent/dresses/${product.id}`} className="product-card">
                <div className="product-image-container">
                  <img src={product.imageUrl} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">
                    ₹{product.price} <span className="price-span">/ rent</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        {/* ... Footer HTML ... */}
        <p className="footer-text">© {new Date().getFullYear()} ReVibe. All Rights Reserved.</p>
      </footer>
    </>
  );
}