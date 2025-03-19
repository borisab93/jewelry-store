// File: app/product/[id]/page.js
import Image from "next/image";
import AddToCartButton from "@/app/_components/AddToCartButton";
import ProductDetails from "@/app/_components/ProductDetails";
import RelatedProducts from "@/app/_components/RelatedProducts";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  images: string[];
  options: {
    chain: string[];
  };
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  // Normally we would fetch product data based on params.id
  // This is a static example
  const product: Product = {
    id: resolvedParams.id,
    name: "Crystal Pendant Necklace",
    price: 129.99,
    description:
      "A stunning crystal pendant on a delicate silver chain. This piece catches the light beautifully and adds elegance to any outfit.",
    details: [
      "Sterling silver chain and setting",
      "Ethically sourced crystal",
      "Adjustable 16-18 inch chain",
      "Handcrafted in our studio",
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
    ],
    options: {
      chain: ["Silver", "Gold", "Rose Gold"],
    },
  };

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="sticky top-24">
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="aspect-square relative">
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl mb-4">${product.price}</p>
            <p className="mb-6">{product.description}</p>

            {/* Product Options */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Chain</label>
              <div className="flex gap-2">
                {product.options.chain.map((option) => (
                  <button
                    key={option}
                    className="border border-gray-300 px-4 py-2 rounded hover:border-black focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <AddToCartButton />

            <ProductDetails product={product} />
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <RelatedProducts currentProductId={parseInt(product.id)} />
        </section>
      </div>
    </main>
  );
}
