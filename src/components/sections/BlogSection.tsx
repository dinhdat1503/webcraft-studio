import { type FC } from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { blogData } from '@/data/blog.data';

const BlogSection: FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase
              text-red-600 mb-3 before:content-[''] before:inline-block before:w-5 before:h-0.5 before:bg-red-600">
              Kiến Thức & Blog
            </span>
            <h2 className="font-outfit text-4xl font-black text-gray-900 leading-tight">
              Insights từ chuyên gia<br />thiết kế web
            </h2>
          </div>
          <Button href="#" variant="outline-dark">Xem thêm...</Button>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
          {blogData.map((post) => (
            <div key={post.id}
              className="border-r border-gray-200 last:border-r-0 hover:bg-gray-50 transition-colors duration-300 group">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${post.gradientClass}
                  group-hover:scale-105 transition-transform duration-500`} />
                <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold
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
                <h3 className="font-outfit font-bold text-base text-gray-900 leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-red-600 font-bold text-sm
                    border-b-2 border-transparent hover:border-red-600 hover:gap-2.5
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
  );
};

export default BlogSection;
