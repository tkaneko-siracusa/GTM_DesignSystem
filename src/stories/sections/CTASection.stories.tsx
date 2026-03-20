import type { Meta, StoryObj } from '@storybook/react';
import { CTASection } from '../../components/sections/cta-section';

const meta: Meta<typeof CTASection> = {
  title: 'Sections/CTASection',
  component: CTASection,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof CTASection>;

export const CenteredDark: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <CTASection
        layout="centered"
        background="dark"
        title={isJa ? '無料で開発を始める' : 'Start building for free'}
        subtitle={
          isJa
            ? 'クレジットカード不要。全8モジュールを今すぐ試せます。'
            : 'No credit card required. Try all 8 modules instantly.'
        }
        actions={[
          {
            label: isJa ? '無料で始める' : 'Get Started Free',
            href: '/signup',
            variant: 'gradient',
          },
          {
            label: isJa ? 'デモを予約' : 'Book a Demo',
            href: '/demo',
            variant: 'secondary',
          },
        ]}
        note="No Credit Card Required"
      />
    );
  },
};

export const CenteredBrand: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <CTASection
        layout="centered"
        background="brand"
        title={isJa ? 'エンタープライズグレードの開発体験を' : 'Enterprise-grade development experience'}
        subtitle={
          isJa
            ? 'Polastackで、ビジネスロジックだけに集中する開発を始めましょう。'
            : 'Start focusing only on business logic with Polastack.'
        }
        actions={[
          { label: isJa ? '無料で始める' : 'Start Free', href: '/signup' },
          { label: isJa ? 'ドキュメント' : 'Documentation', href: '/docs', variant: 'ghost' },
        ]}
      />
    );
  },
};

export const Split: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <CTASection
        layout="split"
        background="muted"
        title={isJa ? '導入をご検討ですか？' : 'Considering adoption?'}
        subtitle={
          isJa
            ? '技術チームがご要件をヒアリングし、最適なプランをご提案します。'
            : 'Our technical team will assess your requirements and recommend the optimal plan.'
        }
        actions={[
          { label: isJa ? 'お問い合わせ' : 'Contact Us', href: '/contact' },
        ]}
      />
    );
  },
};
