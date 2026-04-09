export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string | number;
  priceNote: string;
  features: PricingFeature[];
  isFeatured?: boolean;
  badgeText?: string;
  ctaText: string;
}
