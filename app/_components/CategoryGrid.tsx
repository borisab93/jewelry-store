// File: components/CategoryGrid.jsx
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Necklaces",
    image: "/api/placeholder/600/600",
    slug: "necklaces",
  },
  {
    name: "Earrings",
    image: "/api/placeholder/600/600",
    slug: "earrings",
  },
  {
    name: "Rings",
    image: "/api/placeholder/600/600",
    slug: "rings",
  },
  {
    name: "Bracelets",
    image: "/api/placeholder/600/600",
    slug: "bracelets",
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/collections?category=${category.slug}`}
          className="group block relative overflow-hidden"
        >
          <div className="aspect-square">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
