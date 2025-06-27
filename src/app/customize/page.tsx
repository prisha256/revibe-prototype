// src/app/customize/page.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // We need this for our images

// --- DATA STRUCTURE FOR ALL OUR OPTIONS ---
// This makes our code clean and easy to update.
const customizationData = {
  tshirts: {
    name: "T-Shirts & Tops",
    styles: [
      { id: "embroidery", name: "Embroidery", image: "/images/customizations/embroidery.jpg" },
      { id: "kantha", name: "Kantha", image: "/images/customizations/kantha.jpg" },
      { id: "chikankari", name: "Chikankari", image: "/images/customizations/chikankari.jpg" },
      { id: "bandhani", name: "Bandhani Dyeing", image: "/images/customizations/bandhani.jpg" },
      { id: "block_printing", name: "Block Printing", image: "/images/customizations/block-printing.jpg" },
    ],
  },
  shirts: {
    name: "Shirts & Kurtas",
    styles: [
      { id: "mirror_work", name: "Mirror Work", image: "/images/customizations/mirror-work.jpg" },
      { id: "hand_embroidery", name: "Hand Embroidery", image: "/images/customizations/embroidery.jpg" },
      { id: "madhubani", name: "Madhubani", image: "/images/customizations/madhubaniKurti.jpg" },
      { id: "warli", name: "Warli", image: "/images/customizations/warli.jpg" },
    ],
  },
  jeans: {
    name: "Jeans & Trousers",
    styles: [
      { id: "patch_embroidery", name: "Patch Embroidery", image: "/images/customizations/patchwork.jpg" },
      { id: "distressing", name: "Distressing", image: "/images/customizations/distressing.jpg" },
      { id: "kalamkari", name: "Kalamkari Patchwork", image: "/images/customizations/kalamkari.jpg" },
      { id: "painted_pockets", name: "Painted Pockets (Madhubani)", image: "/images/customizations/madhubaniJeans.jpg" },
    ],
  },
  dupattas: {
    name: "Dupattas & Scarves",
    styles: [
      { id: "natural_dyeing", name: "Natural Dyeing", image: "/images/customizations/natural-dyeing.jpg" },
      { id: "block_printing", name: "Block Printing", image: "/images/customizations/block-printing.jpg" },
      { id: "shibori", name: "Shibori Tie-Dye", image: "/images/customizations/shibori.jpg" },
      { id: "gota_patti", name: "Gota Patti Borders", image: "/images/customizations/gota-patti.jpg" },
    ],
  },
};

export default function CustomizePage() {
  // State to manage the flow
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClothing, setSelectedClothing] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  
  // State for the final form
  const [notes, setNotes] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // --- HANDLER FUNCTIONS ---
  const handleClothingSelect = (clothingKey) => {
    setSelectedClothing(clothingKey);
    setCurrentStep(2);
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    setCurrentStep(3);
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      clothing: customizationData[selectedClothing].name,
      style: selectedStyle.name,
      notes: notes,
      uploadedImage: imageFile,
    };
    console.log("--- FINAL CUSTOMIZATION REQUEST ---", finalData);
    alert("Request submitted! Check the console (F12) for details.");
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        .customize-container { max-width: 900px; margin: 40px auto; padding: 24px; font-family: 'Lora', serif; }
        .customize-header { text-align: center; margin-bottom: 40px; position: relative; }
        .customize-header h1 { font-size: 36px; color: var(--heading-color); }
        .back-button { position: absolute; left: 0; top: 50%; transform: translateY(-50%); color: var(--highlight-color); text-decoration: none; font-weight: 600; font-size: 16px; }
        .step-section { background-color: var(--surface-color); padding: 32px; border-radius: 12px; border: 1px solid var(--border-color); }
        .step-title { font-size: 24px; color: var(--heading-color); margin: 0 0 24px 0; text-align: center; }
        .selection-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
        .selection-card { border: 2px solid var(--border-color); border-radius: 12px; text-align: center; padding: 16px; cursor: pointer; transition: all 0.2s ease; }
        .selection-card:hover { transform: translateY(-5px); border-color: var(--accent-color); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .selection-card-image-wrapper { width: 100%; height: 180px; position: relative; border-radius: 8px; overflow: hidden; margin-bottom: 12px; }
        .selection-card-image { object-fit: cover; }
        .selection-card h3 { font-size: 20px; color: var(--heading-color); margin: 0; }
        .final-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .summary-box { background-color: var(--bg-color); padding: 24px; border-radius: 8px; border: 1px solid var(--border-color); }
        .summary-box h4 { margin-top: 0; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 8px; }
        .form-group textarea { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); min-height: 120px; }
        .image-upload-area { border: 2px dashed var(--border-color); border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; }
        .submit-button { display: block; width: 100%; padding: 16px; font-size: 18px; font-weight: bold; color: white; background-color: var(--highlight-color); border: none; border-radius: 8px; cursor: pointer; margin-top: 24px; }
        @media (max-width: 768px) { .final-form-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="customize-container">
        <header className="customize-header">
          {currentStep > 1 && <a href="#" onClick={goBack} className="back-button">← Go Back</a>}
          <h1>Customize Your Item</h1>
        </header>

        {/* --- STEP 1: SELECT CLOTHING --- */}
        {currentStep === 1 && (
          <section className="step-section">
            <h2 className="step-title">Step 1: Select Clothing Type</h2>
            <div className="selection-grid">
              {Object.keys(customizationData).map((key) => (
                <div key={key} className="selection-card" onClick={() => handleClothingSelect(key)}>
                  <h3>{customizationData[key].name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* --- STEP 2: SELECT STYLE --- */}
        {currentStep === 2 && selectedClothing && (
          <section className="step-section">
            <h2 className="step-title">Step 2: Choose Customization Style</h2>
            <div className="selection-grid">
              {customizationData[selectedClothing].styles.map((style) => (
                <div key={style.id} className="selection-card" onClick={() => handleStyleSelect(style)}>
                  <div className="selection-card-image-wrapper">
                    <Image src={style.image} alt={style.name} layout="fill" className="selection-card-image" />
                  </div>
                  <h3>{style.name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- STEP 3: FINAL DETAILS & SUBMIT --- */}
        {currentStep === 3 && selectedClothing && selectedStyle && (
           <section className="step-section">
             <h2 className="step-title">Step 3: Final Details</h2>
             <form onSubmit={handleSubmit}>
              <div className="final-form-grid">
                <div className="summary-box">
                  <h4>Your Selection</h4>
                  <p><strong>Clothing:</strong> {customizationData[selectedClothing].name}</p>
                  <p><strong>Style:</strong> {selectedStyle.name}</p>
                  <div className="selection-card-image-wrapper" style={{height: '150px', marginTop: '16px'}}>
                     <Image src={selectedStyle.image} alt={selectedStyle.name} layout="fill" className="selection-card-image" />
                  </div>
                </div>
                <div>
                   <div className="form-group">
                      <label htmlFor="notes">Further Details</label>
                      <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g., I'd like the embroidery on the left sleeve..."></textarea>
                   </div>
                   <div className="form-group" style={{marginTop: '16px'}}>
                      <label>Upload Expected Product Picture</label>
                      <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                      <label htmlFor="image-upload" className="image-upload-area">
                        {imagePreview ? <img src={imagePreview} alt="upload preview" style={{maxWidth: '100px', maxHeight: '100px'}} /> : 'Click to upload'}
                      </label>
                   </div>
                </div>
              </div>
               <button type="submit" className="submit-button">Submit Customization Request</button>
             </form>
           </section>
        )}
      </div>
    </>
  );
}