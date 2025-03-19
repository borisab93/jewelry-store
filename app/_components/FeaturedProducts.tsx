// File: components/FeaturedProducts.jsx
import Link from "next/link";
import Image from "next/image";

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
];

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
}
