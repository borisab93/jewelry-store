// File: components/RelatedProducts.jsx
import Link from "next/link";
import Image from "next/image";

// This would normally be fetched based on the current product
const relatedProducts = [
  {
    id: 5,
    name: "Pearl Drop Earrings",
    price: 79.99,
    image: "/api/placeholder/400/400",
  },
  {
    id: 6,
    name: "Silver Bangle Set",
    price: 119.99,
    image: "/api/placeholder/400/400",
  },
  {
    id: 7,
    name: "Sapphire Pendant",
    price: 159.99,
    image: "/api/placeholder/400/400",
  },
  {
    id: 8,
    name: "Gold Wedding Band",
    price: 399.99,
    image: "/api/placeholder/400/400",
  },
];

export default function RelatedProducts({
  currentProductId,
}: {
  currentProductId: number;
}) {
  // Filter out the current product
  const filteredProducts = relatedProducts.filter(
    (product) => product.id.toString() !== currentProductId.toString()
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.slice(0, 4).map((product) => (
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
