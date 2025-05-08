"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
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

// Features with translations
const getFeatures = (isSpanish: boolean) => [
  {
    title: isSpanish ? "IA Conversacional" : "Conversational AI",
    description: isSpanish
      ? "Implementación de interfaces de lenguaje natural que entienden el contexto y generan respuestas relevantes para interacciones humano-máquina más naturales."
      : "Implementation of natural language interfaces that understand context and generate relevant responses for more natural human-machine interactions.",
    icon: <Bot className="w-10 h-10 text-indigo-500/80" />,
    delay: 0.1,
  },
  {
    title: isSpanish ? "Agentes Autónomos" : "Autonomous Agents",
    description: isSpanish
      ? "Desarrollo de sistemas inteligentes que operan de forma independiente, toman decisiones basadas en datos y ejecutan tareas complejas sin intervención humana."
      : "Development of intelligent systems that operate independently, make data-driven decisions, and execute complex tasks without human intervention.",
    icon: <Brain className="w-10 h-10 text-violet-500/80" />,
    delay: 0.2,
  },
  {
    title: isSpanish ? "Automatización de Procesos" : "Process Automation",
    description: isSpanish
      ? "Transformación de flujos de trabajo manuales en procesos automatizados que eliminan errores, reducen costos y liberan recursos humanos para tareas de mayor valor."
      : "Transformation of manual workflows into automated processes that eliminate errors, reduce costs, and free up human resources for higher-value tasks.",
    icon: <Workflow className="w-10 h-10 text-rose-500/80" />,
    delay: 0.3,
  },
  {
    title: isSpanish ? "Integración de Sistemas" : "System Integration",
    description: isSpanish
      ? "Conexión perfecta entre diferentes plataformas y herramientas para crear ecosistemas tecnológicos coherentes que comparten datos e inteligencia."
      : "Seamless connection between different platforms and tools to create coherent technology ecosystems that share data and intelligence.",
    icon: <Cpu className="w-10 h-10 text-amber-500/80" />,
    delay: 0.4,
  },
  {
    title: isSpanish ? "Soluciones Personalizadas" : "Custom Solutions",
    description: isSpanish
      ? "Desarrollo de aplicaciones y herramientas adaptadas a las necesidades específicas de cada negocio, aprovechando lo último en inteligencia artificial."
      : "Development of applications and tools tailored to the specific needs of each business, leveraging the latest in artificial intelligence.",
    icon: <Code className="w-10 h-10 text-emerald-500/80" />,
    delay: 0.5,
  },
  {
    title: isSpanish ? "Infraestructura Escalable" : "Scalable Infrastructure",
    description: isSpanish
      ? "Implementación de arquitecturas robustas que crecen con su negocio, soportando operaciones cada vez más complejas sin sacrificar rendimiento."
      : "Implementation of robust architectures that grow with your business, supporting increasingly complex operations without sacrificing performance.",
    icon: <Server className="w-10 h-10 text-cyan-500/80" />,
    delay: 0.6,
  },
];

// Case studies with translations
const getCaseStudies = (isSpanish: boolean) => [
  {
    title: isSpanish 
      ? "Asistente Virtual para Atención al Cliente" 
      : "Virtual Assistant for Customer Service",
    description: isSpanish
      ? "Implementamos un agente de IA capaz de resolver el 85% de las consultas de los clientes sin intervención humana, reduciendo tiempos de espera y mejorando la satisfacción."
      : "We implemented an AI agent capable of resolving 85% of customer queries without human intervention, reducing wait times and improving satisfaction.",
    stats: isSpanish
      ? [
          "85% de resolución automática",
          "24/7 disponibilidad",
          "-40% en costos operativos",
        ]
      : [
          "85% automatic resolution",
          "24/7 availability",
          "-40% in operational costs",
        ],
    category: isSpanish ? "Retail" : "Retail",
  },
  {
    title: isSpanish 
      ? "Automatización de Procesos Financieros" 
      : "Financial Process Automation",
    description: isSpanish
      ? "Desarrollamos un sistema que automatiza la conciliación bancaria, procesamiento de facturas y detección de fraudes, reduciendo errores y acelerando ciclos operativos."
      : "We developed a system that automates bank reconciliation, invoice processing, and fraud detection, reducing errors and accelerating operational cycles.",
    stats: isSpanish 
      ? ["99.8% precisión", "70% menos tiempo", "ROI en 6 meses"] 
      : ["99.8% accuracy", "70% less time", "ROI in 6 months"],
    category: isSpanish ? "Finanzas" : "Finance",
  },
  {
    title: isSpanish 
      ? "Sistema Predictivo de Mantenimiento" 
      : "Predictive Maintenance System",
    description: isSpanish
      ? "Creamos una solución de IA que monitorea equipos industriales y predice fallos antes de que ocurran, minimizando tiempo de inactividad y optimizando recursos de mantenimiento."
      : "We created an AI solution that monitors industrial equipment and predicts failures before they occur, minimizing downtime and optimizing maintenance resources.",
    stats: isSpanish
      ? [
          "92% predicción exacta",
          "-35% costos mantenimiento",
          "+18% vida útil equipos",
        ]
      : [
          "92% accurate prediction",
          "-35% maintenance costs",
          "+18% equipment lifespan",
        ],
    category: isSpanish ? "Manufactura" : "Manufacturing",
  },
];

export default function AISection() {
  const [activeTab, setActiveTab] = useState("features");
  const pathname = usePathname();
  const isSpanish = pathname?.includes("/es");
  
  // Get translated data
  const features = getFeatures(isSpanish);
  const caseStudies = getCaseStudies(isSpanish);

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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d9a27c] via-[#b57a5a] to-[#e0b295] dark:from-[#c88c6a] dark:via-[#a96c4f] dark:to-[#dba580]">
                {isSpanish ? "IA, Agentes y Automatización" : "AI, Agents and Automation"}
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {isSpanish
                ? "Transforme su negocio con soluciones avanzadas de inteligencia artificial y automatización que optimizan procesos, reducen costos y generan nuevas oportunidades."
                : "Transform your business with advanced artificial intelligence and automation solutions that optimize processes, reduce costs, and generate new opportunities."}
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
              {isSpanish ? "Capacidades" : "Capabilities"}
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
              {isSpanish ? "Casos de Éxito" : "Success Stories"}
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
                      {isSpanish ? "Ver caso detallado" : "View detailed case"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <div className="md:col-span-2 bg-foreground/[0.03] p-8 flex flex-col justify-center">
                    <h4 className="text-sm font-medium text-foreground/60 mb-4">
                      {isSpanish ? "RESULTADOS CLAVE" : "KEY RESULTS"}
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
              {isSpanish 
                ? "Transforme su negocio con IA avanzada" 
                : "Transform your business with advanced AI"}
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              {isSpanish
                ? "Descubra cómo nuestras soluciones de inteligencia artificial y automatización pueden impulsar su negocio hacia el futuro."
                : "Discover how our artificial intelligence and automation solutions can propel your business into the future."}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {isSpanish 
                ? "Solicitar consulta gratuita" 
                : "Request free consultation"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
