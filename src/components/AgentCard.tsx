import Link from "next/link";
import {
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import type { Agent } from "@/data/agents";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
};

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  const IconComponent = iconMap[agent.icon];

  return (
    <Link href={`/agents/${agent.id}`} className="group block">
      <div className="h-full bg-white border border-gray-200/80 rounded-[16px] p-7 hover:shadow-elevation-3 hover:border-gray-300/60 transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)]">
        {/* Icon & Category */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 bg-gray-50 rounded-[14px] flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-200 ease-[cubic-bezier(0.2,0,0,1)]">
            {IconComponent && (
              <IconComponent
                className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-200"
                strokeWidth={1.5}
              />
            )}
          </div>
          <span className="text-label-md text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
            {agent.category}
          </span>
        </div>

        {/* Name - title scale */}
        <h3 className="text-title-lg text-gray-900 mb-2">
          {agent.name}
        </h3>

        {/* Description */}
        <p className="text-body-md text-gray-500 leading-relaxed mb-8 line-clamp-3">
          {agent.description}
        </p>

        {/* CTA */}
        <div className="flex items-center justify-end">
          <span className="text-label-lg text-primary-500 flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
            Ver detalles del agente
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
