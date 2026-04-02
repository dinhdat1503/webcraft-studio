import { type FC } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { blogData } from '@/data/blog.data';

const BlogSection: FC = () => {
  return (
    <section id="blog" className="section-pad bg-brand-catchie-navy/20">
      <div className="page-container">
        <SectionHeader
          tag="Kiến Thức & Blog"
          title={<>Insights từ chuyên gia<br />thiết kế web</>}
          light
        />

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogData.map((post) => (
            <div key={post.id}
              className="cosmic-surface surface-hover rounded-2xl overflow-hidden hover:bg-brand-deep-space group">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${post.gradientClass}
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
                <h3 className="font-heading font-semibold text-base md:text-lg text-white leading-snug mb-3">
                  {post.title}
                </h3>
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

        <div className="text-center mt-12">
          <Button href="#" variant="outline-dark">Xem thêm...</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
