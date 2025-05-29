"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Logo" width={148} height={44} />
        </Link>

        {/* Right Side Controls (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/contact"
            className="bg-primary text-black px-4 py-2 rounded-full hover:bg-primaryhover transition"
          >
            Contact Us
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
          </Link>
          <div className="flex items-center gap-1">
            <Image src="/translate.svg" alt="language" width={24} height={24} />
            <span className="text-black text-sm font-manrope font-medium">
              ENG
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-4 animate-slide-in">
          <Link
            href="/contact"
            className="block w-full text-center bg-primary text-black px-4 py-2 rounded-full hover:primaryHover transition"
          >
            Contact Us
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin"
              width={24}
              height={24}
              className="mx-auto"
            />
          </Link>
          <div className="flex justify-center items-center gap-1">
            <Image src="/translate.svg" alt="language" width={24} height={24} />
            <span className="text-black text-sm font-manrope font-medium">
              ENG
            </span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
