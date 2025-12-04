"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 pb-28 relative z-10 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-4 max-w-full">
        {/* Container Principal com Glassmorphism Forte */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto glass-strong rounded-[3rem] overflow-hidden shadow-[0_20px_60px_0_rgba(166,123,91,0.15)]"
        >
          <div className="grid md:grid-cols-2">
            {/* Coluna 1 - Texto & Ação */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
              {/* Título */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main leading-tight">
                  Pronta para iniciar sua{" "}
                  <span className="text-primary">jornada?</span>
                </h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  Agende sua consulta e dê o primeiro passo em direção ao seu
                  bem-estar. Atendimento presencial em Santa Adélia e online
                  para todo o Brasil.
                </p>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Botão Primary - WhatsApp */}
                <motion.a
                  href="https://wa.me/5517999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 glass-medium rounded-2xl px-6 py-4 flex items-center justify-center gap-3 group hover:glass-strong transition-all"
                >
                  <MessageCircle
                    size={22}
                    className="text-primary group-hover:scale-110 transition-transform"
                    strokeWidth={2}
                  />
                  <span className="font-semibold text-text-main">
                    Agendar Sessão
                  </span>
                </motion.a>

                {/* Botão Outline - Google Maps */}
                <motion.a
                  href="https://maps.google.com/?q=Rua+Cel.+Relíquias+Guimarães,+72+-+Vila+Toninho,+Santa+Adélia+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 rounded-2xl px-6 py-4 flex items-center justify-center gap-3 border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all group"
                >
                  <MapPin
                    size={22}
                    className="text-primary group-hover:scale-110 transition-transform"
                    strokeWidth={2}
                  />
                  <span className="font-semibold text-text-main">
                    Ver no Google Maps
                  </span>
                </motion.a>
              </div>

              {/* Dados de Contato */}
              <div className="space-y-2 pt-4 border-t border-white/20">
                <div className="flex items-start gap-3 text-sm text-text-muted">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <p>
                    Rua Cel. Relíquias Guimarães, 72 - Vila Toninho, Santa Adélia
                    - SP
                  </p>
                </div>
                <div className="flex items-start gap-3 text-sm text-text-muted">
                  <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <p>contato@crerser.com.br</p>
                </div>
              </div>
            </div>

            {/* Coluna 2 - Imagem Integrada */}
            <div className="relative h-full min-h-[400px] md:min-h-[600px]">
              {/* Gradiente para fundir com o vidro */}
              <div className="absolute inset-0 bg-gradient-to-l from-white/40 via-transparent to-transparent z-10 pointer-events-none" />
              
              <Image
                src="/dralaides-foto1.jpg"
                alt="Dra. Alaídes Nunes Franco"
                fill
                className="object-cover max-w-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

