"use client";

const MapSection = () => {
  // URL do Google Maps embed para o endereço correto
  const address = "Rua Cel. Relíquias Guimarães, 72 - Vila Toninho, Santa Adélia - SP";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section className="w-full h-[450px] relative z-10 overflow-hidden">
      <div className="w-full h-full relative">
        {/* Iframe do Google Maps */}
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(100%) invert(0%) sepia(20%) contrast(1.2) opacity(0.9)",
            pointerEvents: "auto",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Clínica Crer & Ser"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default MapSection;

