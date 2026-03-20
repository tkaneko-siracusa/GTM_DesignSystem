import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { Section } from '@/components/primitives/section';
import { Container } from '@/components/primitives/container';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';
import { MarketingButton } from '@/components/primitives/marketing-button';
import { Badge } from '@/components/primitives/badge';
import { GradientText } from '@/components/primitives/gradient-text';

export const heroSectionVariants = cva('relative overflow-hidden', {
  variants: {
    layout: {
      centered: 'text-center',
      'split-image': '',
      'with-demo': 'text-center',
    },
  },
  defaultVariants: {
    layout: 'centered',
  },
});

export interface HeroAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
}

export interface HeroSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'>,
    VariantProps<typeof heroSectionVariants> {
  badge?: string;
  title: React.ReactNode;
  titleGradient?: string;
  subtitle?: string;
  actions?: HeroAction[];
  image?: React.ReactNode;
  background?: 'default' | 'muted' | 'dark' | 'brand';
}

export const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      layout = 'centered',
      badge,
      title,
      titleGradient,
      subtitle,
      actions,
      image,
      background = 'default',
      ...props
    },
    ref,
  ) => {
    const titleElement =
      typeof title === 'string' && titleGradient ? (
        <Heading as="h1" size="display-2xl">
          {title}
          <br />
          <GradientText as="span" customGradient={titleGradient} gradient="custom">
            {titleGradient ? title : null}
          </GradientText>
        </Heading>
      ) : (
        <Heading as="h1" size="display-2xl">
          {title}
        </Heading>
      );

    const isDark = background === 'dark' || background === 'brand';

    const content = (
      <>
        {badge && (
          <div className={layout === 'centered' || layout === 'with-demo' ? 'flex justify-center' : ''}>
            <Badge variant="default">{badge}</Badge>
          </div>
        )}

        <div className="space-y-6">
          {titleElement}

          {subtitle && (
            <Text
              size="body-lg"
              tone={isDark ? 'inherit' : 'secondary'}
              className={cn(
                'max-w-2xl',
                (layout === 'centered' || layout === 'with-demo') && 'mx-auto',
                isDark && 'text-neutral-300',
              )}
            >
              {subtitle}
            </Text>
          )}
        </div>

        {actions && actions.length > 0 && (
          <div
            className={cn(
              'flex flex-wrap gap-4',
              (layout === 'centered' || layout === 'with-demo') && 'justify-center',
            )}
          >
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
        )}
      </>
    );

    if (layout === 'split-image') {
      return (
        <Section
          ref={ref}
          background={background}
          spacing="xl"
          className={cn(heroSectionVariants({ layout }), className)}
          {...props}
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8">{content}</div>
              {image && <div className="relative">{image}</div>}
            </div>
          </Container>
        </Section>
      );
    }

    return (
      <Section
        ref={ref}
        background={background}
        spacing="xl"
        className={cn(heroSectionVariants({ layout }), className)}
        {...props}
      >
        <Container>
          <div className="space-y-8">{content}</div>
        </Container>
        {image && layout === 'with-demo' && (
          <Container className="mt-12">
            <div className="relative">{image}</div>
          </Container>
        )}
      </Section>
    );
  },
);
HeroSection.displayName = 'HeroSection';
