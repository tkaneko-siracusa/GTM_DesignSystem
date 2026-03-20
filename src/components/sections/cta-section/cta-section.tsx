import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { Section } from '@/components/primitives/section';
import { Container } from '@/components/primitives/container';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';
import { MarketingButton } from '@/components/primitives/marketing-button';

export const ctaSectionVariants = cva('', {
  variants: {
    layout: {
      centered: 'text-center',
      split: '',
    },
  },
  defaultVariants: {
    layout: 'centered',
  },
});

export interface CTAAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
}

export interface CTASectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'>,
    VariantProps<typeof ctaSectionVariants> {
  title: React.ReactNode;
  subtitle?: string;
  actions: CTAAction[];
  note?: string;
  background?: 'default' | 'muted' | 'dark' | 'brand';
}

export const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
  (
    {
      className,
      layout = 'centered',
      title,
      subtitle,
      actions,
      note,
      background = 'dark',
      ...props
    },
    ref,
  ) => {
    const isDark = background === 'dark' || background === 'brand';

    if (layout === 'split') {
      return (
        <Section ref={ref} background={background} spacing="lg" className={className} {...props}>
          <Container>
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="max-w-xl">
                <Heading as="h2" size="display-sm" className={isDark ? 'text-white' : ''}>
                  {title}
                </Heading>
                {subtitle && (
                  <Text
                    size="body-lg"
                    tone={isDark ? 'inherit' : 'secondary'}
                    className={cn('mt-4', isDark && 'text-neutral-300')}
                  >
                    {subtitle}
                  </Text>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                {actions.map((action, i) => (
                  <MarketingButton
                    key={i}
                    variant={action.variant ?? (i === 0 ? 'primary' : 'secondary')}
                    size="lg"
                    href={action.href}
                  >
                    {action.label}
                  </MarketingButton>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      );
    }

    return (
      <Section
        ref={ref}
        background={background}
        spacing="lg"
        className={cn(ctaSectionVariants({ layout }), className)}
        {...props}
      >
        <Container size="md">
          <Heading as="h2" size="display-md" className={isDark ? 'text-white' : ''}>
            {title}
          </Heading>
          {subtitle && (
            <Text
              size="body-lg"
              tone={isDark ? 'inherit' : 'secondary'}
              className={cn('mx-auto mt-4 max-w-xl', isDark && 'text-neutral-300')}
            >
              {subtitle}
            </Text>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {actions.map((action, i) => (
              <MarketingButton
                key={i}
                variant={action.variant ?? (i === 0 ? 'primary' : 'secondary')}
                size="lg"
                href={action.href}
              >
                {action.label}
              </MarketingButton>
            ))}
          </div>
          {note && (
            <Text size="caption" tone="muted" className={cn('mt-4', isDark && 'text-neutral-500')}>
              {note}
            </Text>
          )}
        </Container>
      </Section>
    );
  },
);
CTASection.displayName = 'CTASection';
