// File: app/collections/page.js
import ProductGrid from "@/app/_components/ProductGrid";
import Filters from "@/app/_components/Filters";

export default function Collections() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Collections</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <Filters />
          </div>

          <div className="lg:w-3/4">
            <ProductGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
