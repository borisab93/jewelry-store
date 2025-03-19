// File: components/Filters.jsx
"use client";
import { useState } from "react";

export default function Filters() {
  const [expanded, setExpanded] = useState({
    category: true,
    price: true,
    material: true,
  });

  const toggleSection = (section: keyof typeof expanded) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section],
    });
  };

  return (
    <div className="bg-gray-50 p-6 rounded sticky top-24">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full font-medium mb-3"
          onClick={() => toggleSection("category")}
        >
          <span>Category</span>
          <span>{expanded.category ? "−" : "+"}</span>
        </button>

        {expanded.category && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Necklaces</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Earrings</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Rings</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Bracelets</span>
            </label>
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full font-medium mb-3"
          onClick={() => toggleSection("price")}
        >
          <span>Price</span>
          <span>{expanded.price ? "−" : "+"}</span>
        </button>

        {expanded.price && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Under $100</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>$100 - $250</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>$250 - $500</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>$500+</span>
            </label>
          </div>
        )}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full font-medium mb-3"
          onClick={() => toggleSection("material")}
        >
          <span>Material</span>
          <span>{expanded.material ? "−" : "+"}</span>
        </button>

        {expanded.material && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Gold</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Silver</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Rose Gold</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Platinum</span>
            </label>
          </div>
        )}
      </div>

      <button className="w-full py-2 border border-black text-black rounded hover:bg-black hover:text-white transition">
        Apply Filters
      </button>
    </div>
  );
}
