import * as React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/primitives/section';
import { Container } from '@/components/primitives/container';
import { Grid } from '@/components/primitives/grid';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: React.ReactNode;
}

export interface TestimonialSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  testimonials: Testimonial[];
  columns?: 1 | 2 | 3;
  background?: 'default' | 'muted' | 'dark' | 'brand';
}

export const TestimonialSection = React.forwardRef<HTMLElement, TestimonialSectionProps>(
  ({ className, eyebrow, title, subtitle, testimonials, columns = 3, background = 'default', ...props }, ref) => {
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

          <Grid columns={columns} gap="lg">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={cn(
                  'rounded-2xl border p-6',
                  isDark
                    ? 'border-neutral-800 bg-neutral-900'
                    : 'border-neutral-200 bg-white',
                )}
              >
                <Text
                  size="body-md"
                  tone={isDark ? 'inherit' : 'default'}
                  className={cn('mb-6', isDark && 'text-neutral-200')}
                >
                  &ldquo;{t.quote}&rdquo;
                </Text>
                <div className="flex items-center gap-3">
                  {t.avatar && (
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      {t.avatar}
                    </div>
                  )}
                  <div>
                    <Text as="div" size="body-sm" tone="default" className={cn('font-semibold', isDark && 'text-white')}>
                      {t.author}
                    </Text>
                    {(t.role || t.company) && (
                      <Text as="div" size="caption" tone="muted">
                        {[t.role, t.company].filter(Boolean).join(' / ')}
                      </Text>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>
    );
  },
);
TestimonialSection.displayName = 'TestimonialSection';
