"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <footer className="relative z-10 bg-[#2C2420] text-white">
      <div className="container mx-auto px-6 md:px-4 py-16">
        {/* Grid de 4 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1 - Identidade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-serif font-semibold mb-4 text-white">
              Crer & Ser
            </h3>
            <p className="text-white/80 leading-relaxed text-sm">
              Psicologia de alto padrão com acolhimento e excelência. 
              Transformando vidas através de uma abordagem terapêutica 
              personalizada e humanizada.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://instagram.com/..."
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Instagram
                    size={18}
                    className="text-white group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                </div>
              </a>
              <a
                href="https://wa.me/5517999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="WhatsApp"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <MessageCircle
                    size={18}
                    className="text-white group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Col 2 - Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-serif font-semibold text-xl mb-6 text-[#D4A373] uppercase tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative group inline-block text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4A373] group-hover:w-full transition-all duration-300 ease-out" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 - Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-serif font-semibold text-xl mb-6 text-[#D4A373] uppercase tracking-wide">
              Contato
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="text-[#D4A373] mt-0.5 flex-shrink-0" />
                <span>
                  Rua Cel. Relíquias Guimarães, 72<br />
                  Vila Toninho, Santa Adélia - SP
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone size={18} className="text-[#D4A373] flex-shrink-0" />
                <a
                  href="https://wa.me/5517999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-block hover:text-white transition-colors"
                >
                  (17) 99999-9999
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4A373] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail size={18} className="text-[#D4A373] flex-shrink-0" />
                <a
                  href="mailto:contato@crerser.com.br"
                  className="relative group inline-block hover:text-white transition-colors"
                >
                  contato@crerser.com.br
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4A373] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Col 4 - Horário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-serif font-semibold text-xl mb-6 text-[#D4A373] uppercase tracking-wide">
              Horário
            </h4>
            <div className="flex items-start gap-3 text-sm text-white/80">
              <Clock size={18} className="text-[#D4A373] mt-0.5 flex-shrink-0" />
              <div>
                <p className="mb-1">Segunda a Sexta</p>
                <p>08h às 19h</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Linha Separadora e Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            {/* Copyright */}
            <p>
              © 2024 Clínica Crer & Ser. Todos os direitos reservados. CRP 06/144503
            </p>

            {/* Créditos */}
            <p>
              Desenvolvido por{" "}
              <a
                href="#"
                className="relative group inline-block text-white hover:text-[#D4A373] transition-colors"
              >
                Jonatas Mendes
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4A373] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


