"use client";

import {
  TrendingUp,
  Zap,
  BarChart3,
  Clock,
  UsersRound,
} from "lucide-react";
import TiltCard from "./TiltCard";

const benefits = [
  {
    icon: TrendingUp,
    title: "Más ventas y mejores clientes",
    description:
      "Captura, califica y nutre leads automáticamente, priorizando las oportunidades con mayor probabilidad de cierre e integrando todo con tu CRM.",
  },
  {
    icon: Zap,
    title: "Eficiencia operativa inmediata",
    description:
      "Reduce tiempos de respuesta, errores manuales y retrabajos, automatizando tareas repetitivas en áreas como comercial, soporte, operación y backoffice.",
  },
  {
    icon: BarChart3,
    title: "Decisiones guiadas por datos",
    description:
      "Los agentes registran cada interacción, alimentan tus sistemas con datos limpios y facilitan dashboards ejecutivos para tomar decisiones con evidencia, no con intuición.",
  },
  {
    icon: Clock,
    title: "Experiencia de cliente constante 24/7",
    description:
      "Atención siempre disponible, con respuestas consistentes, personalizadas y alineadas a tus protocolos de servicio, sin depender de horarios o disponibilidad de equipo.",
  },
  {
    icon: UsersRound,
    title: "Escalabilidad sin contratar más personal",
    description:
      "Aumenta el volumen de interacciones que puedes gestionar (consultas, leads, casos, solicitudes) sin incrementar proporcionalmente tu dotación.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm text-white tracking-tight">
            Convierte la IA en resultados de negocio,
            <br />
            <span className="text-primary-300">no solo en tecnología</span>
          </h2>
          <p className="mt-6 text-body-lg text-white/70 max-w-2xl mx-auto">
            Los agentes con IA permiten que tus equipos se enfoquen en tareas de alto valor mientras la automatización se encarga del trabajo repetitivo, la captura de datos y la comunicación 24/7 con clientes y usuarios internos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <TiltCard
              key={benefit.title}
              className="relative bg-white/10 border border-white/20 rounded-[16px] p-7 hover:bg-white/15 hover:border-white/30 transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)]"
            >
              <div className="w-12 h-12 bg-accent-500/20 rounded-[12px] flex items-center justify-center mb-5">
                <benefit.icon
                  className="w-6 h-6 text-accent-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-title-lg text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-body-md text-white/60 leading-relaxed">
                {benefit.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
