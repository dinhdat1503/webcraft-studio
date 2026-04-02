export * from './portfolio.types';
export * from './pricing.types';
export * from './contact.types';
export * from './blog.types';

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  badgeText?: string;
}

export interface TechItem {
  id: string;
  name: string;
  emoji: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
