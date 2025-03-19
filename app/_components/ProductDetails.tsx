// File: components/ProductDetails.jsx
"use client";
import { useState } from "react";

interface Product {
  description: string;
  details: string[];
}

export default function ProductDetails({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-8 border-t pt-8">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${
            activeTab === "description"
              ? "border-b-2 border-black font-medium"
              : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "details" ? "border-b-2 border-black font-medium" : ""
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "shipping"
              ? "border-b-2 border-black font-medium"
              : ""
          }`}
          onClick={() => setActiveTab("shipping")}
        >
          Shipping & Returns
        </button>
      </div>

      <div className="py-4">
        {activeTab === "description" && <p>{product.description}</p>}

        {activeTab === "details" && (
          <ul className="list-disc pl-5 space-y-2">
            {product.details.map((detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}

        {activeTab === "shipping" && (
          <div>
            <h4 className="font-medium mb-2">Shipping</h4>
            <p className="mb-4">
              Free standard shipping on all orders over $100. Orders typically
              ship within 1-2 business days.
            </p>

            <h4 className="font-medium mb-2">Returns</h4>
            <p>
              We accept returns within 30 days of delivery. Items must be in
              original condition with all packaging.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
