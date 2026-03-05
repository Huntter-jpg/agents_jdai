import {
  Search,
  PenTool,
  Plug,
  BookOpen,
  Rocket,
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm text-gray-900 tracking-tight">
            Automatización con IA,
            <br />
            <span className="text-primary-500">diseñada para tu realidad</span>
          </h2>
          <p className="mt-6 text-body-lg text-gray-500 max-w-2xl mx-auto">
            No vendemos &ldquo;bots genéricos&rdquo;. Diseñamos agentes inteligentes alineados con la estrategia, procesos y sistemas de tu organización, utilizando la metodología introgresiva de JhedAI para asegurar adopción real y retorno de inversión.
          </p>
        </div>

        {/* Timeline infographic */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="relative flex gap-6 group"
              >
                {/* Step circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-elevation-2 group-hover:bg-accent-500 transition-colors duration-300">
                    <pillar.icon
                      className="w-5 h-5 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-label-md text-primary-500 bg-primary-50 px-2.5 py-1 rounded-full font-display">
                      Paso {index + 1}
                    </span>
                  </div>
                  <h3 className="text-title-lg text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-body-md text-gray-500 leading-relaxed max-w-xl">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
