"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Bot,
  Brain,
  Cpu,
  Workflow,
  Zap,
  ArrowRight,
  Code,
  Github,
  Server,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const features = [
  {
    title: "IA Conversacional",
    description:
      "Implementación de interfaces de lenguaje natural que entienden el contexto y generan respuestas relevantes para interacciones humano-máquina más naturales.",
    icon: <Bot className="w-10 h-10 text-indigo-500/80" />,
    delay: 0.1,
  },
  {
    title: "Agentes Autónomos",
    description:
      "Desarrollo de sistemas inteligentes que operan de forma independiente, toman decisiones basadas en datos y ejecutan tareas complejas sin intervención humana.",
    icon: <Brain className="w-10 h-10 text-violet-500/80" />,
    delay: 0.2,
  },
  {
    title: "Automatización de Procesos",
    description:
      "Transformación de flujos de trabajo manuales en procesos automatizados que eliminan errores, reducen costos y liberan recursos humanos para tareas de mayor valor.",
    icon: <Workflow className="w-10 h-10 text-rose-500/80" />,
    delay: 0.3,
  },
  {
    title: "Integración de Sistemas",
    description:
      "Conexión perfecta entre diferentes plataformas y herramientas para crear ecosistemas tecnológicos coherentes que comparten datos e inteligencia.",
    icon: <Cpu className="w-10 h-10 text-amber-500/80" />,
    delay: 0.4,
  },
  {
    title: "Soluciones Personalizadas",
    description:
      "Desarrollo de aplicaciones y herramientas adaptadas a las necesidades específicas de cada negocio, aprovechando lo último en inteligencia artificial.",
    icon: <Code className="w-10 h-10 text-emerald-500/80" />,
    delay: 0.5,
  },
  {
    title: "Infraestructura Escalable",
    description:
      "Implementación de arquitecturas robustas que crecen con su negocio, soportando operaciones cada vez más complejas sin sacrificar rendimiento.",
    icon: <Server className="w-10 h-10 text-cyan-500/80" />,
    delay: 0.6,
  },
];

const caseStudies = [
  {
    title: "Asistente Virtual para Atención al Cliente",
    description:
      "Implementamos un agente de IA capaz de resolver el 85% de las consultas de los clientes sin intervención humana, reduciendo tiempos de espera y mejorando la satisfacción.",
    stats: [
      "85% de resolución automática",
      "24/7 disponibilidad",
      "-40% en costos operativos",
    ],
    category: "Retail",
  },
  {
    title: "Automatización de Procesos Financieros",
    description:
      "Desarrollamos un sistema que automatiza la conciliación bancaria, procesamiento de facturas y detección de fraudes, reduciendo errores y acelerando ciclos operativos.",
    stats: ["99.8% precisión", "70% menos tiempo", "ROI en 6 meses"],
    category: "Finanzas",
  },
  {
    title: "Sistema Predictivo de Mantenimiento",
    description:
      "Creamos una solución de IA que monitorea equipos industriales y predice fallos antes de que ocurran, minimizando tiempo de inactividad y optimizando recursos de mantenimiento.",
    stats: [
      "92% predicción exacta",
      "-35% costos mantenimiento",
      "+18% vida útil equipos",
    ],
    category: "Manufactura",
  },
];

export default function AISection() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <section
      id="AiSection"
      className="py-24 px-8 backdrop-blur-sm mx-4 my-8 border border-white/10 rounded-xl geo-card
    "
    >
      {/* Gradient background */}
      <div className=""></div>

      {/* Circuit board pattern background - visible primarily in dark mode */}
      <div className=""></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-600 dark:from-indigo-400 dark:via-violet-400 dark:to-rose-400">
                IA, Agentes y Automatización
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Transforme su negocio con soluciones avanzadas de inteligencia
              artificial y automatización que optimizan procesos, reducen costos
              y generan nuevas oportunidades.
            </p>
          </motion.div>

          {/* Tab navigation */}
          <div className="flex justify-center mt-10 mb-12 border-b border-foreground/10">
            <button
              onClick={() => setActiveTab("features")}
              className={cn(
                "px-6 py-3 text-sm font-medium transition-all",
                activeTab === "features"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/50 hover:text-foreground/80"
              )}
            >
              Capacidades
            </button>
            <button
              onClick={() => setActiveTab("case-studies")}
              className={cn(
                "px-6 py-3 text-sm font-medium transition-all",
                activeTab === "case-studies"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/50 hover:text-foreground/80"
              )}
            >
              Casos de Éxito
            </button>
          </div>
        </div>

        {/* Features Grid */}
        {activeTab === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
              >
                <Card className="p-6 h-full border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="p-4 rounded-full bg-background inline-flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Case Studies */}
        {activeTab === "case-studies" && (
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-foreground/[0.02] rounded-xl border border-foreground/10 overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-3 p-8">
                    <div className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary inline-block mb-4">
                      {study.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {study.description}
                    </p>
                    <Button variant="outline" className="group">
                      Ver caso detallado
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <div className="md:col-span-2 bg-foreground/[0.03] p-8 flex flex-col justify-center">
                    <h4 className="text-sm font-medium text-foreground/60 mb-4">
                      RESULTADOS CLAVE
                    </h4>
                    <div className="space-y-3">
                      {study.stats.map((stat, i) => (
                        <div key={i} className="flex items-center">
                          <Zap className="text-primary mr-2 h-5 w-5" />
                          <span className="font-medium">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="p-8 md:p-12 rounded-xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-rose-500/10 border border-foreground/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Transforme su negocio con IA avanzada
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Descubra cómo nuestras soluciones de inteligencia artificial y
              automatización pueden impulsar su negocio hacia el futuro.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar consulta gratuita
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
