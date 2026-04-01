import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

export const textVariants = cva('', {
  variants: {
    size: {
      'body-lg': 'text-body-lg',
      'body-md': 'text-body-md',
      'body-sm': 'text-body-sm',
      caption: 'text-caption',
      overline: 'inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-body-sm font-medium tracking-wide text-primary-600 dark:bg-primary-400/10 dark:text-primary-400',
    },
    tone: {
      default: 'text-neutral-900 dark:text-neutral-50',
      secondary: 'text-neutral-600 dark:text-neutral-400',
      muted: 'text-neutral-500 dark:text-neutral-500',
      brand: 'text-primary-500',
      inherit: '',
    },
  },
  defaultVariants: {
    size: 'body-md',
    tone: 'default',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, tone, as: Tag = 'p', ...props }, ref) => (
    <Tag ref={ref} className={clsx(textVariants({ size, tone }), className)} {...props} />
  ),
);
Text.displayName = 'Text';
