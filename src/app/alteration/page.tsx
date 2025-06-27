// src/app/alteration/page.tsx

"use client"; // This page is interactive, so we need this!

import { useState } from "react";
import Link from "next/link";

// --- Helper Components for the Form ---
// This makes our main component cleaner
const MeasurementInput = ({ label, name, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder="e.g., 34 inches"
    />
  </div>
);

// --- The Main Page Component ---
export default function AlterationPage() {
  const [garment, setGarment] = useState(null); // 'kurti', 'shirt', or 'pants'
  const [measurements, setMeasurements] = useState({});
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleGarmentSelect = (type) => {
    setGarment(type);
    setMeasurements({}); // Reset measurements when garment changes
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("--- SUBMITTING ALTERATION ---");
    console.log("Garment Type:", garment);
    console.log("Measurements:", measurements);
    console.log("Additional Notes:", notes);
    console.log("Image File:", image);
    alert("Check the console (F12) to see your submitted data!");
  };

  return (
    <>
      {/* We need to define styles for this specific page */}
      <style>{`
        .alteration-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 24px;
          font-family: 'Lora', serif;
        }
        .alteration-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .alteration-header h1 {
          font-size: 36px;
          color: var(--heading-color);
        }
        .alteration-header a {
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
        .garment-selector {
          display: flex;
          gap: 16px;
        }
        .garment-button {
          flex: 1;
          padding: 16px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          border: 2px solid var(--border-color);
          background-color: var(--bg-color);
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .garment-button.active {
          background-color: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-color);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          font-family: 'Lora', serif;
          font-size: 16px;
        }
        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }
        .image-upload-area {
          border: 2px dashed var(--border-color);
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          cursor: pointer;
        }
        .image-upload-area:hover {
          border-color: var(--highlight-color);
        }
        .image-preview {
          margin-top: 16px;
        }
        .image-preview img {
          max-width: 200px;
          max-height: 200px;
          border-radius: 8px;
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
        }
      `}</style>

      <div className="alteration-container">
        <header className="alteration-header">
          <Link href="/">← Back to Home</Link>
          <h1>Alteration Request</h1>
        </header>

        <form onSubmit={handleSubmit}>
          {/* --- Step 1: Select Garment --- */}
          <section className="step-section">
            <h2>Step 1: Select Garment Type</h2>
            <div className="garment-selector">
              <button type="button" onClick={() => handleGarmentSelect('kurti')} className={`garment-button ${garment === 'kurti' && 'active'}`}>Kurti</button>
              <button type="button" onClick={() => handleGarmentSelect('shirt')} className={`garment-button ${garment === 'shirt' && 'active'}`}>Shirt</button>
              <button type="button" onClick={() => handleGarmentSelect('pants')} className={`garment-button ${garment === 'pants' && 'active'}`}>Pants</button>
            </div>
          </section>

          {/* --- Step 2: Measurements (Conditionally Rendered) --- */}
          {garment && (
            <section className="step-section">
              <h2>Step 2: Provide Measurements (in inches)</h2>
              <div className="form-grid">
                {(garment === 'kurti' || garment === 'shirt') && <>
                  <MeasurementInput label="Bust" name="bust" value={measurements.bust || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Waist" name="waist" value={measurements.waist || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Hip" name="hip" value={measurements.hip || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Shoulder" name="shoulder" value={measurements.shoulder || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Sleeve Length" name="sleeve" value={measurements.sleeve || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Full Length" name="length" value={measurements.length || ''} onChange={handleInputChange} />
                </>}
                {garment === 'pants' && <>
                  <MeasurementInput label="Waist" name="waist" value={measurements.waist || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Hips" name="hips" value={measurements.hips || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Inseam" name="inseam" value={measurements.inseam || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Outseam" name="outseam" value={measurements.outseam || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Front Rise" name="frontRise" value={measurements.frontRise || ''} onChange={handleInputChange} />
                  <MeasurementInput label="Back Rise" name="backRise" value={measurements.backRise || ''} onChange={handleInputChange} />
                </>}
              </div>
            </section>
          )}

          {/* --- Step 3: Additional Details --- */}
          {garment && (
            <section className="step-section">
              <h2>Step 3: Additional Details</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="notes">Further Requests</label>
                  <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g., Please fix the zipper on the left side."></textarea>
                </div>
                <div className="form-group">
                  <label>Upload a Reference Image</label>
                  <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                  <label htmlFor="image-upload" className="image-upload-area">
                    Click to upload
                  </label>
                  {imagePreview && (
                    <div className="image-preview">
                      <img src={imagePreview} alt="Reference preview" />
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
          
          {/* --- Step 4: Submit --- */}
          {garment && <button type="submit" className="submit-button">Submit Alteration Request</button>}

        </form>
      </div>
    </>
  );
}