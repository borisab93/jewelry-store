// File: app/cart/page.js
import Link from "next/link";
// import Image from "next/image";
import CartItem from "@/app/_components/CartItem";

export default function Cart() {
  // Example cart items (would normally be from state/context)
  const cartItems = [
    {
      id: "1",
      name: "Crystal Pendant Necklace",
      price: 129.99,
      quantity: 1,
      image: "/api/placeholder/200/200",
      options: { chain: "Silver" },
    },
    {
      id: "2",
      name: "Emerald Stud Earrings",
      price: 89.99,
      quantity: 1,
      image: "/api/placeholder/200/200",
      options: { chain: "Gold" },
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            {cartItems.length > 0 ? (
              <div className="divide-y">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="mb-4">Your cart is empty</p>
                <Link
                  href="/collections"
                  className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition mb-4">
                Checkout
              </button>

              <Link
                href="/collections"
                className="block text-center text-sm hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
