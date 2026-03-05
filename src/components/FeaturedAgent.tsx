import {
  TrendingUp,
  Users,
  RefreshCw,
  FileText,
  Image,
  Clock,
  Share2,
  FolderOpen,
  Brain,
  ArrowRight,
  Check,
  Calendar,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const miniBenefits = [
  {
    icon: Users,
    title: "Gestiona leads de principio a fin",
    description:
      "Captura leads desde formularios, chat, redes u otros canales; los califica según reglas de negocio y los asigna al ejecutivo correcto.",
  },
  {
    icon: RefreshCw,
    title: "Integra y ordena tu CRM",
    description:
      "Registra automáticamente contactos, notas, etapas de oportunidad y próximas acciones en tus herramientas de ventas.",
  },
  {
    icon: TrendingUp,
    title: "Acompaña al cliente en todo el ciclo",
    description:
      "Envía correos de seguimiento, recuerda reuniones, comparte propuestas y mantiene viva la relación comercial sin olvidos.",
  },
];

const useCases = [
  "Captura y calificación automática de leads.",
  "Gestión de pipeline y seguimiento de oportunidades.",
  "Comunicaciones outbound y follow-ups personalizados por email.",
  "Recordatorios y coordinación de reuniones con clientes.",
  "Actualización continua de contactos y deals en tu CRM.",
];

const integrations = [
  "Gmail",
  "Outlook",
  "Google Calendar",
  "Calendario de Outlook",
  "HighLevel CRM",
  "AgendaPro",
  "HubSpot CRM",
  "NetHunt CRM",
  "Notion",
  "Google Sheets",
  "Shopify",
  "WooCommerce",
  "Odoo CRM",
];

const capabilities = [
  {
    icon: FileText,
    name: "Lector de documentos",
    description:
      "Lee PDFs, Word, texto plano y código; extrae información relevante, resume y responde preguntas sobre contratos, propuestas, catálogos o bases de conocimiento comerciales.",
  },
  {
    icon: Image,
    name: "Análisis de imágenes",
    description:
      "Interpreta capturas de pantalla, fotografías, gráficos o diagramas; extrae texto y entiende contenido visual para apoyar procesos de ventas y soporte.",
  },
  {
    icon: Clock,
    name: "Fecha y hora inteligente",
    description:
      "Trabaja con horarios, zonas horarias y plazos, ideal para coordinar agendas, enviar recordatorios y respetar SLAs o compromisos comerciales.",
  },
  {
    icon: Share2,
    name: "Compartir archivos",
    description:
      "Genera enlaces seguros para compartir documentos, reportes o materiales generados por el agente con clientes o equipos internos.",
  },
  {
    icon: FolderOpen,
    name: "Gestor de archivos",
    description:
      "Organiza y rastrea los archivos intercambiados durante la interacción, manteniendo un historial claro de propuestas, documentos y entregables.",
  },
  {
    icon: Brain,
    name: "Memoria de contexto",
    description:
      "Recuerda preferencias de clientes, conversaciones pasadas y detalles clave para personalizar cada interacción y aumentar la probabilidad de cierre.",
  },
];

export default function FeaturedAgent() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50/80">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-label-lg text-primary-500 bg-primary-500/10 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            Agente destacado
          </span>
          <h2 className="text-display-sm text-gray-900 tracking-tight">
            Conoce a tu nuevo vendedor digital:
            <br />
            <span className="text-primary-500">
              Agente IA Experto en Ventas
            </span>
          </h2>
          <p className="mt-6 text-body-lg text-gray-500 max-w-2xl mx-auto">
            Este agente especialista es tu asistente de ventas siempre activo: capta, califica y acompaña a tus leads, coordina reuniones y mantiene tu CRM actualizado sin que tu equipo se quede atrapado en tareas administrativas.
          </p>
        </div>

        {/* Mini-beneficios del agente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {miniBenefits.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200/80 rounded-[16px] p-7 hover:shadow-elevation-3 hover:border-gray-300/60 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-[12px] flex items-center justify-center mb-5">
                <item.icon
                  className="w-6 h-6 text-primary-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-title-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-body-md text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Casos de uso */}
        <div className="mb-16">
          <h3 className="text-headline-sm font-medium text-gray-900 mb-6 text-center">
            Casos de uso &mdash; Lo que puedes crear con este agente
          </h3>
          <div className="max-w-2xl mx-auto space-y-3">
            {useCases.map((uc) => (
              <div
                key={uc}
                className="flex items-start gap-3.5 p-4 bg-white rounded-[14px] border border-gray-200/80"
              >
                <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check
                    className="w-3 h-3 text-white"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-body-md text-gray-700">{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integraciones */}
        <div className="mb-16">
          <h3 className="text-headline-sm font-medium text-gray-900 mb-6 text-center">
            Integraciones destacadas del Agente IA de Ventas
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {integrations.map((name) => (
              <span
                key={name}
                className="text-label-lg text-gray-700 bg-white border border-gray-200 px-4 py-2.5 rounded-full hover:border-gray-400 hover:shadow-elevation-1 transition-all duration-200"
              >
                {name}
              </span>
            ))}
            <span className="text-label-lg text-gray-400 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-full">
              + cualquier API
            </span>
          </div>
        </div>

        {/* Capacidades pre-integradas */}
        <div className="mb-16">
          <h3 className="text-headline-sm font-medium text-gray-900 mb-3 text-center">
            Capacidades pre-integradas
          </h3>
          <p className="text-body-md text-gray-500 text-center mb-8 max-w-xl mx-auto">
            Aplican también como demo de lo que pueden hacer otros agentes
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.name}
                className="bg-white border border-gray-200/80 rounded-[14px] p-6 hover:shadow-elevation-2 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-[10px] flex items-center justify-center mb-4 border border-gray-100">
                  <cap.icon
                    className="w-5 h-5 text-gray-700"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-title-md text-gray-900 mb-2">
                  {cap.name}
                </h4>
                <p className="text-body-sm text-gray-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA del agente destacado */}
        <div className="bg-white border border-gray-200/80 rounded-[20px] p-10 text-center shadow-elevation-1">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/agents/asistente-ventas"
              className="inline-flex items-center gap-2 px-8 h-12 bg-primary-500 text-white text-label-lg rounded-full hover:bg-primary-600 hover:shadow-elevation-2 transition-all duration-200 active:scale-[0.98]"
            >
              Probar ahora el Agente de Ventas
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 h-12 border border-primary-500 text-primary-600 text-label-lg rounded-full hover:bg-primary-50 transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              Agendar demo
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
          <p className="text-body-sm text-gray-400 max-w-xl mx-auto">
            Chatea en vivo con nuestro Agente IA Experto en Ventas y comprueba cómo puede captar, calificar y agendar reuniones para tu equipo comercial.
          </p>
        </div>
      </div>
    </section>
  );
}
