"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto - Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Elemento gráfico orgânico atrás (círculo com cor aurora-pink) */}
            <div className="absolute -z-10 left-0 top-0 w-96 h-96 rounded-full bg-aurora-pink/20 blur-3xl max-w-full" />
            <div className="absolute -z-10 right-0 bottom-0 w-80 h-80 rounded-full bg-primary-light/15 blur-3xl max-w-full" />

            {/* Container da foto com Organic Glass */}
            <div className="relative overflow-hidden rounded-[3rem] rounded-tl-[6rem] rounded-br-[4rem] border border-white/50 shadow-[0_20px_60px_0_rgba(166,123,91,0.15)] bg-white/10 backdrop-blur-sm">
              <Image
                src="/dralaides-foto3.jpg"
                alt="Dra. Alaídes Nunes Franco"
                width={600}
                height={800}
                className="w-full h-auto object-cover max-w-full"
                priority
              />
            </div>
          </motion.div>

          {/* Texto - Direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm font-semibold tracking-wider text-primary uppercase"
            >
              Conheça a Profissional
            </motion.p>

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-main leading-tight"
            >
              Uma abordagem humana para suas{" "}
              <span className="text-primary">questões mais profundas</span>.
            </motion.h2>

            {/* Parágrafo 1 - Formação */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-text-muted leading-relaxed"
            >
              Com formação sólida e registro no CRP 06/144503, atuo com
              compromisso e excelência no cuidado psicológico. Minha trajetória
              é marcada pela busca constante de conhecimento e atualização nas
              melhores práticas terapêuticas.
            </motion.p>

            {/* Parágrafo 2 - Acolhimento */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-text-muted leading-relaxed"
            >
              Acredito no poder de ouvir sem julgar e criar um ambiente seguro
              onde você pode explorar suas emoções, desafios e potencialidades.
              Cada sessão é um espaço de acolhimento e transformação.
            </motion.p>

            {/* Assinatura */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4"
            >
              <p className="text-3xl font-handwriting text-primary">
                Alaídes Nunes Franco
              </p>
            </motion.div>

            {/* Botão Biografia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pt-2"
            >
              <a
                href="#biografia"
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium group"
              >
                <FileText size={16} className="group-hover:rotate-12 transition-transform" />
                Ler biografia completa
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

