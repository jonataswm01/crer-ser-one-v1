"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "O acolhimento da Dra. Alaídes é único. Me sinto ouvida e compreendida em cada sessão. A transformação que vivi aqui foi profunda e significativa.",
      author: "Maria S.",
      rating: 5,
    },
    {
      id: 2,
      text: "A clareza nas explicações e a forma como ela conduz o processo terapêutico me ajudou a entender melhor meus padrões e encontrar novos caminhos.",
      author: "João P.",
      rating: 5,
    },
    {
      id: 3,
      text: "Encontrei um ambiente seguro para explorar minhas questões mais profundas. A abordagem humanizada faz toda a diferença no processo de cura.",
      author: "Ana L.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-4">
        {/* Título Centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-4">
            Histórias de quem{" "}
            <span className="text-primary">voltou a florescer</span>
          </h2>
          <p className="text-lg text-text-muted mt-4">
            150+ pacientes atendidos • 5 Estrelas no Google
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 h-full shadow-[0_4px_20px_0_rgba(166,123,91,0.08)] border border-white/40">
                {/* Aspas decorativas no fundo */}
                <Quote
                  size={120}
                  className="absolute top-4 right-4 text-primary/10 pointer-events-none"
                  strokeWidth={0.5}
                />

                {/* Estrelas */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-accent fill-accent"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Texto do depoimento */}
                <p className="text-text-main leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Autor */}
                <p className="text-sm font-semibold text-text-muted relative z-10">
                  — {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link para Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://g.page/r/..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium group"
          >
            Ver todas as 154 avaliações no Google
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

