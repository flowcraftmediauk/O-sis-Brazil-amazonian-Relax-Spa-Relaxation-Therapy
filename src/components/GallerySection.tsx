import React from 'react';
import { Camera, AlertCircle } from 'lucide-react';
import heroImg from '../assets/images/oasis_spa_hero_1793384039896.jpg';
import stonesImg from '../assets/images/oasis_hot_stones_1793384054843.jpg';
import massageImg from '../assets/images/oasis_massage_serene_1793384069562.jpg';

export const GallerySection: React.FC = () => {
  const images = [
    {
      url: heroImg,
      title: 'Espaço de Tratamento e Descanso',
      caption: 'Ambiente silencioso, acolhedor e preparado para massagens restauradoras',
    },
    {
      url: stonesImg,
      title: 'Elementos Térmicos e Botânicos',
      caption: 'Pedras vulcânicas de basalto, alfazema e velas aromáticas para massagem',
    },
    {
      url: massageImg,
      title: 'Pormenores de Serenidade',
      caption: 'Texturas naturais, madeira aconchegante e iluminação suave e relaxante',
    },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F4EFEB]/40 border-t border-[#E8DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B68D5D] font-medium">
            Ambiente Visual
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#27211D]">
            O Refúgio de Bem-Estar
          </h2>
          <p className="text-sm text-[#736960] font-light leading-relaxed">
            Uma pré-visualização estética que traduz o calor, a serenidade, as fibras naturais e a paz planeadas para o conceito da marca em Faro.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2] border border-[#DFCFC1] rounded-full text-[11px] text-[#736960]">
            <Camera className="w-3.5 h-3.5 text-[#B68D5D]" />
            <span>
              Inspiração estética — Fotografias oficiais do espaço serão fornecidas pelo cliente
            </span>
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="group bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#E8DDD2] shadow-sm flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#EFE8DE]">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 border-t border-[#E8DDD2]">
                <h4 className="font-serif text-lg font-medium text-[#27211D]">
                  {img.title}
                </h4>
                <p className="text-xs text-[#736960] mt-1 font-light">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
