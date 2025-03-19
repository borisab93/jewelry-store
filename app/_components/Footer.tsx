// File: components/Footer.jsx
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LUXE GEMS</h3>
            <p className="mb-4">
              Handcrafted jewelry for those who appreciate timeless elegance and
              contemporary design.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-gray-400"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-gray-400"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections" className="hover:text-gray-400">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=necklaces"
                  className="hover:text-gray-400"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=earrings"
                  className="hover:text-gray-400"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=rings"
                  className="hover:text-gray-400"
                >
                  Rings
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=bracelets"
                  className="hover:text-gray-400"
                >
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="hover:text-gray-400">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/care" className="hover:text-gray-400">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-gray-400">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Luxe Gems. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
