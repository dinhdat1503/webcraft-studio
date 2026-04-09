import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio.data';

/** Portfolio grid section – 3 column grid with hover overlay */
const PortfolioSection: FC = () => {
  return (
    <section id="portfolio" className="section-pad bg-brand-catchie-navy/25">
      <SectionHeader
        tag="Dự Án Tiêu Biểu"
        title={<>Những thiết kế <span className="text-brand-catchie-blue">ấn tượng nhất</span> của chúng tôi</>}
      />

      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="cosmic-surface surface-hover rounded-2xl group cursor-pointer overflow-hidden"
            >
              {/* Image + overlay */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-deep-space/85 flex flex-col justify-center p-8
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-brand-catchie-blue text-white text-xs font-bold
                    uppercase tracking-widest px-3 py-1 rounded mb-3 w-fit">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-white mb-2">
                    {item.shortTitle}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">{item.description}</p>
                  <Link href={item.detailLink || '#contact'} className="text-blue-300 font-bold text-sm hover:text-blue-200 transition-colors">
                    Tìm hiểu thêm →
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-brand-catchie-blue text-xs font-bold uppercase tracking-[0.18em] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-base font-semibold text-white leading-snug">
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
