// File: components/AddToCartButton.jsx
"use client";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function AddToCartButton() {
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    setAdding(true);
    // Here you would normally add the item to cart state/context
    setTimeout(() => {
      setAdding(false);
    }, 1000);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <button
          onClick={decreaseQuantity}
          className="w-10 h-10 border flex items-center justify-center hover:bg-gray-100"
        >
          −
        </button>
        <div className="w-12 text-center">{quantity}</div>
        <button
          onClick={increaseQuantity}
          className="w-10 h-10 border flex items-center justify-center hover:bg-gray-100"
        >
          +
        </button>
      </div>

      <button
        onClick={addToCart}
        disabled={adding}
        className="w-full flex items-center justify-center bg-black text-white py-3 rounded hover:bg-gray-800 transition"
      >
        {adding ? (
          "Adding..."
        ) : (
          <>
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </>
        )}
      </button>
    </div>
  );
}
