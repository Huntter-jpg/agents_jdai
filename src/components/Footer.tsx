import { Bot } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50/80 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-title-md text-gray-900">
                Jhed<span className="font-normal text-gray-500">AI</span>
              </span>
            </div>
            <p className="text-body-md text-gray-500 leading-relaxed max-w-[280px]">
              Agentes de IA a la medida de tu negocio. Automatización inteligente para empresas en Chile y Latinoamérica.
            </p>
          </div>

          {/* Producto */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-title-sm text-gray-900 mb-5">Producto</h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/#agentes"
                  className="text-body-md text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Agentes
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-body-md text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Precios
                </Link>
              </li>
              <li>
                <span className="text-body-md text-gray-400">Integraciones</span>
              </li>
              <li>
                <span className="text-body-md text-gray-400">API</span>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="md:col-span-2">
            <h4 className="text-title-sm text-gray-900 mb-5">Empresa</h4>
            <ul className="space-y-3.5">
              <li>
                <span className="text-body-md text-gray-400">Sobre nosotros</span>
              </li>
              <li>
                <span className="text-body-md text-gray-400">Blog</span>
              </li>
              <li>
                <span className="text-body-md text-gray-400">Carreras</span>
              </li>
              <li>
                <span className="text-body-md text-gray-400">Contacto</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-title-sm text-gray-900 mb-5">Legal</h4>
            <ul className="space-y-3.5">
              <li>
                <span className="text-body-md text-gray-400">Terminos</span>
              </li>
              <li>
                <span className="text-body-md text-gray-400">Privacidad</span>
              </li>
              <li>
                <span className="text-body-md text-gray-400">Cookies</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-gray-400">
            &copy; {new Date().getFullYear()} JhedAI. Todos los derechos reservados.
          </p>
          <p className="text-body-sm text-gray-400">
            Hecho con IA
          </p>
        </div>
      </div>
    </footer>
  );
}
