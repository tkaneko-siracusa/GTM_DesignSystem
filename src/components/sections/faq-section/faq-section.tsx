import * as React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/primitives/section';
import { Container } from '@/components/primitives/container';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  items: FAQItem[];
  background?: 'default' | 'muted' | 'dark' | 'brand';
}

const AccordionItem: React.FC<{ item: FAQItem; isDark: boolean }> = ({ item, isDark }) => {
  const [open, setOpen] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={cn('border-b', isDark ? 'border-neutral-800' : 'border-neutral-200')}>
      <button
        type="button"
        className={cn(
          'flex w-full items-center justify-between py-5 text-left transition-colors',
          isDark ? 'text-white hover:text-primary-400' : 'text-neutral-900 hover:text-primary-500',
        )}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <Heading as="h3" size="heading-sm" className="pr-8">
          {item.question}
        </Heading>
        <span
          className={cn(
            'shrink-0 transition-transform duration-200',
            open && 'rotate-45',
          )}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="10" y1="4" x2="10" y2="16" />
            <line x1="4" y1="10" x2="16" y2="10" />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: open ? contentRef.current?.scrollHeight : 0 }}
        role="region"
      >
        <div className="pb-5">
          <Text size="body-md" tone={isDark ? 'inherit' : 'secondary'} className={isDark ? 'text-neutral-300' : ''}>
            {item.answer}
          </Text>
        </div>
      </div>
    </div>
  );
};

export const FAQSection = React.forwardRef<HTMLElement, FAQSectionProps>(
  ({ className, eyebrow, title, subtitle, items, background = 'default', ...props }, ref) => {
    const isDark = background === 'dark' || background === 'brand';

    return (
      <Section ref={ref} background={background} spacing="lg" className={className} {...props}>
        <Container size="md">
          {(eyebrow || title || subtitle) && (
            <div className="mb-12 text-center">
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
                  className={cn('mx-auto mt-4 max-w-xl', isDark && 'text-neutral-300')}
                >
                  {subtitle}
                </Text>
              )}
            </div>
          )}

          <div>
            {items.map((item, i) => (
              <AccordionItem key={i} item={item} isDark={isDark} />
            ))}
          </div>
        </Container>
      </Section>
    );
  },
);
FAQSection.displayName = 'FAQSection';
