import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

export const headingVariants = cva('font-bold tracking-tight text-[var(--color-on-surface)]', {
  variants: {
    size: {
      'display-2xl': 'text-display-lg md:text-display-xl lg:text-display-2xl',
      'display-xl': 'text-display-md md:text-display-lg lg:text-display-xl',
      'display-lg': 'text-display-sm md:text-display-md lg:text-display-lg',
      'display-md': 'text-heading-lg md:text-display-sm lg:text-display-md',
      'display-sm': 'text-heading-md md:text-heading-lg lg:text-display-sm',
      'heading-lg': 'text-heading-md md:text-heading-lg',
      'heading-md': 'text-heading-sm md:text-heading-md',
      'heading-sm': 'text-heading-sm',
    },
  },
  defaultVariants: {
    size: 'display-md',
  },
});

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, as: Tag = 'h2', ...props }, ref) => (
    <Tag ref={ref} className={cn(headingVariants({ size }), className)} {...props} />
  ),
);
Heading.displayName = 'Heading';
