import {
  TrendingUp,
  Zap,
  BarChart3,
  Clock,
  UsersRound,
} from "lucide-react";

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
    <section className="py-24 px-6 lg:px-8 bg-gray-50/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display-sm text-gray-900 tracking-tight">
            Convierte la IA en resultados de negocio,
            <br />
            <span className="text-gray-400">no solo en tecnología</span>
          </h2>
          <p className="mt-6 text-body-lg text-gray-500 max-w-2xl mx-auto">
            Los agentes con IA permiten que tus equipos se enfoquen en tareas de alto valor mientras la automatización se encarga del trabajo repetitivo, la captura de datos y la comunicación 24/7 con clientes y usuarios internos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border border-gray-200/80 rounded-[16px] p-7 hover:shadow-elevation-3 hover:border-gray-300/60 transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)]"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-[12px] flex items-center justify-center mb-5 border border-gray-100">
                <benefit.icon
                  className="w-6 h-6 text-gray-700"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-title-lg text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-body-md text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
