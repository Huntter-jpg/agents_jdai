"use client";

import { useState } from "react";
import FeaturedAgent from "@/components/FeaturedAgent";
import CategoryFilter from "@/components/CategoryFilter";
import AgentCard from "@/components/AgentCard";
import { agents } from "@/data/agents";
import { Calendar, MessageCircle } from "lucide-react";

export default function AgentesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredAgents =
    selectedCategory === "Todos"
      ? agents
      : agents.filter((a) => a.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-display-sm sm:text-display-md text-gray-900 tracking-tight">
            Nuestros agentes
            <br />
            <span className="text-primary-500">de inteligencia artificial</span>
          </h1>
          <p className="mt-6 text-body-lg text-gray-500 max-w-2xl mx-auto">
            Explora nuestra biblioteca de agentes diseñados para funciones
            específicas (ventas, soporte, operaciones, finanzas, recursos
            humanos, educación, gobierno y más). Cada agente es una plantilla
            avanzada que personalizamos según tu realidad, tus datos y tus
            sistemas.
          </p>
        </div>
      </section>

      {/* Agente destacado */}
      <FeaturedAgent />

      {/* Catálogo de agentes especialistas */}
      <section id="catalogo" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-display-sm text-gray-900 tracking-tight">
              Agentes especialistas listos
              <br />
              <span className="text-primary-500">para adaptar a tu negocio</span>
            </h2>
          </div>

          <div className="mb-12">
            <CategoryFilter
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body-lg text-gray-400">
                No hay agentes en esta categoría aún.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-display-sm text-gray-900 tracking-tight">
            ¿No encuentras lo que buscas?
            <br />
            <span className="text-primary-500">Creamos agentes a medida</span>
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
        </div>
      </section>
    </>
  );
}
