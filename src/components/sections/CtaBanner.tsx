import { type FC } from 'react';
import Button from '@/components/ui/Button';

const CtaBanner: FC = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0505] to-red-900" />
      <div className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.015) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-outfit font-black text-4xl md:text-5xl text-white leading-tight mb-5">
          Bạn đã sẵn sàng khởi động<br />dự án của mình ngay hôm nay chưa?
        </h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Hãy để chúng tôi biến ý tưởng của bạn thành một website ấn tượng,
          hiệu quả và mang lại doanh thu thực sự.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="#contact" size="lg">Liên hệ ngay hôm nay</Button>
          <Button href="tel:0901234567" variant="outline-white" size="lg">
            📞 090 123 4567
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
