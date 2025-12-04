"use client";

import { motion } from "framer-motion";
import { Brain, Network, HeartHandshake, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: Brain,
      title: "Psicopedagogia Clínica",
      description:
        "Avaliação e intervenção especializada em dificuldades de aprendizagem, TDAH e Autismo. Abordagem personalizada para cada criança e adolescente.",
      href: "#psicopedagogia",
    },
    {
      id: 2,
      icon: Network,
      title: "Constelação Familiar",
      description:
        "Trabalho sistêmico para identificar e transformar padrões familiares. Conexão com as raízes e harmonização das relações.",
      href: "#constelacao",
    },
    {
      id: 3,
      icon: HeartHandshake,
      title: "Psicoterapia Individual",
      description:
        "Acompanhamento terapêutico para ansiedade, depressão e autoconhecimento. Espaço seguro para desenvolvimento pessoal.",
      href: "#psicoterapia",
    },
  ];

  return (
    <section id="servicos" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-4">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Abordagens especializadas para seu bem-estar e desenvolvimento
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group"
              >
                <div className="glass-strong rounded-2xl p-8 h-full flex flex-col border border-white/40 hover:border-primary/60 transition-all duration-300 cursor-pointer">
                  {/* Ícone */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon
                        size={32}
                        className="text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-serif font-semibold text-text-main mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Link */}
                  <a
                    href={`https://wa.me/5517997723577?text=Olá! Gostaria de saber mais sobre os atendimentos de ${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link hover:gap-3 transition-all"
                  >
                    Saiba mais
                    <ArrowRight
                      size={18}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

