import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';
import { MarketingButton } from '@/components/primitives/marketing-button';
import { Badge } from '@/components/primitives/badge';

export const pricingCardVariants = cva(
  'relative flex flex-col rounded-2xl border p-6 lg:p-8',
  {
    variants: {
      highlighted: {
        true: 'border-primary-500 shadow-glow-primary bg-white dark:bg-neutral-900',
        false: 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
      },
    },
    defaultVariants: {
      highlighted: false,
    },
  },
);

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardVariants> {
  name: string;
  description?: string;
  price: React.ReactNode;
  priceNote?: string;
  badge?: string;
  features: PricingFeature[];
  action: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  };
}

export const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      highlighted,
      name,
      description,
      price,
      priceNote,
      badge: badgeText,
      features,
      action,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(pricingCardVariants({ highlighted }), className)}
      {...props}
    >
      {badgeText && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="new">{badgeText}</Badge>
        </div>
      )}

      <div className="mb-6">
        <Heading as="h3" size="heading-lg" className="mb-1">
          {name}
        </Heading>
        {description && (
          <Text size="body-sm" tone="secondary">
            {description}
          </Text>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {typeof price === 'string' ? (
            <span className="text-display-sm font-bold tracking-tight md:text-display-md">
              {price}
            </span>
          ) : (
            price
          )}
        </div>
        {priceNote && (
          <Text size="caption" tone="muted" className="mt-1">
            {priceNote}
          </Text>
        )}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={cn('mt-0.5 text-sm', feature.included ? 'text-primary-500' : 'text-neutral-400')}>
              {feature.included ? '✓' : '—'}
            </span>
            <Text
              as="span"
              size="body-sm"
              tone={feature.included ? 'default' : 'muted'}
            >
              {feature.text}
            </Text>
          </li>
        ))}
      </ul>

      <MarketingButton
        variant={action.variant ?? (highlighted ? 'primary' : 'secondary')}
        href={action.href}
        className="w-full"
      >
        {action.label}
      </MarketingButton>
    </div>
  ),
);
PricingCard.displayName = 'PricingCard';
