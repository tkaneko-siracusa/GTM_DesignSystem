import * as React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/primitives/section';
import { Container } from '@/components/primitives/container';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface StatsSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  stats: StatItem[];
  background?: 'default' | 'muted' | 'dark' | 'brand';
}

export const StatsSection = React.forwardRef<HTMLElement, StatsSectionProps>(
  ({ className, eyebrow, title, subtitle, stats, background = 'default', ...props }, ref) => {
    const isDark = background === 'dark' || background === 'brand';

    return (
      <Section ref={ref} background={background} spacing="lg" className={className} {...props}>
        <Container>
          {(eyebrow || title || subtitle) && (
            <div className="mb-12 text-center lg:mb-16">
              {eyebrow && (
                <Text size="overline" tone="brand" className="mb-4">
                  {eyebrow}
                </Text>
              )}
              {title && (
                <Heading as="h2" size="display-md" className={isDark ? 'text-white' : ''}>
                  {title}
                </Heading>
              )}
              {subtitle && (
                <Text
                  size="body-lg"
                  tone={isDark ? 'inherit' : 'secondary'}
                  className={cn('mx-auto mt-4 max-w-2xl', isDark && 'text-neutral-300')}
                >
                  {subtitle}
                </Text>
              )}
            </div>
          )}

          <div
            className={cn(
              'grid gap-8 text-center',
              stats.length <= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4',
            )}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div
                  className={cn(
                    'text-display-sm font-extrabold tracking-tight md:text-display-md',
                    isDark ? 'text-white' : 'text-primary-500',
                  )}
                >
                  {stat.value}
                </div>
                <Text
                  as="div"
                  size="body-md"
                  tone={isDark ? 'inherit' : 'default'}
                  className={cn('mt-2 font-semibold', isDark && 'text-white')}
                >
                  {stat.label}
                </Text>
                {stat.description && (
                  <Text size="body-sm" tone={isDark ? 'inherit' : 'muted'} className={cn('mt-1', isDark && 'text-neutral-400')}>
                    {stat.description}
                  </Text>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    );
  },
);
StatsSection.displayName = 'StatsSection';
