import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from '../../components/layout/page-layout';
import { HeroSection } from '../../components/sections/hero-section';
import { FeatureGrid } from '../../components/sections/feature-grid';
import { AirPocketFeature } from '../../components/sections/air-pocket-feature';
import { StatsSection } from '../../components/sections/stats-section';
import { CTASection } from '../../components/sections/cta-section';
import { FAQSection } from '../../components/sections/faq-section';
import { GradientText } from '../../components/primitives/gradient-text';
import { Heading } from '../../components/primitives/heading';

const meta: Meta = {
  title: 'Examples/LandingPage',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

export const TopPage: Story = {
  render: (_, { globals }) => {
    const isJa = globals.locale === 'ja';
    return (
      <PageLayout
        headerProps={{
          navItems: [
            { label: isJa ? '機能' : 'Features', href: '#features' },
            { label: isJa ? '料金' : 'Pricing', href: '#pricing' },
            { label: isJa ? 'ドキュメント' : 'Docs', href: '/docs' },
            { label: isJa ? 'ブログ' : 'Blog', href: '/blog' },
          ],
          actions: [
            { label: isJa ? 'ログイン' : 'Log in', href: '/login', variant: 'ghost' },
            { label: isJa ? '無料で始める' : 'Start Free', href: '/signup', variant: 'primary' },
          ],
        }}
        footerProps={{
          description: 'Enterprise Agent Stack',
          linkGroups: [
            {
              title: isJa ? 'プロダクト' : 'Product',
              links: [
                { label: isJa ? '機能' : 'Features', href: '/features' },
                { label: isJa ? '料金' : 'Pricing', href: '/pricing' },
              ],
            },
            {
              title: isJa ? '開発者' : 'Developers',
              links: [
                { label: isJa ? 'ドキュメント' : 'Docs', href: '/docs' },
                { label: 'API', href: '/api' },
              ],
            },
            {
              title: isJa ? '会社' : 'Company',
              links: [
                { label: isJa ? 'ブログ' : 'Blog', href: '/blog' },
                { label: isJa ? 'お問い合わせ' : 'Contact', href: '/contact' },
              ],
            },
          ],
          copyright: `© ${new Date().getFullYear()} Polastack, Inc.`,
          legalLinks: [
            { label: isJa ? 'プライバシー' : 'Privacy', href: '/privacy' },
            { label: isJa ? '利用規約' : 'Terms', href: '/terms' },
          ],
        }}
      >
        {/* Hero */}
        <HeroSection
          layout="centered"
          title={
            <Heading as="h1" size="display-2xl">
              {isJa ? (
                <>
                  Agent Coding時代の、
                  <br />
                  <GradientText as="span">消えない複雑性を解決する。</GradientText>
                </>
              ) : (
                <>
                  Solve the unsolvable complexity
                  <br />
                  <GradientText as="span">of the Agent Coding era.</GradientText>
                </>
              )}
            </Heading>
          }
          subtitle={
            isJa
              ? 'AIエージェントにAPI仕様を渡すだけで、エンタープライズ品質の検索・分析・認証基盤が即座に立ち上がる。'
              : 'Build enterprise-grade business apps rapidly with 8 integrated modules.'
          }
          actions={[
            { label: isJa ? '無料で開発を始める' : 'Start Free', href: '/signup' },
            { label: isJa ? 'ドキュメント' : 'Documentation', href: '/docs', variant: 'secondary' },
          ]}
        />

        {/* Stats */}
        <StatsSection
          background="muted"
          stats={
            isJa
              ? [
                  { value: '70%', label: '開発時間短縮' },
                  { value: '8', label: '統合モジュール' },
                  { value: '99.9%', label: 'SLA保証' },
                  { value: '3-5週間', label: '本番デプロイ' },
                ]
              : [
                  { value: '70%', label: 'Dev time saved' },
                  { value: '8', label: 'Modules integrated' },
                  { value: '99.9%', label: 'SLA guaranteed' },
                  { value: '3-5 wks', label: 'To production' },
                ]
          }
        />

        {/* Feature Grid */}
        <FeatureGrid
          eyebrow={isJa ? 'モジュール' : 'MODULES'}
          title={isJa ? '11の統合モジュール' : '11 Integrated Modules'}
          subtitle={
            isJa
              ? 'エンタープライズ要件を網羅したヘッドレス・バックエンド群。'
              : 'Headless backends covering all enterprise requirements.'
          }
          features={
            isJa
              ? [
                  { title: 'PolaAuth', description: '認証・SSO/SAML・SCIM' },
                  { title: 'PolaStore', description: 'メタデータ駆動DB・RLS/FLS' },
                  { title: 'PolaGate', description: 'SDK/MCP自動生成' },
                  { title: 'PolaFind', description: 'typo tolerant全文検索' },
                  { title: 'PolaLens', description: 'セマンティックレイヤー分析' },
                  { title: 'PolaCast', description: 'CDC・Webhook連携' },
                  { title: 'PolaWatch', description: '分散トレーシング・監視' },
                  { title: 'PolaNest', description: 'Zero DevOpsホスティング' },
                ]
              : [
                  { title: 'PolaAuth', description: 'Auth, SSO/SAML, SCIM' },
                  { title: 'PolaStore', description: 'Metadata-driven DB, RLS/FLS' },
                  { title: 'PolaGate', description: 'Auto SDK/MCP generation' },
                  { title: 'PolaFind', description: 'Typo tolerant full-text search' },
                  { title: 'PolaLens', description: 'Semantic layer analytics' },
                  { title: 'PolaCast', description: 'CDC & Webhook integrations' },
                  { title: 'PolaWatch', description: 'Distributed tracing & monitoring' },
                  { title: 'PolaNest', description: 'Zero DevOps hosting' },
                ]
          }
          columns={4}
        />

        {/* Air Pockets */}
        <AirPocketFeature
          eyebrow={isJa ? '差別化' : 'DIFFERENTIATION'}
          title={isJa ? '競合にない、3つの標準機能' : '3 features no competitor offers'}
          background="muted"
          airPockets={
            isJa
              ? [
                  {
                    module: 'PolaFind',
                    headline: '打ち間違えても、見つかる。',
                    description: '日本語typo tolerant全文検索を標準搭載。100万件でもミリ秒。',
                    proof: '競合完全不在の差別化領域',
                    competitors: [
                      { name: 'kintone', status: '部分一致のみ' },
                      { name: 'Supabase', status: 'PGroonga必要' },
                    ],
                  },
                  {
                    module: 'PolaStore',
                    headline: '見せたい情報だけ見せる。',
                    description: 'FLS + 監査ログをDB最下層で強制。SOC2/ISMS対応を標準充足。',
                    proof: 'アプリコードに依存しないセキュリティ',
                    competitors: [
                      { name: 'kintone', status: 'FLS部分対応' },
                      { name: 'Supabase', status: 'FLS未成熟' },
                    ],
                  },
                  {
                    module: 'PolaLens',
                    headline: 'SQLなしで分析できる。',
                    description: 'セマンティックレイヤーで非エンジニアもメトリクス定義可能。',
                    proof: '6競合いずれも標準提供なし',
                    competitors: [
                      { name: 'kintone', status: '非対応' },
                      { name: 'Supabase', status: '非対応' },
                    ],
                  },
                ]
              : [
                  {
                    module: 'PolaFind',
                    headline: 'Find it even with typos.',
                    description: 'Japanese typo-tolerant full-text search built-in. Milliseconds even with 1M records.',
                    proof: 'Zero competitors in this space',
                    competitors: [
                      { name: 'kintone', status: 'Partial match only' },
                      { name: 'Supabase', status: 'Needs PGroonga' },
                    ],
                  },
                  {
                    module: 'PolaStore',
                    headline: 'Show only what you want.',
                    description: 'FLS + audit logs enforced at DB layer. SOC2/ISMS compliant out of the box.',
                    proof: 'Security independent of app code',
                    competitors: [
                      { name: 'kintone', status: 'Partial FLS' },
                      { name: 'Supabase', status: 'FLS immature' },
                    ],
                  },
                  {
                    module: 'PolaLens',
                    headline: 'Analyze without SQL.',
                    description: 'Semantic layer lets non-engineers define metrics.',
                    proof: 'No competitor offers this as standard',
                    competitors: [
                      { name: 'kintone', status: 'Not supported' },
                      { name: 'Supabase', status: 'Not supported' },
                    ],
                  },
                ]
          }
        />

        {/* FAQ */}
        <FAQSection
          eyebrow="FAQ"
          title={isJa ? 'よくある質問' : 'Frequently Asked Questions'}
          items={
            isJa
              ? [
                  { question: 'Polastackとは何ですか？', answer: 'AIエージェントにAPI仕様を渡すだけで、エンタープライズ品質の検索・分析・認証基盤が即座に立ち上がる業務アプリ開発プラットフォームです。11の統合モジュールで構成されています。' },
                  { question: 'Free Planから有料プランへの移行時にデータは引き継がれますか？', answer: 'はい。Free Planのデータと設定は有料プランに完全に引き継がれます。' },
                  { question: 'フロントエンド技術スタックを変更する必要はありますか？', answer: 'いいえ。ヘッドレスアーキテクチャなので、React / Next.js / Vue等で開発できます。' },
                ]
              : [
                  { question: 'What is Polastack?', answer: 'An Enterprise Agent Stack integrating 8 headless backend modules covering all enterprise requirements.' },
                  { question: 'Is data preserved when upgrading from Free?', answer: 'Yes. All Free Plan data and configurations are fully preserved.' },
                  { question: 'Do I need to change my frontend tech stack?', answer: 'No. Polastack is headless — use React, Next.js, Vue, or any framework.' },
                ]
          }
        />

        {/* CTA */}
        <CTASection
          background="dark"
          title={isJa ? '無料で開発を始める' : 'Start building for free'}
          subtitle={isJa ? 'クレジットカード不要。全11モジュールを今すぐ試せます。' : 'No credit card required. Try all 11 modules instantly.'}
          actions={[
            { label: isJa ? '無料で始める' : 'Get Started Free', href: '/signup', variant: 'gradient' },
            { label: isJa ? 'デモを予約' : 'Book a Demo', href: '/demo', variant: 'secondary' },
          ]}
          note="No Credit Card Required"
        />
      </PageLayout>
    );
  },
};
