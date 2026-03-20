import * as React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/primitives/section';
import { Container } from '@/components/primitives/container';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';

export interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

export interface LogoCloudProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: string;
  title?: React.ReactNode;
  logos: LogoItem[];
  scrolling?: boolean;
  background?: 'default' | 'muted' | 'dark' | 'brand';
}

export const LogoCloud = React.forwardRef<HTMLElement, LogoCloudProps>(
  ({ className, eyebrow, title, logos, scrolling = false, background = 'default', ...props }, ref) => {
    const isDark = background === 'dark' || background === 'brand';

    return (
      <Section ref={ref} background={background} spacing="md" className={className} {...props}>
        <Container>
          {(eyebrow || title) && (
            <div className="mb-10 text-center">
              {eyebrow && (
                <Text size="overline" tone="brand" className="mb-4">
                  {eyebrow}
                </Text>
              )}
              {title && (
                <Heading as="h2" size="heading-lg" className={isDark ? 'text-white' : ''}>
                  {title}
                </Heading>
              )}
            </div>
          )}

          {scrolling ? (
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white dark:from-neutral-950" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white dark:from-neutral-950" />
              <div className="animate-scroll flex gap-12">
                {[...logos, ...logos].map((item, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex shrink-0 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0',
                      isDark && 'invert',
                    )}
                    aria-label={item.name}
                  >
                    {item.logo}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {logos.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0',
                    isDark && 'invert',
                  )}
                  aria-label={item.name}
                >
                  {item.logo}
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>
    );
  },
);
LogoCloud.displayName = 'LogoCloud';
