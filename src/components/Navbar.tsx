"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Bot, Calendar, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary-900 backdrop-blur-md border-b border-primary-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="font-display text-title-md text-white">
              Jhed<span className="font-normal text-primary-300">AI</span>
            </span>
          </Link>

          {/* Desktop nav - center */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="text-label-lg text-white/80 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-full transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link
              href="/#agentes"
              className="text-label-lg text-white/80 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-full transition-colors duration-200"
            >
              Agentes
            </Link>
            <Link
              href="/pricing"
              className="text-label-lg text-white/80 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-full transition-colors duration-200"
            >
              Precios
            </Link>
          </div>

          {/* CTA - right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-label-lg bg-accent-500 text-white px-6 h-10 rounded-full hover:bg-accent-600 hover:shadow-elevation-2 transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              Agendar
            </a>
            <a
              href="https://wa.me/56964730628"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-label-lg text-white border border-white/30 px-5 h-10 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full text-white/80 hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-900 border-t border-primary-800 animate-[fadeIn_200ms_ease-out]">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="flex items-center h-12 px-4 text-label-lg text-white/80 hover:bg-white/10 rounded-xl transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/#agentes"
              className="flex items-center h-12 px-4 text-label-lg text-white/80 hover:bg-white/10 rounded-xl transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Agentes
            </Link>
            <Link
              href="/pricing"
              className="flex items-center h-12 px-4 text-label-lg text-white/80 hover:bg-white/10 rounded-xl transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Precios
            </Link>
            <div className="pt-3 mt-2 border-t border-primary-800 space-y-2">
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full h-12 text-label-lg bg-accent-500 text-white rounded-full hover:bg-accent-600 transition-colors duration-200"
              >
                <Calendar className="w-4 h-4" />
                Agendar
              </a>
              <a
                href="https://wa.me/56964730628"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 text-label-lg text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
