"use client";

import Link from "next/link";
import { NAV_LINKS, ObjectConfig } from "@/content/siteConfig";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-700 text-white font-bold text-xl">
            iV
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">{ObjectConfig.name}</span>
        </Link>
        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.slice(0, 6).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-700"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-800"
          >
            Get Started
          </Link>
        </div>
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-600 hover:text-indigo-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
