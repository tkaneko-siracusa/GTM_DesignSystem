/**
 * @polastack/gtm-design-system
 * Marketing components and design tokens for Polastack GTM
 */

// Utilities
export { cn } from './lib/cn';

// Tokens (re-export for convenience)
export {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  spacing,
  sectionSpacing,
  containerWidth,
  gradients,
  shadows,
  radii,
  duration,
  easing,
  zIndex,
  breakpoints,
} from './tokens';
export type { ColorScale, FontSize, FontWeight, GradientName, Breakpoint } from './tokens';

// Primitives - Layout
export { Container, containerVariants, type ContainerProps } from './components/primitives/container';
export { Section, sectionVariants, type SectionProps } from './components/primitives/section';
export { Grid, gridVariants, type GridProps } from './components/primitives/grid';

// Primitives - Typography
export { Heading, headingVariants, type HeadingProps } from './components/primitives/heading';
export { Text, textVariants, type TextProps } from './components/primitives/text';
export { GradientText, gradientTextVariants, type GradientTextProps } from './components/primitives/gradient-text';

// Primitives - Interactive
export { MarketingButton, marketingButtonVariants, type MarketingButtonProps } from './components/primitives/marketing-button';
export { Link, linkVariants, type LinkProps } from './components/primitives/link';

// Primitives - Display
export { Logo, type LogoProps } from './components/primitives/logo';
export { Badge, badgeVariants, type BadgeProps } from './components/primitives/badge';
export { Divider, dividerVariants, type DividerProps } from './components/primitives/divider';
export { AnimatedCounter, type AnimatedCounterProps } from './components/primitives/animated-counter';

// Sections
export { HeroSection, heroSectionVariants, type HeroSectionProps, type HeroAction } from './components/sections/hero-section';
export { FeatureGrid, type FeatureGridProps, type FeatureItem } from './components/sections/feature-grid';
export { PricingTable, type PricingTableProps } from './components/sections/pricing';
export { PricingCard, pricingCardVariants, type PricingCardProps, type PricingFeature } from './components/sections/pricing';
export { CTASection, ctaSectionVariants, type CTASectionProps, type CTAAction } from './components/sections/cta-section';
export { FAQSection, type FAQSectionProps, type FAQItem } from './components/sections/faq-section';
