"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Bot } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="text-title-md text-gray-900">
              Jhed<span className="font-normal text-gray-500">AI</span>
            </span>
          </Link>

          {/* Desktop nav - center */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="text-label-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2.5 rounded-full transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link
              href="/#agentes"
              className="text-label-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2.5 rounded-full transition-colors duration-200"
            >
              Agentes
            </Link>
            <Link
              href="/pricing"
              className="text-label-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2.5 rounded-full transition-colors duration-200"
            >
              Precios
            </Link>
          </div>

          {/* CTA - right */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-label-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-5 h-10 rounded-full transition-colors duration-200">
              Iniciar sesion
            </button>
            <button className="text-label-lg bg-gray-900 text-white px-6 h-10 rounded-full hover:bg-gray-800 hover:shadow-elevation-2 transition-all duration-200 active:scale-[0.98]">
              Agendar demo
            </button>
          </div>

          {/* Mobile menu button - 48px touch target */}
          <button
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200/60 animate-[fadeIn_200ms_ease-out]">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="flex items-center h-12 px-4 text-label-lg text-gray-700 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/#agentes"
              className="flex items-center h-12 px-4 text-label-lg text-gray-700 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Agentes
            </Link>
            <Link
              href="/pricing"
              className="flex items-center h-12 px-4 text-label-lg text-gray-700 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Precios
            </Link>
            <div className="pt-3 mt-2 border-t border-gray-200/60 space-y-2">
              <button className="w-full h-12 text-label-lg text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200">
                Iniciar sesion
              </button>
              <button className="w-full h-12 text-label-lg bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
                Agendar demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
