import * as React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/primitives/section';
import { Container } from '@/components/primitives/container';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';

export interface ComparisonColumn {
  name: string;
  highlighted?: boolean;
}

export interface ComparisonRow {
  feature: string;
  values: (string | boolean | React.ReactNode)[];
}

export interface ComparisonTableProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  background?: 'default' | 'muted' | 'dark' | 'brand';
}

const CellValue: React.FC<{ value: string | boolean | React.ReactNode }> = ({ value }) => {
  if (typeof value === 'boolean') {
    return (
      <span className={value ? 'text-primary-500' : 'text-neutral-400'}>
        {value ? '✓' : '—'}
      </span>
    );
  }
  return <>{value}</>;
};

export const ComparisonTable = React.forwardRef<HTMLElement, ComparisonTableProps>(
  ({ className, eyebrow, title, subtitle, columns, rows, background = 'default', ...props }, ref) => {
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

          <div className="overflow-x-auto">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr>
                  <th className="p-4 text-left" />
                  {columns.map((col, i) => (
                    <th
                      key={i}
                      className={cn(
                        'p-4 text-center',
                        col.highlighted && 'bg-primary-50 dark:bg-primary-950/30',
                      )}
                    >
                      <Heading
                        as="h3"
                        size="heading-md"
                        className={cn(col.highlighted && 'text-primary-500')}
                      >
                        {col.name}
                      </Heading>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={cn(
                      'border-t',
                      isDark ? 'border-neutral-800' : 'border-neutral-200',
                    )}
                  >
                    <td className="p-4">
                      <Text as="span" size="body-sm" tone={isDark ? 'inherit' : 'default'} className={isDark ? 'text-neutral-200' : ''}>
                        {row.feature}
                      </Text>
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className={cn(
                          'p-4 text-center text-sm',
                          columns[j]?.highlighted && 'bg-primary-50 dark:bg-primary-950/30',
                        )}
                      >
                        <CellValue value={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    );
  },
);
ComparisonTable.displayName = 'ComparisonTable';
