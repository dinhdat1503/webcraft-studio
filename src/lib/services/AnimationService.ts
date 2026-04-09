/**
 * AnimationService – Quản lý tập trung các IntersectionObserver
 * Singleton class, dùng trong môi trường browser (client-side only)
 */
export class AnimationService {
  private static instance: AnimationService;
  private observers: Map<string, IntersectionObserver> = new Map();

  private constructor() {}

  public static getInstance(): AnimationService {
    if (!AnimationService.instance) {
      AnimationService.instance = new AnimationService();
    }
    return AnimationService.instance;
  }

  /**
   * Tạo và đăng ký observer cho một nhóm elements
   * @param key       - ID nhóm observer (để quản lý nhiều observer)
   * @param elements  - Danh sách elements cần observe
   * @param onVisible - Callback khi element xuất hiện trong viewport
   * @param options   - IntersectionObserver options
   */
  public observe(
    key: string,
    elements: Element[],
    onVisible: (el: Element) => void,
    options?: IntersectionObserverInit,
  ): void {
    // Hủy observer cũ nếu đã tồn tại với key này
    this.unobserve(key);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      },
    );

    elements.forEach((el) => observer.observe(el));
    this.observers.set(key, observer);
  }

  /**
   * Hủy observer theo key
   */
  public unobserve(key: string): void {
    const existing = this.observers.get(key);
    if (existing) {
      existing.disconnect();
      this.observers.delete(key);
    }
  }

  /**
   * Hủy tất cả observer (dùng khi component unmount)
   */
  public destroy(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
  }
}
