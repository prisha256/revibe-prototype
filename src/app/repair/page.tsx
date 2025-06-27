// src/app/repair/page.tsx

"use client"; // This page is interactive

import { useState } from "react";
import Link from "next/link";

// --- The Main Page Component ---
export default function RepairPage() {
  // State for each potential repair detail
  const [zipperDetails, setZipperDetails] = useState("");
  const [buttonDetails, setButtonDetails] = useState("");
  const [patchingDetails, setPatchingDetails] = useState("");
  
  // State for image handling
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      // Create a URL for the preview
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = () => {
    setImageFile(null);
    setImagePreview(null);
    // Optional: reset the file input if you want the user to be able to select the same file again
    const fileInput = document.getElementById('image-upload');
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const repairData = {
      zipper: zipperDetails,
      button: buttonDetails,
      patching: patchingDetails,
      image: imageFile,
    };
    
    console.log("--- SUBMITTING REPAIR REQUEST ---");
    console.log(repairData);
    alert("Check the console (F12) to see your submitted data!");
  };

  return (
    <>
      {/* Re-using styles from the alteration page, with small tweaks */}
      <style>{`
        *, *::before, *::after {
            box-sizing: border-box;
        }
        /* These styles are copied/adapted from the alteration page for consistency */
        .repair-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 24px;
          font-family: 'Lora', serif;
        }
        .repair-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .repair-header h1 {
          font-size: 36px;
          color: var(--heading-color);
        }
        .repair-header a {
          color: var(--highlight-color);
          text-decoration: none;
          font-weight: 600;
        }
        .step-section {
          background-color: var(--surface-color);
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          margin-bottom: 24px;
        }
        .step-section h2 {
          font-size: 22px;
          color: var(--heading-color);
          margin-top: 0;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
        }
        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-color);
        }
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          font-family: 'Lora', serif;
          font-size: 16px;
          min-height: 80px;
          resize: vertical;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .form-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .image-upload-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        .image-upload-area {
          border: 2px dashed var(--border-color);
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 150px;
        }
        .image-upload-area:hover {
          border-color: var(--highlight-color);
        }
        .image-preview-wrapper {
          position: relative;
          margin-top: 16px;
        }
        .image-preview-wrapper img {
          max-width: 200px;
          max-height: 200px;
          border-radius: 8px;
        }
        .delete-image-btn {
          position: absolute;
          top: -10px;
          right: -10px;
          background-color: #ff4d4d;
          color: white;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .submit-button {
            display: block;
            width: 100%;
            padding: 16px;
            font-size: 18px;
            font-weight: bold;
            color: white;
            background-color: var(--highlight-color);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 24px;
        }
      `}</style>

      <div className="repair-container">
        <header className="repair-header">
          <Link href="/">← Back to Home</Link>
          <h1>Repair Request</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <section className="step-section">
            <h2>Describe the repairs you need</h2>
            <p>Fill out the details for any repairs required. You can leave fields blank.</p>
          </section>

          <div className="form-grid">
            {/* Column 1: Text inputs */}
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="zipper">Zipper Replacement/Repair</label>
                <textarea id="zipper" value={zipperDetails} onChange={(e) => setZipperDetails(e.target.value)} placeholder="e.g., Zipper is stuck on my blue jacket..."></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="button">Button Replacement/Repair</label>
                <textarea id="button" value={buttonDetails} onChange={(e) => setButtonDetails(e.target.value)} placeholder="e.g., Missing the top button on my white shirt..."></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="patching">Patching & Mending</label>
                <textarea id="patching" value={patchingDetails} onChange={(e) => setPatchingDetails(e.target.value)} placeholder="e.g., Small tear on the left knee of my jeans..."></textarea>
              </div>
            </div>

            {/* Column 2: Image upload */}
            <div className="form-column">
                <div className="form-group">
                    <label>Upload a Photo of the Damage</label>
                    <div className="image-upload-container">
                        {!imagePreview ? (
                            <>
                                <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                                <label htmlFor="image-upload" className="image-upload-area">
                                    Click to upload a photo
                                </label>
                            </>
                        ) : (
                            <div className="image-preview-wrapper">
                                <img src={imagePreview} alt="Damage preview" />
                                <button type="button" onClick={handleImageDelete} className="delete-image-btn">×</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
          </div>
          
          <button type="submit" className="submit-button">Submit Repair Request</button>
        </form>
      </div>
    </>
  );
}