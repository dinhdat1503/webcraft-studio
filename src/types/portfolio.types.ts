export interface PortfolioItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  detailLink?: string;
}

export interface PortfolioFilter {
  category?: string;
  limit?: number;
}
