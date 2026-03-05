import { Bot } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <span className="font-display text-title-md text-white">
                Jhed<span className="font-normal text-primary-300">AI</span>
              </span>
            </div>
            <p className="text-body-md text-white/60 leading-relaxed max-w-[280px]">
              Agentes de IA a la medida de tu negocio. Automatización inteligente para empresas en Chile y Latinoamérica.
            </p>
          </div>

          {/* Producto */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-title-sm text-white mb-5">Producto</h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/agentes"
                  className="text-body-md text-white/60 hover:text-primary-500 transition-colors duration-200"
                >
                  Agentes
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-body-md text-white/60 hover:text-primary-500 transition-colors duration-200"
                >
                  Precios
                </Link>
              </li>
              <li>
                <span className="text-body-md text-white/30">Integraciones</span>
              </li>
              <li>
                <span className="text-body-md text-white/30">API</span>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="md:col-span-2">
            <h4 className="text-title-sm text-white mb-5">Empresa</h4>
            <ul className="space-y-3.5">
              <li>
                <span className="text-body-md text-white/30">Sobre nosotros</span>
              </li>
              <li>
                <span className="text-body-md text-white/30">Blog</span>
              </li>
              <li>
                <span className="text-body-md text-white/30">Carreras</span>
              </li>
              <li>
                <span className="text-body-md text-white/30">Contacto</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-title-sm text-white mb-5">Legal</h4>
            <ul className="space-y-3.5">
              <li>
                <span className="text-body-md text-white/30">Términos</span>
              </li>
              <li>
                <span className="text-body-md text-white/30">Privacidad</span>
              </li>
              <li>
                <span className="text-body-md text-white/30">Cookies</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-white/40">
            &copy; {new Date().getFullYear()} JhedAI. Todos los derechos reservados.
          </p>
          <p className="text-body-sm text-white/40">
            Hecho con IA
          </p>
        </div>
      </div>
    </footer>
  );
}
