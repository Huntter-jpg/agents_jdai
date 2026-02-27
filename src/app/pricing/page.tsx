import {
  Check,
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { agents } from "@/data/agents";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
};

export default function PricingPage() {
  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-display-md sm:text-display-lg text-gray-900 tracking-tight">
            Precios simples
            <br />
            <span className="text-gray-400">y transparentes</span>
          </h1>
          <p className="mt-6 text-body-lg text-gray-500 max-w-lg mx-auto">
            Cada agente tiene su propia suscripcion mensual. Contrata solo los
            que necesitas, cancela cuando quieras.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {agents.map((agent) => {
            const IconComponent = iconMap[agent.icon];
            return (
              <div
                key={agent.id}
                className="border border-gray-200/80 rounded-[20px] p-7 bg-white hover:shadow-elevation-3 hover:border-gray-300/60 transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)] flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-gray-50 rounded-[12px] flex items-center justify-center border border-gray-100">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-title-md text-gray-900">
                      {agent.name}
                    </h3>
                    <span className="text-label-md text-gray-400">
                      {agent.category}
                    </span>
                  </div>
                </div>

                <p className="text-body-md text-gray-500 leading-relaxed mb-6 flex-1">
                  {agent.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-headline-lg font-medium text-gray-900">
                      ${agent.price}
                    </span>
                    <span className="text-body-md text-gray-400">/mes</span>
                  </div>
                </div>

                <Link
                  href={`/agents/${agent.id}`}
                  className="flex items-center justify-center w-full h-12 bg-gray-900 text-white text-label-lg rounded-full hover:bg-gray-800 hover:shadow-elevation-2 transition-all duration-200 active:scale-[0.98] mb-6"
                >
                  Comenzar prueba gratis
                </Link>

                <ul className="space-y-3">
                  {agent.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-body-md text-gray-600"
                    >
                      <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gray-700" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-display-sm text-gray-900 text-center mb-12 tracking-tight">
            Preguntas frecuentes
          </h2>
          <div className="space-y-0">
            {[
              {
                q: "Puedo probar los agentes antes de pagar?",
                a: "Si, todos nuestros agentes incluyen 14 dias de prueba gratuita. No necesitas tarjeta de credito para comenzar.",
              },
              {
                q: "Puedo cancelar en cualquier momento?",
                a: "Absolutamente. Sin contratos de permanencia. Cancela tu suscripcion cuando quieras y no se te cobrara el siguiente mes.",
              },
              {
                q: "Hay descuentos por contratar multiples agentes?",
                a: "Si, ofrecemos descuentos por volumen. Contacta a nuestro equipo de ventas para obtener un plan personalizado.",
              },
              {
                q: "Que pasa si necesito un agente personalizado?",
                a: "Podemos crear agentes a medida para tu negocio. Contactanos y disenaremos una solucion que se adapte a tus necesidades especificas.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="py-7 border-b border-gray-200/80 last:border-b-0"
              >
                <h3 className="text-title-md text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-body-md text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
