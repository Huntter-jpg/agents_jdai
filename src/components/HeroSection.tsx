"use client";

import dynamic from "next/dynamic";
import { CheckCircle, Calendar, MessageCircle } from "lucide-react";

const ParticleNetwork = dynamic(() => import("./ParticleNetwork"), {
  ssr: false,
  loading: () => null,
});

const bullets = [
  "Agentes de IA diseñados a la medida de tus procesos, datos y regulaciones internas.",
  "Despliegue flexible: nube segura o infraestructura local, según requerimientos de TI y compliance.",
  "Integración con cualquier software que disponga de API (CRM, ERP, e-commerce, sistemas internos, legacy, etc.).",
  "Modalidades: proyecto cerrado o suscripción mensual con soporte, mejora continua y nuevas funcionalidades.",
];

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-8 overflow-hidden">
      {/* Particle canvas — behind everything */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ParticleNetwork />
      </div>

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 70%, rgba(255,255,255,1) 100%)",
        }}
      />

      {/* Content — above particles */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* H1 */}
        <h1 className="font-display text-display-sm sm:text-display-md md:text-display-lg text-gray-900 tracking-tight text-center">
          Agentes de IA a la medida
          <br />
          <span className="text-primary-500">de tu negocio</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-8 text-body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-center">
          Automatiza procesos, multiplica la productividad de tus equipos y genera nuevas ventas con agentes inteligentes diseñados por JhedAI para empresas e instituciones en Chile y Latinoamérica.
        </p>

        {/* Párrafo secundario */}
        <p className="mt-4 text-body-md text-gray-500 max-w-2xl mx-auto leading-relaxed text-center">
          Desarrollamos agentes y automatizaciones con IA entrenados en tu propio negocio, desplegados en la nube o en tus servidores locales, integrados vía API con tus sistemas actuales y disponibles como proyecto a medida o en formato SaaS (suscripción mensual).
        </p>

        {/* Bullets de impacto */}
        <div className="mt-12 max-w-2xl mx-auto space-y-4">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <CheckCircle
                className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <span className="text-body-md text-gray-700">{bullet}</span>
            </div>
          ))}
        </div>

        {/* Doble CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* Texto bajo CTA */}
        <p className="mt-5 text-body-sm text-gray-400 text-center max-w-lg mx-auto">
          Sin formularios eternos ni spam. Agenda una sesión con nuestro equipo para explorar casos de uso y ver agentes funcionando sobre escenarios reales de tu negocio.
        </p>
      </div>
    </section>
  );
}
