// File: components/CartItem.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function CartItem({
  item,
}: {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    options: Record<string, string>;
  };
}) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      // Here you would update the cart context/state
    }
  };

  const removeItem = () => {
    // Here you would remove the item from cart context/state
    console.log("Removing item:", item.id);
  };

  return (
    <div className="py-6 flex">
      <div className="h-24 w-24 relative flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <div className="ml-4 flex-grow">
        <div className="flex justify-between mb-2">
          <h3 className="font-medium">{item.name}</h3>
          <button
            onClick={removeItem}
            className="text-gray-500 hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {Object.keys(item.options).length > 0 && (
          <div className="text-sm text-gray-500 mb-2">
            {Object.entries(item.options).map(([key, value]) => (
              <div key={key}>
                {key}: {value as string}
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <label htmlFor={`quantity-${item.id}`} className="sr-only">
              Quantity
            </label>
            <select
              id={`quantity-${item.id}`}
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded p-1"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="font-medium">
            ${(item.price * quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
