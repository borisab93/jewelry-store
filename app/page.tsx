import Link from "next/link";
import Image from "next/image";
import FeaturedProducts from "@/app/_components/FeaturedProducts";
import CategoryGrid from "@/app/_components/CategoryGrid";
import Testimonials from "@/app/_components/Testimonials";
import Newsletter from "@/app/_components/Newsletter";
import mainImage from "@/public/bg.jpg";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[600px] bg-gray-100 flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Timeless Elegance, Modern Artistry
            </h1>
            <p className="text-lg mb-6">
              Discover our handcrafted jewelry collection that blends tradition
              with contemporary design.
            </p>
            <Link
              href="/collections"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Shop Collection
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-100 z-0">
          <Image
            src={mainImage}
            alt="Elegant jewelry display"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Explore Our Collections
          </h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Bestsellers
          </h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* About/Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2010, Luxe Gems began as a small studio dedicated to
                creating unique, handcrafted jewelry pieces that tell a story.
              </p>
              <p className="mb-4">
                Our artisans blend traditional techniques with modern design,
                ensuring each piece is both timeless and contemporary.
              </p>
              <Link
                href="/about"
                className="text-black font-medium border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition"
              >
                Learn more about us
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96">
              <Image
                src="/api/placeholder/600/600"
                alt="Jewelry crafting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Our Customers Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <Newsletter />
      </section>
    </main>
  );
}
