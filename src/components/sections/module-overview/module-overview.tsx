import * as React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/primitives/section';
import { Container } from '@/components/primitives/container';
import { Heading } from '@/components/primitives/heading';
import { Text } from '@/components/primitives/text';

export interface ModuleInfo {
  name: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ArchitectureLayer {
  name: string;
  modules: ModuleInfo[];
}

export interface ModuleOverviewProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  layers: ArchitectureLayer[];
  background?: 'default' | 'muted' | 'dark' | 'brand';
}

export const ModuleOverview = React.forwardRef<HTMLElement, ModuleOverviewProps>(
  ({ className, eyebrow, title, subtitle, layers, background = 'dark', ...props }, ref) => {
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

          <div className="space-y-4">
            {layers.map((layer, i) => (
              <div key={i}>
                <Text
                  size="caption"
                  tone="muted"
                  className={cn('mb-2 font-mono uppercase tracking-wider', isDark && 'text-neutral-500')}
                >
                  {layer.name}
                </Text>
                <div
                  className={cn(
                    'grid gap-3',
                    layer.modules.length === 1
                      ? 'grid-cols-1'
                      : layer.modules.length === 2
                        ? 'grid-cols-1 sm:grid-cols-2'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
                  )}
                >
                  {layer.modules.map((mod, j) => (
                    <div
                      key={j}
                      className={cn(
                        'group flex items-start gap-3 rounded-xl border p-4 transition-all hover:border-primary-500/50',
                        isDark
                          ? 'border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900'
                          : 'border-neutral-200 bg-white hover:shadow-md',
                      )}
                    >
                      {mod.icon && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                          {mod.icon}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <Text
                            as="span"
                            size="body-sm"
                            tone="brand"
                            className="font-mono font-semibold"
                          >
                            {mod.name}
                          </Text>
                          <Text as="span" size="caption" tone="muted">
                            {mod.label}
                          </Text>
                        </div>
                        <Text size="caption" tone={isDark ? 'inherit' : 'secondary'} className={cn('mt-1', isDark && 'text-neutral-400')}>
                          {mod.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* データフロー図 */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <Text size="caption" tone="muted" className="font-mono">
              Client → PolaGate → PolaStore / PolaFind / PolaLens
            </Text>
            <Text size="caption" tone="muted" className="font-mono">
              PolaStore CDC → PolaCast / PolaFind / PolaLens
            </Text>
          </div>
        </Container>
      </Section>
    );
  },
);
ModuleOverview.displayName = 'ModuleOverview';
