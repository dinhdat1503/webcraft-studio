import { type FC } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio.data';

/** Portfolio grid section – 3 column grid with hover overlay */
const PortfolioSection: FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <SectionHeader
        tag="Dự Án Tiêu Biểu"
        title={<>Những thiết kế <span className="text-red-600">ấn tượng nhất</span> của chúng tôi</>}
      />

      <div className="max-w-[1400px] mx-auto border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="border-b border-r border-gray-200 last:border-r-0
                [&:nth-child(3n)]:border-r-0 group cursor-pointer overflow-hidden"
            >
              {/* Image + overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/85 flex flex-col justify-center p-8
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold
                    uppercase tracking-widest px-3 py-1 rounded mb-3 w-fit">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-xl font-black text-white mb-2">
                    {item.shortTitle}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">{item.description}</p>
                  <a href="#contact" className="text-red-400 font-bold text-sm hover:text-red-300 transition-colors">
                    Tìm hiểu thêm →
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-red-600 text-xs font-bold uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-sm font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button href="#contact" variant="outline-dark">Xem thêm dự án...</Button>
      </div>
    </section>
  );
};

export default PortfolioSection;
