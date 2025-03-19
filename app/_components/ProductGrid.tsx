// File: components/ProductGrid.jsx
import Link from "next/link";
import Image from "next/image";

// This would normally come from an API or context
const products = [
  {
    id: 1,
    name: "Crystal Pendant Necklace",
    price: 129.99,
    image: "/api/placeholder/400/400",
    category: "necklaces",
  },
  {
    id: 2,
    name: "Emerald Stud Earrings",
    price: 89.99,
    image: "/api/placeholder/400/400",
    category: "earrings",
  },
  {
    id: 3,
    name: "Diamond Engagement Ring",
    price: 1299.99,
    image: "/api/placeholder/400/400",
    category: "rings",
  },
  {
    id: 4,
    name: "Gold Chain Bracelet",
    price: 149.99,
    image: "/api/placeholder/400/400",
    category: "bracelets",
  },
  {
    id: 5,
    name: "Pearl Drop Earrings",
    price: 79.99,
    image: "/api/placeholder/400/400",
    category: "earrings",
  },
  {
    id: 6,
    name: "Silver Bangle Set",
    price: 119.99,
    image: "/api/placeholder/400/400",
    category: "bracelets",
  },
  {
    id: 7,
    name: "Sapphire Pendant",
    price: 159.99,
    image: "/api/placeholder/400/400",
    category: "necklaces",
  },
  {
    id: 8,
    name: "Gold Wedding Band",
    price: 399.99,
    image: "/api/placeholder/400/400",
    category: "rings",
  },
];

export default function ProductGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p>Showing {products.length} products</p>
        <select className="p-2 border rounded">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
          >
            <div className="aspect-square relative mb-3 bg-gray-100 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex">
          <button className="h-10 w-10 flex items-center justify-center border rounded-l hover:bg-gray-100">
            &larr;
          </button>
          <button className="h-10 w-10 flex items-center justify-center border-t border-b bg-black text-white">
            1
          </button>
          <button className="h-10 w-10 flex items-center justify-center border-t border-b hover:bg-gray-100">
            2
          </button>
          <button className="h-10 w-10 flex items-center justify-center border rounded-r hover:bg-gray-100">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
