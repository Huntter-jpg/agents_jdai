import {
  Search,
  PenTool,
  Plug,
  BookOpen,
  Rocket,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Diagnóstico y estrategia IA",
    description:
      "Analizamos procesos, datos disponibles y objetivos de negocio para definir dónde un agente generará más impacto (ventas, operación, servicio al cliente, soporte interno, etc.).",
  },
  {
    icon: PenTool,
    title: "Diseño del agente y casos de uso",
    description:
      "Definimos personalidad, flujos conversacionales, políticas de negocio y límites operativos, junto con los KPIs que mediremos (tiempo de respuesta, leads calificados, citas agendadas, etc.).",
  },
  {
    icon: Plug,
    title: "Integración con tu ecosistema tecnológico",
    description:
      "Conectamos el agente a tus plataformas vía API: CRMs, ERPs, plataformas de agendamiento, sistemas documentales, e-commerce, etc., en nube o infraestructura local.",
  },
  {
    icon: BookOpen,
    title: "Entrenamiento con tu conocimiento interno",
    description:
      "Alimentamos al agente con tus documentos, procedimientos, catálogos, contratos y datos históricos para que hable el idioma de tu empresa y no solo \"genérico de la industria\".",
  },
  {
    icon: Rocket,
    title: "Despliegue, monitoreo y mejora continua",
    description:
      "Implementamos pilotos controlados, monitoreamos métricas reales y ajustamos comportamiento, prompts y reglas para maximizar el valor entregado.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display-sm text-gray-900 tracking-tight">
            Automatización con IA,
            <br />
            <span className="text-gray-400">diseñada para tu realidad</span>
          </h2>
          <p className="mt-6 text-body-lg text-gray-500 max-w-2xl mx-auto">
            No vendemos &ldquo;bots genéricos&rdquo;. Diseñamos agentes inteligentes alineados con la estrategia, procesos y sistemas de tu organización, utilizando la metodología introgresiva de JhedAI para asegurar adopción real y retorno de inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative bg-white border border-gray-200/80 rounded-[16px] p-7 hover:shadow-elevation-3 hover:border-gray-300/60 transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)] group"
            >
              {/* Step number */}
              <span className="absolute -top-3 -right-2 w-7 h-7 bg-gray-900 text-white text-label-md rounded-full flex items-center justify-center shadow-elevation-1">
                {index + 1}
              </span>

              <div className="w-12 h-12 bg-gray-50 rounded-[12px] flex items-center justify-center mb-5 border border-gray-100 group-hover:bg-gray-900 transition-colors duration-200">
                <pillar.icon
                  className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-200"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-title-lg text-gray-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-body-md text-gray-500 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA secundario */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-label-lg text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            Explorar casos de automatización con IA
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
