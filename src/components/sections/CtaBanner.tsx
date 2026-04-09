import { type FC } from 'react';
import Button from '@/components/ui/Button';

const CtaBanner: FC = () => {
  return (
    <section className="relative section-pad overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-catchie-navy via-brand-deep-space to-brand-catchie-blue/20" />
      <div className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(93,173,226,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center cosmic-surface rounded-3xl py-10 md:py-14">
        <h2 className="font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-5">
          Bạn đã sẵn sàng khởi động<br />dự án của mình ngay hôm nay chưa?
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
          Hãy để chúng tôi biến ý tưởng của bạn thành một website ấn tượng,
          hiệu quả và mang lại doanh thu thực sự.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="https://zalo.me/0971692675" size="lg">
            💬 Liên hệ ngay hôm nay
          </Button>
          <Button href="tel:0971692675" variant="outline-white" size="lg">
            📞 0971 69 2675
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
