"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 pb-12 overflow-x-hidden lg:h-[85vh]">
      <div className="container mx-auto px-6 md:px-4 lg:px-16 max-w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 lg:h-full">
          {/* Texto - Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-1 lg:order-1 lg:w-1/2 flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-serif font-bold text-text-main leading-tight"
            >
              Psicologia de{" "}
              <span className="text-primary">Alto Padrão</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl"
            >
              Cuidado especializado com excelência e humanização. 
              Transformamos vidas através de uma abordagem terapêutica 
              personalizada e acolhedora.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-4 pt-4"
            >
              <motion.a
                href="#contato"
                className="w-full lg:w-auto glass-medium px-8 py-4 rounded-full text-text-main font-semibold flex items-center justify-center gap-2 hover:glass-strong transition-all group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Agende sua Consulta
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </motion.a>

              <motion.a
                href="#sobre"
                className="w-full lg:w-auto px-8 py-4 rounded-full text-text-main font-semibold border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Mais
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Imagem - Direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative w-full order-2 lg:order-2 lg:w-1/2 lg:h-full lg:max-h-[650px]"
          >
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-tr-[5rem] lg:rounded-bl-[3rem] border border-white/50 shadow-[0_20px_60px_0_rgba(166,123,91,0.15)] bg-white/10 backdrop-blur-sm h-full">
              <Image
                src="/dralaides-foto2.jpg"
                alt="Dra. Laides - Psicóloga"
                width={600}
                height={800}
                className="w-full h-[400px] lg:h-full lg:max-h-[650px] object-cover object-top max-w-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

