import {
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
  Check,
  ArrowLeft,
  Shield,
  Clock,
  Sparkles,
  HeadphonesIcon,
  Calendar,
  ArrowRight,
  Target,
  FileText,
  Image,
  Share2,
  FolderOpen,
  Brain,
  Plug,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { agents } from "@/data/agents";
import { notFound } from "next/navigation";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
};

const capabilityIconMap: Record<string, React.ComponentType<LucideProps>> = {
  "Lector de documentos": FileText,
  "Análisis de imágenes": Image,
  "Gestión de fecha y hora": Clock,
  "Compartir archivos": Share2,
  "Gestor de archivos": FolderOpen,
  "Memoria de largo plazo": Brain,
};

export function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }));
}

function SalesAgentPage({ agent }: { agent: (typeof agents)[0] }) {
  const IconComponent = iconMap[agent.icon];

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/#agentes"
          className="inline-flex items-center gap-2 text-label-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-4 h-10 rounded-full transition-colors duration-200 -ml-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a agentes
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-[72px] h-[72px] bg-primary-50 rounded-[18px] flex items-center justify-center flex-shrink-0">
              {IconComponent && (
                <IconComponent
                  className="w-8 h-8 text-primary-600"
                  strokeWidth={1.4}
                />
              )}
            </div>
            <div>
              <span className="text-label-md text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full">
                {agent.category}
              </span>
              <h1 className="text-display-sm text-gray-900 mt-3 tracking-tight">
                {agent.name}
              </h1>
            </div>
          </div>
          <p className="text-body-lg text-gray-600 leading-relaxed">
            {agent.description}
          </p>
        </div>

        {/* 1. Resumen ejecutivo */}
        {agent.executiveSummary && (
          <section className="mb-16">
            <h2 className="text-headline-md font-medium text-gray-900 mb-6">
              ¿Qué es el {agent.name}?
            </h2>
            <p className="text-body-lg text-gray-600 leading-relaxed mb-8">
              {agent.executiveSummary.whatIs}
            </p>

            <h3 className="text-title-lg text-gray-900 mb-4">
              ¿Qué resuelve?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {agent.executiveSummary.whatItSolves.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3.5 p-4 rounded-[14px] bg-gray-50/80 border border-gray-100"
                >
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-body-md text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-title-lg text-gray-900 mb-4">
              Formato de implementación
            </h3>
            <div className="space-y-3 mb-8">
              {agent.executiveSummary.implementationFormat.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3.5 p-4 rounded-[14px] bg-primary-50/50 border border-primary-100"
                >
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-body-md text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 bg-gray-900 text-white text-label-lg rounded-full hover:bg-gray-800 hover:shadow-elevation-2 transition-all duration-200 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Agendar demo del Agente de Ventas
              </a>
            </div>
            <p className="mt-3 text-body-sm text-gray-400">
              En 30 minutos te mostramos cómo este agente se integra a tu CRM y
              procesos actuales de ventas vía SaaS.
            </p>
          </section>
        )}

        {/* 2. ¿Para quién es? */}
        {agent.targetAudience && (
          <section className="mb-16">
            <h2 className="text-headline-md font-medium text-gray-900 mb-3">
              ¿Para quién es este agente?
            </h2>
            <p className="text-body-lg text-gray-500 mb-6">
              Pensado para equipos que necesitan vender más con el mismo
              esfuerzo (o menos)
            </p>
            <div className="space-y-3">
              {agent.targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 border border-gray-200/80 rounded-[14px] hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-[10px] flex items-center justify-center flex-shrink-0">
                    <Target
                      className="w-4 h-4 text-gray-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-body-md text-gray-700 pt-1">
                    {audience}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Casos de uso detallados */}
        {agent.detailedUseCases && (
          <section className="mb-16">
            <h2 className="text-headline-md font-medium text-gray-900 mb-8">
              Casos de uso: lo que puedes crear con este agente
            </h2>
            <div className="space-y-6">
              {agent.detailedUseCases.map((uc, index) => (
                <div
                  key={uc.title}
                  className="border border-gray-200/80 rounded-[16px] p-7 hover:shadow-elevation-2 transition-all duration-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-8 bg-gray-900 text-white text-label-md rounded-[10px] flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="text-title-lg text-gray-900">{uc.title}</h3>
                  </div>
                  <div className="space-y-2 pl-12">
                    {uc.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-body-md text-gray-600">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Integraciones */}
        {agent.integrations && (
          <section className="mb-16">
            <h2 className="text-headline-md font-medium text-gray-900 mb-3">
              Integraciones del {agent.name}
            </h2>
            <p className="text-body-lg text-gray-500 mb-8">
              Este agente se conecta vía API con los principales CRMs,
              calendarios y herramientas que hoy ya utilizas.
            </p>
            <div className="space-y-6">
              {agent.integrations.map((group) => (
                <div key={group.category}>
                  <h3 className="text-title-md text-gray-900 mb-3 flex items-center gap-2">
                    <Plug
                      className="w-4 h-4 text-gray-500"
                      strokeWidth={1.5}
                    />
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-label-lg text-gray-700 bg-white border border-gray-200 px-4 py-2.5 rounded-full hover:border-gray-400 hover:shadow-elevation-1 transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-body-sm text-gray-400">
                Compatible con cualquier software que cuente con API disponible,
                incluyendo sistemas internos o desarrollos a medida.
              </p>
            </div>
          </section>
        )}

        {/* 5. Capacidades pre-integradas */}
        {agent.capabilities && (
          <section className="mb-16">
            <h2 className="text-headline-md font-medium text-gray-900 mb-3">
              Capacidades pre-integradas
            </h2>
            <p className="text-body-lg text-gray-500 mb-8">
              Estas capacidades vienen incorporadas como estándar en el
              ecosistema de agentes de JhedAI, y potencian al {agent.name} desde
              el día uno.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {agent.capabilities.map((cap) => {
                const CapIcon = capabilityIconMap[cap.name] || FileText;
                return (
                  <div
                    key={cap.name}
                    className="bg-white border border-gray-200/80 rounded-[14px] p-6 hover:shadow-elevation-2 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-gray-50 rounded-[10px] flex items-center justify-center mb-4 border border-gray-100">
                      <CapIcon
                        className="w-5 h-5 text-gray-700"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h4 className="text-title-md text-gray-900 mb-3">
                      {cap.name}
                    </h4>
                    <ul className="space-y-2">
                      {cap.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2" />
                          <span className="text-body-sm text-gray-500">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 6. Beneficios específicos */}
        {agent.specificBenefits && (
          <section className="mb-16">
            <h2 className="text-headline-md font-medium text-gray-900 mb-3">
              Beneficios específicos para tu área comercial
            </h2>
            <p className="text-body-lg text-gray-500 mb-8">
              Impacto directo en ventas y gestión comercial
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {agent.specificBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="border border-gray-200/80 rounded-[14px] p-6 hover:shadow-elevation-2 transition-all duration-200"
                >
                  <h4 className="text-title-md text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-body-md text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Modalidad SaaS y seguridad */}
        {agent.saasInfo && (
          <section className="mb-16">
            <div className="bg-gray-50/80 border border-gray-200/80 rounded-[20px] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-900 rounded-[10px] flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-headline-md font-medium text-gray-900">
                  Modalidad SaaS y seguridad
                </h2>
              </div>
              <p className="text-title-md text-gray-700 mb-6">
                Implementación simple vía SaaS
              </p>
              <div className="space-y-3 mb-6">
                {agent.saasInfo.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="w-3 h-3 text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-body-md text-gray-700">{bullet}</span>
                  </div>
                ))}
              </div>
              <p className="text-body-lg text-gray-600 font-medium">
                {agent.saasInfo.closingText}
              </p>
            </div>
          </section>
        )}

        {/* 8. CTA final */}
        <section className="mb-8">
          <div className="bg-white border border-gray-200/80 rounded-[20px] p-10 text-center shadow-elevation-1">
            <h2 className="text-headline-md font-medium text-gray-900 mb-6">
              Probar y agendar
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 h-12 bg-gray-900 text-white text-label-lg rounded-full hover:bg-gray-800 hover:shadow-elevation-2 transition-all duration-200 active:scale-[0.98]"
              >
                Probar el Agente de Ventas ahora
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 h-12 border border-gray-300 text-gray-700 text-label-lg rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Agendar demo personalizada
              </a>
            </div>
            <p className="text-body-sm text-gray-400 max-w-xl mx-auto mb-2">
              Interactúa en vivo con el Agente IA Experto en Ventas: hazle
              preguntas, simula procesos de captación y pídele que agende una
              reunión contigo.
            </p>
            <p className="text-body-sm text-gray-400 max-w-xl mx-auto">
              Conversemos sobre tu proceso comercial actual y te mostramos cómo
              este agente SaaS se adapta a tu CRM, a tu industria y a los
              objetivos del próximo trimestre.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function DefaultAgentPage({ agent }: { agent: (typeof agents)[0] }) {
  const IconComponent = iconMap[agent.icon];

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/#agentes"
          className="inline-flex items-center gap-2 text-label-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-4 h-10 rounded-full transition-colors duration-200 -ml-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a agentes
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex items-start gap-6 mb-10">
              <div className="w-[72px] h-[72px] bg-gray-50 rounded-[18px] flex items-center justify-center flex-shrink-0 border border-gray-200/60">
                {IconComponent && (
                  <IconComponent
                    className="w-8 h-8 text-gray-800"
                    strokeWidth={1.4}
                  />
                )}
              </div>
              <div>
                <span className="text-label-md text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                  {agent.category}
                </span>
                <h1 className="text-display-sm text-gray-900 mt-3 tracking-tight">
                  {agent.name}
                </h1>
              </div>
            </div>

            <p className="text-body-lg text-gray-600 leading-[1.8] mb-14">
              {agent.longDescription}
            </p>

            {/* Features */}
            <div className="mb-14">
              <h2 className="text-headline-sm font-medium text-gray-900 mb-6">
                Características
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {agent.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3.5 p-4 rounded-[14px] bg-gray-50/80 border border-gray-100"
                  >
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="w-3 h-3 text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-body-md text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div>
              <h2 className="text-headline-sm font-medium text-gray-900 mb-6">
                Casos de uso
              </h2>
              <div className="space-y-3">
                {agent.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 border border-gray-200/80 rounded-[14px] hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <span className="w-8 h-8 bg-gray-900 text-white text-label-md rounded-[10px] flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-body-lg text-gray-700 pt-0.5">
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Pricing card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price card */}
              <div className="border border-gray-200/80 rounded-[20px] p-8 bg-white shadow-elevation-1">
                <div className="text-center mb-8">
                  <p className="text-body-sm text-gray-500 mb-2">
                    Suscripción mensual
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-display-sm font-medium text-gray-900">
                      ${agent.price}
                    </span>
                    <span className="text-body-lg text-gray-400">/mes</span>
                  </div>
                </div>

                <button className="w-full h-12 bg-gray-900 text-white text-label-lg rounded-full hover:bg-gray-800 hover:shadow-elevation-2 transition-all duration-200 active:scale-[0.98] mb-3">
                  Suscribirme ahora
                </button>
                <button className="w-full h-12 border border-gray-300 text-gray-700 text-label-lg rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-[0.98]">
                  Solicitar demo
                </button>
              </div>

              {/* Benefits */}
              <div className="border border-gray-200/80 rounded-[20px] p-6 bg-gray-50/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock
                      className="w-5 h-5 text-gray-500"
                      strokeWidth={1.5}
                    />
                    <span className="text-body-md text-gray-600">
                      Configuración en 5 minutos
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HeadphonesIcon
                      className="w-5 h-5 text-gray-500"
                      strokeWidth={1.5}
                    />
                    <span className="text-body-md text-gray-600">
                      Soporte prioritario
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield
                      className="w-5 h-5 text-gray-500"
                      strokeWidth={1.5}
                    />
                    <span className="text-body-md text-gray-600">
                      Cancela cuando quieras
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles
                      className="w-5 h-5 text-gray-500"
                      strokeWidth={1.5}
                    />
                    <span className="text-body-md text-gray-600">
                      14 días de prueba gratis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AgentDetail({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id);

  if (!agent) {
    notFound();
  }

  if (agent.id === "asistente-ventas") {
    return <SalesAgentPage agent={agent} />;
  }

  return <DefaultAgentPage agent={agent} />;
}
