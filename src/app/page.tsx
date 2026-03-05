import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import { Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />

      <BenefitsSection />

      <HowItWorks />

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-display-sm text-gray-900 tracking-tight">
            Transforma tu operación
            <br />
            <span className="text-primary-500">con agentes de IA a medida</span>
          </h2>
          <p className="mt-6 text-body-lg text-gray-500 max-w-lg mx-auto">
            Conversemos sobre tus procesos y te mostramos cómo un agente
            inteligente puede generar impacto real en tu negocio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 h-12 bg-primary-500 text-white text-label-lg rounded-full hover:bg-primary-600 hover:shadow-elevation-2 transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              Agendar demo estratégica
            </a>
            <a
              href="https://wa.me/56964730628"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 h-12 border border-primary-500 text-primary-600 text-label-lg rounded-full hover:bg-primary-50 transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
          <Link
            href="/agentes"
            className="mt-6 inline-flex text-label-lg text-primary-500 hover:text-primary-600 transition-colors duration-200"
          >
            Explorar todos los agentes →
          </Link>
          <p className="mt-4 text-body-sm text-gray-400 max-w-md mx-auto">
            Sin formularios eternos ni spam. Agenda una sesión con nuestro
            equipo para explorar casos de uso reales.
          </p>
        </div>
      </section>
    </>
  );
}
