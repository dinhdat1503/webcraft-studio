import type { Metadata } from 'next';
import Link from 'next/link';
import { blogData } from '@/data/blog.data';

export const metadata: Metadata = {
  title: 'Blog – Kiến Thức & Tin Tức Thiết Kế Web | CATCHIE',
  description:
    'Khám phá các bài viết chuyên sâu về thiết kế website, SEO, marketing online và xu hướng công nghệ mới nhất từ đội ngũ chuyên gia CATCHIE.',
  keywords: [
    'blog thiết kế web',
    'kiến thức website',
    'SEO',
    'marketing online',
    'CATCHIE blog',
  ],
  openGraph: {
    title: 'Blog – Kiến Thức & Tin Tức Thiết Kế Web | CATCHIE',
    description:
      'Bài viết chuyên sâu về thiết kế web, SEO, e-commerce và xu hướng công nghệ từ CATCHIE.',
    type: 'website',
    locale: 'vi_VN',
  },
};

/** Trang Blog độc lập */
export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-space via-brand-catchie-navy/30 to-brand-deep-space" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-catchie-blue/6 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-blue bg-grid opacity-20" />

        <div className="page-container relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-brand-catchie-blue transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-catchie-blue font-medium">Blog</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
              before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
              Kiến Thức & Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Insights từ chuyên gia{' '}
              <span className="text-brand-catchie-blue">thiết kế web</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Chia sẻ kiến thức chuyên sâu về thiết kế website, SEO, e-commerce
              và xu hướng công nghệ mới nhất từ đội ngũ CATCHIE.
            </p>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section-pad bg-brand-catchie-navy/20">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((post) => (
              <div key={post.id}
                className="cosmic-surface surface-hover rounded-2xl overflow-hidden hover:bg-brand-deep-space group">
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <div className={`h-52 bg-gradient-to-br ${post.gradientClass}
                    group-hover:scale-105 transition-transform duration-500`} />
                  <span className="absolute top-4 left-4 bg-brand-catchie-blue text-white text-xs font-bold
                    uppercase tracking-widest px-3 py-1 rounded">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex gap-2 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-heading font-semibold text-lg text-white leading-snug mb-3 group-hover:text-brand-catchie-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-brand-catchie-blue font-bold text-sm
                      border-b-2 border-transparent hover:border-brand-catchie-blue hover:gap-2.5
                      transition-all duration-300"
                  >
                    Đọc tiếp →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
