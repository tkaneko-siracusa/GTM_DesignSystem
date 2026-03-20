import type { Meta, StoryObj } from '@storybook/react';
import { PricingTable } from '../../components/sections/pricing';


const meta: Meta<typeof PricingTable> = {
  title: 'Sections/PricingTable',
  component: PricingTable,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof PricingTable>;

export const FourPlans: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <PricingTable
        eyebrow={isJa ? '料金プラン' : 'PRICING'}
        title={isJa ? 'シンプルで透明な料金体系' : 'Simple, transparent pricing'}
        subtitle={
          isJa
            ? 'すべてのプランで全8モジュールが利用可能。規模に合わせてスケール。'
            : 'All 8 modules available on every plan. Scale as you grow.'
        }
        plans={[
          {
            name: 'Free',
            description: isJa ? '開発・評価用途' : 'Development & evaluation',
            price: (
              <span className="text-display-sm font-bold tracking-tight md:text-display-md">
                ¥0
              </span>
            ),
            priceNote: isJa ? '開発環境のみ' : 'Dev environment only',
            features: [
              { text: isJa ? '全8モジュール利用可能' : 'All 8 modules', included: true },
              { text: isJa ? '3ユーザーまで' : 'Up to 3 users', included: true },
              { text: isJa ? '1テナント（開発用）' : '1 tenant (dev)', included: true },
              { text: isJa ? 'コミュニティサポート' : 'Community support', included: true },
              { text: isJa ? '本番環境' : 'Production environment', included: false },
              { text: isJa ? 'SSO/SAML' : 'SSO/SAML', included: false },
            ],
            action: {
              label: isJa ? '無料で始める' : 'Start Free',
              href: '/signup',
              variant: 'secondary',
            },
          },
          {
            name: 'Platform',
            description: isJa ? '開発会社向け（受託・ISV・OEM）' : 'For dev agencies (contract, ISV, OEM)',
            price: (
              <span className="text-display-sm font-bold tracking-tight md:text-display-md">
                ¥30,000
                <span className="text-body-md font-normal text-neutral-500">{isJa ? '/月' : '/mo'}</span>
              </span>
            ),
            priceNote: isJa ? '税別・1テナント + 2アプリ含む' : 'excl. tax, includes 1 tenant + 2 apps',
            features: [
              { text: isJa ? '全8モジュール統合' : 'All 8 modules integrated', included: true },
              { text: isJa ? 'メール + チャットサポート' : 'Email + chat support', included: true },
              { text: isJa ? 'SLO 99.9%' : 'SLO 99.9%', included: true },
              { text: isJa ? '監査ログ1年保持' : 'Audit logs 1-year retention', included: true },
              { text: isJa ? 'マルチテナント対応' : 'Multi-tenant support', included: true },
              { text: isJa ? 'SSO/SAML（オプション）' : 'SSO/SAML (optional)', included: true },
            ],
            action: {
              label: isJa ? '申し込む' : 'Get Started',
              href: '/signup/platform',
              variant: 'secondary',
            },
          },
          {
            name: 'Corporate',
            description: isJa ? '企業自社利用向け' : 'For enterprise internal use',
            badge: isJa ? 'おすすめ' : 'Recommended',
            highlighted: true,
            price: (
              <span className="text-display-sm font-bold tracking-tight md:text-display-md">
                ¥50,000
                <span className="text-body-md font-normal text-neutral-500">{isJa ? '/月' : '/mo'}</span>
              </span>
            ),
            priceNote: isJa ? '税別・10ライセンス含む' : 'excl. tax, includes 10 licenses',
            features: [
              { text: isJa ? '全8モジュール統合' : 'All 8 modules integrated', included: true },
              { text: isJa ? 'アプリ登録数無制限' : 'Unlimited app registrations', included: true },
              { text: isJa ? 'SLA 99.9%' : 'SLA 99.9%', included: true },
              { text: isJa ? '監査ログ1年保持' : 'Audit logs 1-year retention', included: true },
              { text: isJa ? '追加ライセンス ¥1,000/月' : 'Additional license ¥1,000/mo', included: true },
              { text: isJa ? 'SSO/SAML（オプション）' : 'SSO/SAML (optional)', included: true },
            ],
            action: {
              label: isJa ? '申し込む' : 'Get Started',
              href: '/signup/corporate',
              variant: 'primary',
            },
          },
          {
            name: 'Enterprise',
            description: isJa ? '大規模企業向け' : 'For large enterprises',
            price: (
              <span className="text-display-sm font-bold tracking-tight md:text-display-md">
                {isJa ? 'カスタム' : 'Custom'}
              </span>
            ),
            priceNote: isJa ? '300ユーザー超・年間¥500万超' : '300+ users, ¥5M+/year',
            features: [
              { text: isJa ? '全8モジュール統合' : 'All 8 modules integrated', included: true },
              { text: isJa ? 'SLA 99.95%' : 'SLA 99.95%', included: true },
              { text: isJa ? 'SSO/SCIM 込み' : 'SSO/SCIM included', included: true },
              { text: isJa ? '専任CSM' : 'Dedicated CSM', included: true },
              { text: isJa ? '物理テナント分離' : 'Physical tenant isolation', included: true },
              { text: isJa ? '請求書払い対応' : 'Invoice billing', included: true },
            ],
            action: {
              label: isJa ? 'お問い合わせ' : 'Contact Sales',
              href: '/contact',
              variant: 'secondary',
            },
          },
        ]}
      />
    );
  },
};
