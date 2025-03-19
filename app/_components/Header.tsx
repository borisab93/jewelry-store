// File: components/Header.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            LUXE GEMS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/collections" className="hover:text-gray-600">
              All Jewelry
            </Link>
            <Link
              href="/collections?category=necklaces"
              className="hover:text-gray-600"
            >
              Necklaces
            </Link>
            <Link
              href="/collections?category=earrings"
              className="hover:text-gray-600"
            >
              Earrings
            </Link>
            <Link
              href="/collections?category=rings"
              className="hover:text-gray-600"
            >
              Rings
            </Link>
            <Link
              href="/collections?category=bracelets"
              className="hover:text-gray-600"
            >
              Bracelets
            </Link>
          </nav>

          {/* Icon Navigation */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" aria-label="Account">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" aria-label="Cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 mt-8">
            <Link
              href="/collections"
              className="text-2xl font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Jewelry
            </Link>
            <Link
              href="/collections?category=necklaces"
              className="text-2xl font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Necklaces
            </Link>
            <Link
              href="/collections?category=earrings"
              className="text-2xl font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Earrings
            </Link>
            <Link
              href="/collections?category=rings"
              className="text-2xl font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rings
            </Link>
            <Link
              href="/collections?category=bracelets"
              className="text-2xl font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bracelets
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
